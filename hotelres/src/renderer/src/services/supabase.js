import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fiqxjypqqmjyhxwmfpgs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpcXhqeXBxcW1qeWh4d21mcGdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5MjA2MjQsImV4cCI6MjAyNjQ5NjYyNH0.HXRCOBvuQ2sLhnZXy1VPbw_-3DiIPXDUUd9EtGIjOYE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
