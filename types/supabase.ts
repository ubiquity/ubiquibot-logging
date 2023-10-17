export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      access: {
        Row: {
          created_at: string | null;
          multiplier_access: boolean | null;
          price_access: boolean | null;
          priority_access: boolean | null;
          repository: string;
          time_access: boolean | null;
          updated_at: string | null;
          user_name: string;
        };
        Insert: {
          created_at?: string | null;
          multiplier_access?: boolean | null;
          price_access?: boolean | null;
          priority_access?: boolean | null;
          repository: string;
          time_access?: boolean | null;
          updated_at?: string | null;
          user_name: string;
        };
        Update: {
          created_at?: string | null;
          multiplier_access?: boolean | null;
          price_access?: boolean | null;
          priority_access?: boolean | null;
          repository?: string;
          time_access?: boolean | null;
          updated_at?: string | null;
          user_name?: string;
        };
        Relationships: [];
      };
      debits: {
        Row: {
          amount: number;
          created_at: string;
          id: number;
          updated_at: string;
        };
        Insert: {
          amount: number;
          created_at: string;
          id?: number;
          updated_at: string;
        };
        Update: {
          amount?: number;
          created_at?: string;
          id?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      issues: {
        Row: {
          assignees: string[] | null;
          closed_at: string | null;
          comments_url: string;
          completed_at: string | null;
          created_at: string | null;
          events_url: string;
          id: number;
          issue_number: number;
          issue_url: string;
          labels: string[] | null;
          price: string | null;
          priority: string | null;
          recipient: string | null;
          started_at: string | null;
          status: Database["public"]["Enums"]["issue_status"];
          timeline: string | null;
          txhash: string[] | null;
          updated_at: string | null;
        };
        Insert: {
          assignees?: string[] | null;
          closed_at?: string | null;
          comments_url: string;
          completed_at?: string | null;
          created_at?: string | null;
          events_url: string;
          id?: number;
          issue_number: number;
          issue_url: string;
          labels?: string[] | null;
          price?: string | null;
          priority?: string | null;
          recipient?: string | null;
          started_at?: string | null;
          status?: Database["public"]["Enums"]["issue_status"];
          timeline?: string | null;
          txhash?: string[] | null;
          updated_at?: string | null;
        };
        Update: {
          assignees?: string[] | null;
          closed_at?: string | null;
          comments_url?: string;
          completed_at?: string | null;
          created_at?: string | null;
          events_url?: string;
          id?: number;
          issue_number?: number;
          issue_url?: string;
          labels?: string[] | null;
          price?: string | null;
          priority?: string | null;
          recipient?: string | null;
          started_at?: string | null;
          status?: Database["public"]["Enums"]["issue_status"];
          timeline?: string | null;
          txhash?: string[] | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      label_changes: {
        Row: {
          authorized: boolean;
          created: string;
          id: number;
          label_from: string;
          label_to: string;
          repository: string;
          updated: string;
          username: string;
        };
        Insert: {
          authorized: boolean;
          created: string;
          id?: number;
          label_from: string;
          label_to: string;
          repository: string;
          updated: string;
          username: string;
        };
        Update: {
          authorized?: boolean;
          created?: string;
          id?: number;
          label_from?: string;
          label_to?: string;
          repository?: string;
          updated?: string;
          username?: string;
        };
        Relationships: [];
      };
      logs: {
        Row: {
          comment_id: number | null;
          id: number;
          issue_number: number | null;
          level: number | null;
          log_message: string | null;
          org_name: string | null;
          repo_name: string | null;
          timestamp: string | null;
        };
        Insert: {
          comment_id?: number | null;
          id?: number;
          issue_number?: number | null;
          level?: number | null;
          log_message?: string | null;
          org_name?: string | null;
          repo_name?: string | null;
          timestamp?: string | null;
        };
        Update: {
          comment_id?: number | null;
          id?: number;
          issue_number?: number | null;
          level?: number | null;
          log_message?: string | null;
          org_name?: string | null;
          repo_name?: string | null;
          timestamp?: string | null;
        };
        Relationships: [];
      };
      multiplier: {
        Row: {
          created_at: string | null;
          reason: string | null;
          updated_at: string | null;
          user_id: string;
          value: number | null;
        };
        Insert: {
          created_at?: string | null;
          reason?: string | null;
          updated_at?: string | null;
          user_id: string;
          value?: number | null;
        };
        Update: {
          created_at?: string | null;
          reason?: string | null;
          updated_at?: string | null;
          user_id?: string;
          value?: number | null;
        };
        Relationships: [];
      };
      penalty: {
        Row: {
          amount: string;
          network_id: string;
          repository_name: string;
          token_address: string;
          username: string;
        };
        Insert: {
          amount?: string;
          network_id: string;
          repository_name: string;
          token_address: string;
          username: string;
        };
        Update: {
          amount?: string;
          network_id?: string;
          repository_name?: string;
          token_address?: string;
          username?: string;
        };
        Relationships: [];
      };
      permits: {
        Row: {
          bounty_hunter_address: string;
          bounty_hunter_id: number;
          created_at: string;
          deadline: string;
          id: number;
          issue_id: number;
          network_id: number;
          nonce: string;
          organization_id: number | null;
          payout_amount: string;
          repository_id: number;
          signature: string;
          token_address: string;
          wallet_owner_address: string;
        };
        Insert: {
          bounty_hunter_address: string;
          bounty_hunter_id: number;
          created_at: string;
          deadline: string;
          id?: number;
          issue_id: number;
          network_id: number;
          nonce: string;
          organization_id?: number | null;
          payout_amount: string;
          repository_id: number;
          signature: string;
          token_address: string;
          wallet_owner_address: string;
        };
        Update: {
          bounty_hunter_address?: string;
          bounty_hunter_id?: number;
          created_at?: string;
          deadline?: string;
          id?: number;
          issue_id?: number;
          network_id?: number;
          nonce?: string;
          organization_id?: number | null;
          payout_amount?: string;
          repository_id?: number;
          signature?: string;
          token_address?: string;
          wallet_owner_address?: string;
        };
        Relationships: [];
      };
      users: {
        Row: {
          bio: string | null;
          blog: string | null;
          company: string | null;
          contributions: string | null;
          created_at: string | null;
          email: string | null;
          followers: number | null;
          following: number | null;
          percent_code_reviews: number | null;
          percent_commits: number | null;
          percent_issues: number | null;
          percent_pull_requests: number | null;
          public_repos: number | null;
          twitter_username: string | null;
          updated_at: string | null;
          user_location: string | null;
          user_login: string;
          user_name: string;
          user_type: string | null;
          wallet_address: string | null;
        };
        Insert: {
          bio?: string | null;
          blog?: string | null;
          company?: string | null;
          contributions?: string | null;
          created_at?: string | null;
          email?: string | null;
          followers?: number | null;
          following?: number | null;
          percent_code_reviews?: number | null;
          percent_commits?: number | null;
          percent_issues?: number | null;
          percent_pull_requests?: number | null;
          public_repos?: number | null;
          twitter_username?: string | null;
          updated_at?: string | null;
          user_location?: string | null;
          user_login: string;
          user_name: string;
          user_type?: string | null;
          wallet_address?: string | null;
        };
        Update: {
          bio?: string | null;
          blog?: string | null;
          company?: string | null;
          contributions?: string | null;
          created_at?: string | null;
          email?: string | null;
          followers?: number | null;
          following?: number | null;
          percent_code_reviews?: number | null;
          percent_commits?: number | null;
          percent_issues?: number | null;
          percent_pull_requests?: number | null;
          public_repos?: number | null;
          twitter_username?: string | null;
          updated_at?: string | null;
          user_location?: string | null;
          user_login?: string;
          user_name?: string;
          user_type?: string | null;
          wallet_address?: string | null;
        };
        Relationships: [];
      };
      wallets: {
        Row: {
          created_at: string | null;
          updated_at: string | null;
          user_name: string;
          wallet_address: string | null;
        };
        Insert: {
          created_at?: string | null;
          updated_at?: string | null;
          user_name: string;
          wallet_address?: string | null;
        };
        Update: {
          created_at?: string | null;
          updated_at?: string | null;
          user_name?: string;
          wallet_address?: string | null;
        };
        Relationships: [];
      };
      weekly: {
        Row: {
          created_at: string | null;
          last_time: string | null;
        };
        Insert: {
          created_at?: string | null;
          last_time?: string | null;
        };
        Update: {
          created_at?: string | null;
          last_time?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      add_penalty: {
        Args: {
          _username: string;
          _repository_name: string;
          _network_id: string;
          _token_address: string;
          _penalty_amount: string;
        };
        Returns: string;
      };
      remove_penalty: {
        Args: {
          _username: string;
          _repository_name: string;
          _network_id: string;
          _token_address: string;
          _penalty_amount: string;
        };
        Returns: string;
      };
    };
    Enums: {
      issue_status: "READY_TO_START" | "IN_PROGRESS" | "IN_REVIEW" | "DONE";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
