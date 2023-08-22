const db = require("../config/db_conn");

const Post = {
    getAllPosts: async () => {
        try {
            let query = "SELECT * FROM posts";
            db.query(query, (err, res, fields) => {
                const posts = [];
                for (const p in res)
                {
                    posts.push({
                        id: p.id,
                        title: p.title,
                        content: p.content,
                        author: p.author,
                        date: p.date,
                        tags: p.tags
                    });
                    return posts;
                }
            })
        }
        catch (e)
        { 
            throw e;
        }
    },
    
};

module.exports = User;