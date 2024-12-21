// import { RichTextEditor, Link } from "@mantine/tiptap";
// import { useEditor } from "@tiptap/react";
// import Highlight from "@tiptap/extension-highlight";
// import StarterKit from "@tiptap/starter-kit";
// import Underline from "@tiptap/extension-underline";
// import TextAlign from "@tiptap/extension-text-align";
// import Superscript from "@tiptap/extension-superscript";
// import SubScript from "@tiptap/extension-subscript";
// import { Paper } from "@mantine/core";

// const content = "";

// export default function TextEditor() {
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Underline,
//       Link,
//       Superscript,
//       SubScript,
//       Highlight,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//     ],
//     content,
//   });

//   return (
//     <RichTextEditor editor={editor}>
//       <RichTextEditor.Toolbar sticky stickyOffset={60}>
//         <RichTextEditor.ControlsGroup>
//           <RichTextEditor.Bold />
//           <RichTextEditor.Italic />
//           <RichTextEditor.Underline />
//           <RichTextEditor.Strikethrough />
//           <RichTextEditor.ClearFormatting />
//           <RichTextEditor.Highlight />
//           <RichTextEditor.Code />
//         </RichTextEditor.ControlsGroup>

//         <RichTextEditor.ControlsGroup>
//           <RichTextEditor.H1 />
//           <RichTextEditor.H2 />
//           <RichTextEditor.H3 />
//           <RichTextEditor.H4 />
//         </RichTextEditor.ControlsGroup>

//         <RichTextEditor.ControlsGroup>
//           <RichTextEditor.Blockquote />
//           <RichTextEditor.Hr />
//           <RichTextEditor.BulletList />
//           <RichTextEditor.OrderedList />
//           <RichTextEditor.Subscript />
//           <RichTextEditor.Superscript />
//         </RichTextEditor.ControlsGroup>

//         <RichTextEditor.ControlsGroup>
//           <RichTextEditor.Link />
//           <RichTextEditor.Unlink />
//         </RichTextEditor.ControlsGroup>

//         <RichTextEditor.ControlsGroup>
//           <RichTextEditor.AlignLeft />
//           <RichTextEditor.AlignCenter />
//           <RichTextEditor.AlignJustify />
//           <RichTextEditor.AlignRight />
//         </RichTextEditor.ControlsGroup>

//         <RichTextEditor.ControlsGroup>
//           <RichTextEditor.Undo />
//           <RichTextEditor.Redo />
//         </RichTextEditor.ControlsGroup>
//       </RichTextEditor.Toolbar>

//       <RichTextEditor.Content />
//     </RichTextEditor>
//   );
// }

// import React, { useState } from "react";
// import { RichTextEditor, Link } from "@mantine/tiptap";
// import { useEditor } from "@tiptap/react";
// import Highlight from "@tiptap/extension-highlight";
// import StarterKit from "@tiptap/starter-kit";
// import Underline from "@tiptap/extension-underline";
// import TextAlign from "@tiptap/extension-text-align";
// import Superscript from "@tiptap/extension-superscript";
// import SubScript from "@tiptap/extension-subscript";
// import { Paper, Button } from "@mantine/core";

// const content = "";

// export default function TextEditor({ onSave }) {
//   const [message, setMessage] = useState("");

//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Underline,
//       Link,
//       Superscript,
//       SubScript,
//       Highlight,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//     ],
//     content,
//   });

//   const handleMessageSend = () => {
//     onSave(message);
//     setMessage(""); // Clear message after sending
//   };

//   return (
//     <RichTextEditor editor={editor}>
//       <RichTextEditor.Toolbar sticky stickyOffset={60}>
//         <RichTextEditor.ControlsGroup>
//           <RichTextEditor.Bold />
//           <RichTextEditor.Italic />
//           <RichTextEditor.Underline />
//           <RichTextEditor.Strikethrough />
//           <RichTextEditor.ClearFormatting />
//           <RichTextEditor.Highlight />
//           <RichTextEditor.Code />
//         </RichTextEditor.ControlsGroup>

