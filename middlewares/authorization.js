export default function(req, res, next) {
  if (req.user.role === 1) {
    return next();
  } else {
    res.status(401);
    res.json({
      result: "Restricted Area!"
    });
  }
}
