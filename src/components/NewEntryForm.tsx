import { useState } from "react";
import type { FormEvent } from "react";
import type { Mood } from "../data/entries";

interface NewEntryFormProps {
  // Callback fired when user successfully submits a new entry
  onAddEntry: (
    title: string,
    content: string,
    mood: Mood,
    tags: string[]
  ) => void;
}

/**
 * Form component for creating new diary entries
 * Handles validation, state management, and submission of new entries
 */
function NewEntryForm({ onAddEntry }: NewEntryFormProps) {
  // Form field states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState<Mood>("neutral");
  const [tagsInput, setTagsInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Validation logic - checks if required fields are filled
  const titleError = title.trim() === "" ? "Title is required." : "";
  const contentError = content.trim() === "" ? "Content is required." : "";
  const isValid = titleError === "" && contentError === "";

  /**
   * Handles form submission
   * Validates input, processes tags (split by comma), and calls onAddEntry callback
   * Resets form fields after successful submission
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    if (!isValid) return;

    // Parse comma-separated tags, trim whitespace, and convert to lowercase
    const tags = tagsInput
      .split(",")
      .map((t) => t.trim().toLowerCase())
      .filter((t) => t !== "");

    onAddEntry(title.trim(), content.trim(), mood, tags);

    // Reset form fields for next entry
    setTitle("");
    setContent("");
    setMood("neutral");
    setTagsInput("");
    setSubmitted(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="entry-title">Title</label>
        <br />
        <input
          id="entry-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-invalid={submitted && titleError !== "" ? true : undefined}
          aria-describedby={
            submitted && titleError ? "title-error" : undefined
          }
        />
        {submitted && titleError && (
          <strong id="title-error" role="alert">
            {titleError}
          </strong>
        )}
      </p>

      <p>
        <label htmlFor="entry-content">Content</label>
        <br />
        <textarea
          id="entry-content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          rows={6}
          aria-invalid={submitted && contentError !== "" ? true : undefined}
          aria-describedby={
            submitted && contentError ? "content-error" : undefined
          }
        />
        {submitted && contentError && (
          <strong id="content-error" role="alert">
            {contentError}
          </strong>
        )}
      </p>

      <p>
        <label htmlFor="entry-mood">Mood</label>
        <br />
        <select
          id="entry-mood"
          value={mood}
          onChange={(event) => setMood(event.target.value as Mood)}
        >
          <option value="happy">happy</option>
          <option value="curious">curious</option>
          <option value="frustrated">frustrated</option>
          <option value="neutral">neutral</option>
        </select>
      </p>

      <p>
        <label htmlFor="entry-tags">Tags</label>
        <br />
        <input
          id="entry-tags"
          type="text"
          value={tagsInput}
          onChange={(event) => setTagsInput(event.target.value)}
          placeholder="e.g. react, routing, css"
        />
      </p>

      <button type="submit" disabled={submitted && !isValid}>
        Save Entry
      </button>
    </form>
  );
}

export default NewEntryForm;