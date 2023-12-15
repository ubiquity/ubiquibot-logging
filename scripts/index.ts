import { containsValidJson, createGitHubCommentURL, generateRandomId, getLevelString } from "./helpers/utils";
import { Logs } from "./types/log";
import { Database } from "../types/supabase";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_KEY } from "./constants/index";

const filterSelect = document.getElementById("filter") as unknown as HTMLSelectElement;
const clearButton = document.getElementById("clear") as HTMLButtonElement;
const logBody = document.getElementById("log-body") as HTMLDivElement;

const jsonModal = document.getElementById("json-modal") as HTMLDivElement;
const closeModalButton = document.getElementById("close-modal") as HTMLButtonElement;
const jsonContent = document.getElementById("json-content") as HTMLDivElement;

let isLoading = false;

const openJsonModal = (validJson: string) => {
  jsonContent.textContent = validJson;

  jsonModal.style.display = "flex";
};

const updateLogTable = () => {
  const selectedFilter = filterSelect.value;
  const filteredLogs = selectedFilter === "all" ? logs : logs.filter((log) => getLevelString(log.level) === selectedFilter);

  logBody.innerHTML = "";
  filteredLogs.forEach((log) => {
    const classId = generateRandomId(10);
    const commentUrl = createGitHubCommentURL(log.org_name, log.repo_name, log.issue_number, log.comment_id);
    const row = document.createElement("tr");
    const [validJson, match, beforeText] = containsValidJson(log.log_message);
    row.innerHTML = `
        ${
          validJson
            ? `<td class="log-cell">${beforeText} - <button id="button_${classId}">Show JSON</button></td>`
            : `<td class="log-cell">${log.log_message}</td>`
        }
        <td>${getLevelString(log.level)}</td>
        <td>${log.timestamp}</td>
        <td><a href="${commentUrl}">Comment - ${log.comment_id}</a></td>
    `;
    logBody.appendChild(row);
    const logCell = document.getElementsByClassName("log-cell");
    if (validJson) {
      // show modal button for valid json row
      const showMoreButton = document.getElementById(`button_${classId}`) as HTMLButtonElement;
      showMoreButton.addEventListener("click", () => {
        if (validJson) {
          openJsonModal(JSON.stringify(JSON.parse(match), null, 2)); // properly formatted json
        }
      });
    }
  });
};

let logs: Logs[] = [];

const supabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

const fetchData = async () => {
  isLoading = true;

  if (logs.length > 0) {
    const firstAvailableTimestamp = logs.at(logs.length-1)?.timestamp;
    const { data, error } = await supabaseClient
      .from("logs")
      .select()
      .lt("timestamp", firstAvailableTimestamp)
      .order("timestamp", { ascending: false })
      .limit(25);
    if (data && data.length > 0) {
      logs.push(...data);
      updateLogTable();
    } else console.log(error);
  } else {
    const { data, error } = await supabaseClient.from("logs").select().order("timestamp", { ascending: false }).limit(30);
    if (data && data.length > 0) {
      logs.push(...data);
      updateLogTable();
    } else console.log(error);
  }

  isLoading = false;
};

const handleScroll = async () => {
  const bottom = document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight;

  if (!bottom || isLoading) {
    return;
  }
  await fetchData();
};

window.addEventListener("scroll", handleScroll);

supabaseClient
  .channel("table-db-changes")
  .on(
    "postgres_changes",
    {
      event: "INSERT",
      schema: "public",
      table: "logs",
    },
    (payload) => handlePayload(payload)
  )
  .subscribe();

const handlePayload = (logEntry: any) => {
  if (logEntry?.eventType !== "INSERT") return;
  logs.unshift(logEntry.new);
  updateLogTable();
};

filterSelect.addEventListener("change", () => {
  updateLogTable();
});

clearButton.addEventListener("click", () => {
  logs = [];
  updateLogTable();
});

closeModalButton.addEventListener("click", () => {
  jsonModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === jsonModal) {
    jsonModal.style.display = "none";
  }
  isLoading = !isLoading;
});

// Initial update
fetchData();
updateLogTable();
