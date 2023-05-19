const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mydb');
  const postschema = new mongoose.Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
  });
  const Post = mongoose.model('Post', postschema);
  const post = new Post({
    title: 'My first blog post',
    content: 'This is the content of my first blog post',
    });
    await post.save();
    const p = await Post.find();
    console.log(p);
}
