var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response) {
  response.render('rsvp', data);
};

exports.addRSVP = function(req, res) {
  var rsvpEmail = req.body.rsvpEmail;
  console.log(rsvpEmail);
  data.rsvp.push(rsvpEmail);
  console.log(data);
  res.send(rsvpEmail);
}