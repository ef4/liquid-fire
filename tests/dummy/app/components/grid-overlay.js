import Ember from "ember";

function show_lead(space, offset) {
  var max = Ember.$(document).height() / space;
  hide_lead();
  for (var i = 0; i < max; i++) {
    Ember.$('body').append("<div class='grid' id='vgrid" + i + "'></div>");
    Ember.$("#vgrid" + i).css({
      height: "" + space + "px",
      width: "100%",
      position: "absolute",
      top: "" + (space * i - 1 + offset) + "px",
      left: "0px",
      borderTop: "1px solid black",
      zIndex: 2000,
      'pointer-events': 'none',
      opacity: 0.2,
      'background-color': 'transparent'
    });
  }
}

function hide_lead() {
  Ember.$('.grid').remove();
}

function toggleGrid(leading, leading_offset) {
  if (leading_offset == null) {
    leading_offset = 0;
  }
  if (Ember.$("#vgrid0").length > 0) {
    return hide_lead();
  } else {
    return show_lead(leading, leading_offset);
  }
}

export default Ember.Component.extend({
  didInsertElement: function(){
    Ember.$(document).bind('keydown', function(e){
      // Ctrl-Alt-g shows vertical rhythm
      if (e.ctrlKey && e.altKey && e.keyCode === 71) {
        toggleGrid(22);
      }
    });
  }
});
