const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((total, blog) => total + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) {
        return null
    }

    return blogs.reduce((fav, blog) => fav.likes > blog.likes ? fav : blog)
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const counts = blogs.reduce((counts, blog) => {
    counts[blog.author] = (counts[blog.author] || 0) + 1
    return counts
  }, {})

  const [author, count] = Object.entries(counts)
    .reduce((best, current) => current[1] > best[1] ? current : best)

  return { author, blogs: count }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const likeCounts = blogs.reduce((totals, blog) => {
    totals[blog.author] = (totals[blog.author] || 0) + blog.likes
    return totals
  }, {})

  const [author, likes] = Object.entries(likeCounts)
    .reduce((best, current) => current[1] > best[1] ? current : best)

  return { author, likes }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}