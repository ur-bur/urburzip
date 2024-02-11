export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admins: {
        Row: {
          created_at: string
          id: string
          name: string
          role: number
          semester: number
          year: number
        }
        Insert: {
          created_at?: string
          id: string
          name: string
          role: number
          semester: number
          year: number
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          role?: number
          semester?: number
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "admins_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      apply: {
        Row: {
          allow: boolean
          created_at: string
          email: string
          id: string
          introduce: string
          name: string
          phone: string
          semester: number
          sid: number
          year: number
        }
        Insert: {
          allow: boolean
          created_at?: string
          email: string
          id?: string
          introduce: string
          name: string
          phone: string
          semester: number
          sid: number
          year: number
        }
        Update: {
          allow?: boolean
          created_at?: string
          email?: string
          id?: string
          introduce?: string
          name?: string
          phone?: string
          semester?: number
          sid?: number
          year?: number
        }
        Relationships: []
      }
      members: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          paid: boolean
          phone: string
          role: number
          semester: number
          sid: number
          year: number
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          paid: boolean
          phone: string
          role: number
          semester: number
          sid: number
          year: number
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          paid?: boolean
          phone?: string
          role?: number
          semester?: number
          sid?: number
          year?: number
        }
        Relationships: []
      }
      musics: {
        Row: {
          author: string | null
          created_at: string
          id: string
          index: number
          lyric: string | null
          title: string
          url: string
        }
        Insert: {
          author?: string | null
          created_at?: string
          id?: string
          index?: number
          lyric?: string | null
          title: string
          url: string
        }
        Update: {
          author?: string | null
          created_at?: string
          id?: string
          index?: number
          lyric?: string | null
          title?: string
          url?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string
          created_at: string
          display_name: string
          email: string | null
          id: string
          phone: string | null
          sid: number | null
        }
        Insert: {
          avatar_url: string
          created_at?: string
          display_name: string
          email?: string | null
          id: string
          phone?: string | null
          sid?: number | null
        }
        Update: {
          avatar_url?: string
          created_at?: string
          display_name?: string
          email?: string | null
          id?: string
          phone?: string | null
          sid?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
