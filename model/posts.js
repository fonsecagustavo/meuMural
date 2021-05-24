module.exports = {
    posts: [
        
    ],

    getAll() {
        return this.posts;
    },

    newPost(title,description){
        this.posts.push({id: generateID(),title,description});
    },

    deletePost(id){
        let i = 0;
        this.posts.forEach(post => {
            if(post.id == id) {
                this.posts.splice(i,1);
            }
            i++;
        })
    }

}

function generateID() {
    return Math.random().toString(36).substr(2,9);
}