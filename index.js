function theBeatlesPlay(musc, inst) {
  var empty = []
  for (var i = 0; i < musc.length; i++) {
    empty.push(musc[i] + " plays " + inst[i])
  } 
  return empty
}

function johnLennonFacts(facts) {
  var x = 0;
  while (x<facts.length) {
    for (var i=0; i<x)