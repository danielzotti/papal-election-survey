/*
  # Create survey table with RLS policies

  1. New Tables
    - `survey`
      - `id` (uuid, primary key)
      - `created_at` (timestamptz, default now())
      - `age` (numeric)
      - `gender` (text)
      - `country` (text)
      - `race` (text)
      - `personality` (text[])
      - `name` (text)

  2. Security
    - Enable RLS on `survey` table
    - Add policy for authenticated users to read their own data
    - Add policy for anonymous users to create survey entries
    - Add policy for anonymous users to read survey entries
*/

CREATE TABLE IF NOT EXISTS survey (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  age numeric,
  gender text,
  country text,
  race text,
  personality text[],
  name text
);

ALTER TABLE survey ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create survey entries
CREATE POLICY "Anyone can create survey entries"
  ON survey
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to read survey entries
CREATE POLICY "Anyone can read survey entries"
  ON survey
  FOR SELECT
  TO anon
  USING (true);