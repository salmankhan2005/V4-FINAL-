import * as React from "react";
import { X, Send } from "lucide-react";
import { chatWithBotFn } from "../lib/chat";
import logo from "@/assets/v4-logo-transparent.png";

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<{role: "user" | "bot", content: string}[]>([
    { role: "bot", content: "Hi there! 👋 I'm the V4 Nexus assistant. How can I help you today?" }
  ]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatWithBotFn({ data: userMessage });
      setMessages(prev => [...prev, { role: "bot", content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "bot", content: "Sorry, I'm having trouble connecting to the server." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button & Popup */}
      <div className={`fixed bottom-4 left-4 z-50 flex flex-col items-start gap-2 sm:bottom-6 sm:left-6 sm:gap-3 ${isOpen ? 'hidden' : ''}`}>
        <div 
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer animate-bounce rounded-2xl rounded-bl-sm bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 sm:px-4 sm:py-2 sm:text-sm"
        >
          Talk to me
          <div className="absolute -bottom-1.5 left-3 h-2 w-3 bg-primary [clip-path:polygon(0_0,100%_0,0_100%)] sm:-bottom-2 sm:left-4 sm:h-3 sm:w-4" />
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="relative grid size-12 shrink-0 place-items-center rounded-full border border-border bg-card shadow-xl transition-transform hover:scale-105 sm:size-16"
          aria-label="Open chat"
        >
          <img src={logo} alt="Chat Support" className="size-8 object-contain sm:size-10" />
          <span className="absolute -right-0.5 -top-0.5 flex size-3 animate-pulse items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm sm:size-4" />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 flex h-125 max-h-[80vh] w-87.5 max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl bg-border p-[1.5px] shadow-xl animate-in slide-in-from-bottom-5">
          <div className="absolute -inset-full animate-border-spin bg-border-laser" />
          <div className="relative flex flex-1 h-full w-full flex-col rounded-[15px] bg-card overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-muted/50 p-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="relative size-10 overflow-hidden rounded-full border border-border bg-background shadow-sm">
                  <img src={logo} alt="Assistant Avatar" className="size-full object-contain p-1" />
                </div>
                <span className="font-semibold">V4 Nexus Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={messagesContainerRef} className="relative flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {/* Wallpaper */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
                <img src={logo} alt="" className="w-[80%] object-contain" />
              </div>

              {messages.map((msg, i) => (
                <div key={i} className={`relative z-10 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm whitespace-pre-wrap ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted/80 backdrop-blur-md text-foreground"}`}>
                    {msg.content.split(/(\*\*.*?\*\*)/g).map((part, index) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={index}>{part.slice(2, -2)}</strong>;
                      }
                      return <React.Fragment key={index}>{part}</React.Fragment>;
                    })}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="relative z-10 flex justify-start">
                  <div className="max-w-[85%] rounded-2xl bg-muted/80 backdrop-blur-md px-4 py-3 text-sm text-foreground">
                    <div className="flex gap-1.5">
                      <div className="size-1.5 animate-bounce rounded-full bg-foreground/50 [animation-delay:-0.3s]"></div>
                      <div className="size-1.5 animate-bounce rounded-full bg-foreground/50 [animation-delay:-0.15s]"></div>
                      <div className="size-1.5 animate-bounce rounded-full bg-foreground/50"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-border p-3 relative z-10 bg-card/80 backdrop-blur-sm">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full rounded-full border border-input bg-background/80 backdrop-blur-sm pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 grid size-8 place-items-center rounded-full bg-primary text-primary-foreground disabled:opacity-50 transition-colors hover:bg-primary/90"
                >
                  <Send className="size-4 -ml-0.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
