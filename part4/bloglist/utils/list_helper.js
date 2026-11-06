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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}