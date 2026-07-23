"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Send, Reply, ThumbsUp, Clock, User } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

interface Comment {
  id: string
  author: string
  content: string
  timestamp: string
  likes: number
  likedByUser?: boolean;
  replies: Comment[]
}

const STORAGE_KEY = "bluevision_community_comments"

export default function CommunityPage() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [authorName, setAuthorName] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState("")
  const [replyAuthor, setReplyAuthor] = useState("")

  // Load comments from localStorage on mount
  useEffect(() => {
    const savedComments = localStorage.getItem(STORAGE_KEY)
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    }
  }, [])

  // Save comments to localStorage whenever they change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(comments))
    }
  }, [comments])

  const handleSubmitComment = () => {
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName.trim() || "Anonymous",
      content: newComment.trim(),
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: [],
    }

    setComments([comment, ...comments])
    setNewComment("")
    setAuthorName("")
  }

  const handleSubmitReply = (parentId: string) => {
    if (!replyContent.trim()) return

    const reply: Comment = {
      id: Date.now().toString(),
      author: replyAuthor.trim() || "Anonymous",
      content: replyContent.trim(),
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: [],
    }

    setComments(
      comments.map((comment) =>
        comment.id === parentId
          ? { ...comment, replies: [...comment.replies, reply] }
          : comment
      )
    )
    setReplyingTo(null)
    setReplyContent("")
    setReplyAuthor("")
  }

  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

  const handleLike = (commentId: string, isReply: boolean = false, parentId?: string) => {
    const key = isReply ? `reply-${parentId}-${commentId}` : `comment-${commentId}`;
    const alreadyLiked = likedIds.has(key);

    if (isReply && parentId) {
      setComments(
        comments.map((comment) =>
          comment.id === parentId
            ? {
                ...comment,
                replies: comment.replies.map((reply) =>
                  reply.id === commentId
                    ? { ...reply, likes: reply.likes + (alreadyLiked ? -1 : 1) }
                    : reply
                ),
              }
            : comment
        )
      );
    } else {
      setComments(
        comments.map((comment) =>
          comment.id === commentId
            ? { ...comment, likes: comment.likes + (alreadyLiked ? -1 : 1) }
            : comment
        )
      );
    }
    const newLikedIds = new Set(likedIds);
    if (alreadyLiked) {
      newLikedIds.delete(key);
    } else {
      newLikedIds.add(key);
    }
    setLikedIds(newLikedIds);
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return "Just now"
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Community Discussion
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Join the Conversation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your thoughts, feedback, and ideas with the Blue Vision community. 
              No login required - everyone is welcome to participate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comment Form Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Share Your Thoughts
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Your Name (optional)
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-4 py-2 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Your Comment
                </label>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your feedback, questions, or ideas about our products and services..."
                  rows={4}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                />
              </div>
              <Button
                onClick={handleSubmitComment}
                disabled={!newComment.trim()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send className="w-4 h-4 mr-2" />
                Post Comment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comments List Section */}
      <section className="py-8 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            {comments.length > 0 ? `${comments.length} Comment${comments.length > 1 ? "s" : ""}` : "No comments yet"}
          </h2>

          <div className="space-y-6">
            {comments.map((comment, index) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                {/* Comment Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{comment.author}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatTime(comment.timestamp)}
                    </p>
                  </div>
                </div>

                {/* Comment Content */}
                <p className="text-foreground mb-4 whitespace-pre-wrap">{comment.content}</p>

                {/* Comment Actions */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLike(comment.id)}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    {comment.likes > 0 && comment.likes}
                  </button>
                  <button
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Reply className="w-4 h-4" />
                    Reply
                  </button>
                </div>

                {/* Reply Form */}
                {replyingTo === comment.id && (
                  <div className="mt-4 pl-6 border-l-2 border-primary/20">
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={replyAuthor}
                        onChange={(e) => setReplyAuthor(e.target.value)}
                        placeholder="Your name (optional)"
                        className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Write a reply..."
                        rows={2}
                        className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleSubmitReply(comment.id)}
                          disabled={!replyContent.trim()}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          Reply
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            setReplyingTo(null)
                            setReplyContent("")
                            setReplyAuthor("")
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="mt-4 space-y-4 pl-6 border-l-2 border-border">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm text-foreground">{reply.author}</p>
                            <p className="text-xs text-muted-foreground">{formatTime(reply.timestamp)}</p>
                          </div>
                        </div>
                        <p className="text-sm text-foreground whitespace-pre-wrap">{reply.content}</p>
                        <button
                          onClick={() => handleLike(reply.id, true, comment.id)}
                          className="mt-2 flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ThumbsUp className="w-3 h-3" />
                          {reply.likes > 0 && reply.likes}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            {comments.length === 0 && (
              <div className="text-center py-12">
                <MessageCircle className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Be the first to share your thoughts!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
