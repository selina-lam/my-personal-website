from supabase import create_client, Client
import os

def get_supabase_client() -> Client:
    """Create and return Supabase client"""
    supabase_url = os.getenv("SUPABASE_URL")
    supabase_key = os.getenv("SUPABASE_KEY")
    
    if not supabase_url or not supabase_key:
        raise ValueError("Missing Supabase credentials")
    
    return create_client(supabase_url, supabase_key)

# Create global client instance
supabase: Client = get_supabase_client()