//         <RichTextEditor.ControlsGroup>
//           <RichTextEditor.H1 />
//           <RichTextEditor.H2 />
//           <RichTextEditor.H3 />
//           <RichTextEditor.H4 />
//         </RichTextEditor.ControlsGroup>

//         <RichTextEditor.ControlsGroup>
//           <RichTextEditor.Blockquote />
//           <RichTextEditor.Hr />
//           <RichTextEditor.BulletList />
//           <RichTextEditor.OrderedList />
//           <RichTextEditor.Subscript />
//           <RichTextEditor.Superscript />
//         </RichTextEditor.ControlsGroup>

//         <RichTextEditor.ControlsGroup>
//           <RichTextEditor.Link />
//           <RichTextEditor.Unlink />
//         </RichTextEditor.ControlsGroup>

//         <RichTextEditor.ControlsGroup>
//           <RichTextEditor.AlignLeft />
//           <RichTextEditor.AlignCenter />
//           <RichTextEditor.AlignJustify />
//           <RichTextEditor.AlignRight />
//         </RichTextEditor.ControlsGroup>

//         <RichTextEditor.ControlsGroup>
//           <RichTextEditor.Undo />
//           <RichTextEditor.Redo />
//         </RichTextEditor.ControlsGroup>
//       </RichTextEditor.Toolbar>

//       <RichTextEditor.Content />
      

//       {/* Message input and send button */}
//       <Paper bg="#FFFFFF" p="md" mt="md">
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type your message here..."
//           style={{ width: "100%", minHeight: "100px", padding: "10px" }}
//         />
//         <Button onClick={handleMessageSend} mt="sm" disabled={!message.trim()}>
//           Send
//         </Button>
//       </Paper>
//     </RichTextEditor>
//   );
// }

// import React, { useState } from "react";
// import { RichTextEditor, Link } from "@mantine/tiptap";
// import { useEditor } from "@tiptap/react";
// import Highlight from "@tiptap/extension-highlight";
// import StarterKit from "@tiptap/starter-kit";
// import Underline from "@tiptap/extension-underline";
// import TextAlign from "@tiptap/extension-text-align";
// import Superscript from "@tiptap/extension-superscript";
// import SubScript from "@tiptap/extension-subscript";
// import { Paper, Button  } from "@mantine/core";

// const initialContent = "";

// export default function TextEditor({ onSave }) {
//   const [inputValue, setInputValue] = useState("");
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Underline,
//       Link,
//       Superscript,
//       SubScript,
//       Highlight,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//     ],
//     content: initialContent,
//     onUpdate({ editor }) {
//       setInputValue(editor.getHTML());
//     },
//   });

//   const handleMessageSend = () => {
//     onSave(inputValue.trim());
//     setInputValue(""); // Clear input after sending
//   };

//   return (
//     <RichTextEditor editor={editor}>
//       <RichTextEditor.Toolbar sticky stickyOffset={60}>
//         {/* Your toolbar controls */}
//       </RichTextEditor.Toolbar>

//       <RichTextEditor.Content />

//       <Paper bg="#FFFFFF" p="md" mt="md">
//         {/* Combined input for rich text content and message */}
//         <textarea
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Type your message here..."
//           style={{ width: "100%", minHeight: "100px", padding: "10px" }}
//         />

//         {/* Send button */}
//         <Button onClick={handleMessageSend} mt="sm" disabled={!inputValue.trim()}>
//           Send
//         </Button>
//       </Paper>
//     </RichTextEditor>
//   );
// }






import React, { useState } from "react";
import { Paper, Button ,Textarea } from "@mantine/core";



export default function TextEditor({ onSave }) {
  const [inputValue, setInputValue] = useState("");
  

  const handleMessageSend = () => {
    onSave(inputValue.trim());
    setInputValue(""); // Clear input after sending
  };

  return (
   

      <Paper bg="#FFFFFF" p="md" mt="md">
        {/* Combined input for rich text content and message */}
        <Textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message here..."
          style={{ width: "100%", minHeight: "100px", padding: "10px" }}
        />

        {/* Send button */}
        <Button onClick={handleMessageSend} mt="sm" disabled={!inputValue.trim()}>
          Send
        </Button>
      </Paper>
   
  );
}

