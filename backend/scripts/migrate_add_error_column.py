import sqlite3
from pathlib import Path

def main() -> None:
    db_path = Path(__file__).resolve().parents[1] / "database.db"
    if not db_path.exists():
        raise FileNotFoundError(f"Database not found: {db_path}")

    conn = sqlite3.connect(db_path)
    try:
        conn.execute("ALTER TABLE story_jobs ADD COLUMN error TEXT")
        conn.commit()
        print("Added error column to story_jobs.")
    except sqlite3.OperationalError as exc:
        # Likely already added.
        print(f"No change: {exc}")
    finally:
        conn.close()

if __name__ == "__main__":
    main()
