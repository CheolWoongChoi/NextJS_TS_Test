export default (req, res) => {
  let name = 'name test';

  setTimeout(() => {
    res.statusCode = 200;
    res.json({ name: name })
  }, 300);
}