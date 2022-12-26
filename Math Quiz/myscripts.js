document.getElementById('Quiz1').style.opacity = '1';
var f = Math.floor(Math.random() * 10) + 1;
var s = Math.floor(Math.random() * 10) + 1;
var t = Math.floor(Math.random() * 10) + 1;
var fo = Math.floor(Math.random() * 10) + 1;
var fi = Math.floor(Math.random() * 10) + 1;
var si = Math.floor(Math.random() * 10) + 1;
var se = Math.floor(Math.random() * 10) + 1;
var e = Math.floor(Math.random() * 10) + 1;
var n = Math.floor(Math.random() * 10) + 1;
var te = Math.floor(Math.random() * 10) + 1;
var el = Math.floor(Math.random() * 10) + 1;
var tw = Math.floor(Math.random() * 10) + 1;
document.getElementById('boi11').innerHTML = f;
document.getElementById('boi12').innerHTML = s;
document.getElementById('boi21').innerHTML = t;
document.getElementById('boi22').innerHTML = fo;
document.getElementById('boi31').innerHTML = fi;
document.getElementById('boi32').innerHTML = si;
document.getElementById('boi41').innerHTML = se;
document.getElementById('boi42').innerHTML = e;
document.getElementById('boi51').innerHTML = n;
document.getElementById('boi52').innerHTML = te;
document.getElementById('boi61').innerHTML = el;
document.getElementById('boi62').innerHTML = tw;

function quiz1() {
	lolo1 = f + s;
	if (document.getElementById('num1').value == lolo1) {
		setTimeout(function() {
			document.getElementById('Quiz1').style.animationName = 'slide';
		}, 500);
		setTimeout(function() {
			document.getElementById('Quiz1').style.display = 'none';
		}, 1100);
		document.getElementById('Quiz2').style.animationName = 'fate';
		setTimeout(function() {
			document.getElementById('Quiz2').style.animationName = 'none';
			document.getElementById('Quiz2').style.opacity = '1';
		}, 1000);
		document.getElementById('Quiz2').style.animationDuration = '1s';
		document.getElementById('result1').style.display = 'inline';
		document.getElementById('result1').style.color = '#09ff00';
		document.getElementById('result1').innerHTML = '<b>correct answer</b>';
		document.getElementById('num2').focus();
	} else if (window.matchMedia('(max-width: 425px)').matches) {
		document.getElementById('result1').style.display = 'inline';
		document.getElementById('result1').style.color = '#ff0000';
		document.getElementById('result1').innerHTML = '<b>Wrong Answer</b>';
	} else {
		document.getElementById('result1').style.display = 'inline';
		document.getElementById('result1').style.color = '#ff0000';
		document.getElementById('result1').innerHTML = '<b>Wrong Answer <br> please try again</b>';
	}
}
function quiz2() {
	lolo1 = t + fo;
	if (document.getElementById('num2').value == lolo1) {
		setTimeout(function() {
			document.getElementById('Quiz2').style.animationName = 'slide';
		}, 500);
		setTimeout(function() {
			document.getElementById('Quiz2').style.display = 'none';
		}, 1100);
		document.getElementById('Quiz3').style.animationName = 'fate';
		setTimeout(function() {
			document.getElementById('Quiz3').style.animationName = 'none';
			document.getElementById('Quiz3').style.opacity = '1';
		}, 1000);
		document.getElementById('Quiz3').style.animationDuration = '1s';
		document.getElementById('result2').style.display = 'inline';
		document.getElementById('result2').style.color = '#09ff00';
		document.getElementById('result2').innerHTML = '<b>correct answer</b>';
		document.getElementById('num3').focus();
	} else if (window.matchMedia('(max-width: 425px)').matches) {
		document.getElementById('result2').style.display = 'inline';
		document.getElementById('result2').style.color = '#ff0000';
		document.getElementById('result2').innerHTML = '<b>Wrong Answer</b>';
	} else {
		document.getElementById('result2').style.display = 'inline';
		document.getElementById('result2').style.color = '#ff0000';
		document.getElementById('result2').innerHTML = '<b>Wrong Answer <br> please try again</b>';
	}
}
function quiz3() {
	lolo1 = fi + si;
	if (document.getElementById('num3').value == lolo1) {
		setTimeout(function lol5() {
			document.getElementById('Quiz3').style.animationName = 'slide';
		}, 500);
		setTimeout(function() {
			document.getElementById('Quiz3').style.display = 'none';
		}, 1100);
		setTimeout(function() {
			document.getElementById('Quiz4').style.animationName = 'none';
			document.getElementById('Quiz4').style.opacity = '1';
		}, 1000);
		document.getElementById('Quiz4').style.animationName = 'fate';
		document.getElementById('Quiz4').style.animationDuration = '1s';
		document.getElementById('result3').style.display = 'inline';
		document.getElementById('result3').style.color = '#09ff00';
		document.getElementById('result3').innerHTML = '<b>correct answer</b>';
		document.getElementById('num4').focus();
	} else if (window.matchMedia('(max-width: 425px)').matches) {
		document.getElementById('result3').style.display = 'inline';
		document.getElementById('result3').style.color = '#ff0000';
		document.getElementById('result3').innerHTML = '<b>Wrong Answer</b>';
	} else {
		document.getElementById('result3').style.display = 'inline';
		document.getElementById('result3').style.color = '#ff0000';
		document.getElementById('result3').innerHTML = '<b>Wrong Answer <br> please try again</b>';
	}
}
function quiz4() {
	lolo1 = se * e;
	if (document.getElementById('num4').value == lolo1) {
		setTimeout(function lol7() {
			document.getElementById('Quiz4').style.animationName = 'slide';
		}, 500);
		setTimeout(function() {
			document.getElementById('Quiz4').style.display = 'none';
		}, 1100);
		setTimeout(function() {
			document.getElementById('Quiz5').style.animationName = 'none';
			document.getElementById('Quiz5').style.opacity = '1';
		}, 1000);
		document.getElementById('Quiz5').style.animationName = 'fate';
		document.getElementById('Quiz5').style.animationDuration = '1s';
		document.getElementById('result4').style.display = 'inline';
		document.getElementById('result4').style.color = '#09ff00';
		document.getElementById('result4').innerHTML = '<b>correct answer</b>';
		document.getElementById('num5').focus();
	} else if (window.matchMedia('(max-width: 425px)').matches) {
		document.getElementById('result4').style.display = 'inline';
		document.getElementById('result4').style.color = '#ff0000';
		document.getElementById('result4').innerHTML = '<b>Wrong Answer</b>';
	} else {
		document.getElementById('result4').style.display = 'inline';
		document.getElementById('result4').style.color = '#ff0000';
		document.getElementById('result4').innerHTML = '<b>Wrong Answer <br> please try again</b>';
	}
}
function quiz5() {
	lolo1 = n * te;
	if (document.getElementById('num5').value == lolo1) {
		setTimeout(function lol9() {
			document.getElementById('Quiz5').style.animationName = 'slide';
		}, 500);
		setTimeout(function() {
			document.getElementById('Quiz5').style.display = 'none';
		}, 1100);
		setTimeout(function() {
			document.getElementById('Quiz6').style.animationName = 'none';
			document.getElementById('Quiz6').style.opacity = '1';
		}, 1000);
		document.getElementById('Quiz6').style.animationName = 'fate';
		document.getElementById('Quiz6').style.animationDuration = '1s';
		document.getElementById('result5').style.display = 'inline';
		document.getElementById('result5').style.color = '#09ff00';
		document.getElementById('result5').innerHTML = '<b>correct answer</b>';
		document.getElementById('num6').focus();
	} else if (window.matchMedia('(max-width: 425px)').matches) {
		document.getElementById('result5').style.display = 'inline';
		document.getElementById('result5').style.color = '#ff0000';
		document.getElementById('result5').innerHTML = '<b>Wrong Answer</b>';
	} else {
		document.getElementById('result5').style.display = 'inline';
		document.getElementById('result5').style.color = '#ff0000';
		document.getElementById('result5').innerHTML = '<b>Wrong Answer <br> please try again</b>';
	}
}
function quiz6() {
	lolo1 = el * tw;
	if (document.getElementById('num6').value == lolo1) {
		setTimeout(function lol11() {
			document.getElementById('Quiz6').style.animationName = 'slide';
		}, 500);
		document.getElementById('Quiz1').style.display = 'none';
		document.getElementById('result6').style.display = 'inline';
		document.getElementById('result6').style.color = '#09ff00';
		document.getElementById('result6').innerHTML = '<b>correct answer</b>';
		document.getElementsByClassName('ending')[0].style.display = 'block';
	} else if (window.matchMedia('(max-width: 425px)').matches) {
		document.getElementById('result6').style.display = 'inline';
		document.getElementById('result6').style.color = '#ff0000';
		document.getElementById('result6').innerHTML = '<b>Wrong Answer</b>';
	} else {
		document.getElementById('result6').style.display = 'inline';
		document.getElementById('result6').style.color = '#ff0000';
		document.getElementById('result6').innerHTML = '<b>Wrong Answer <br> please try again</b>';
	}
}
function quiz11() {
	lolo1 = f + s;
	if (event.keyCode === 13) {
		if (document.getElementById('num1').value == lolo1) {
			setTimeout(function() {
				document.getElementById('Quiz1').style.animationName = 'slide';
			}, 500);
			setTimeout(function() {
				document.getElementById('Quiz1').style.display = 'none';
			}, 1100);
			document.getElementById('Quiz2').style.animationName = 'fate';
			setTimeout(function() {
				document.getElementById('Quiz2').style.animationName = 'none';
				document.getElementById('Quiz2').style.opacity = '1';
			}, 1000);
			document.getElementById('Quiz2').style.animationDuration = '1s';
			document.getElementById('result1').style.display = 'inline';
			document.getElementById('result1').style.color = '#09ff00';
			document.getElementById('result1').innerHTML = '<b>correct answer</b>';
			document.getElementById('num2').focus();
		} else if (window.matchMedia('(max-width: 425px)').matches) {
			document.getElementById('result1').style.display = 'inline';
			document.getElementById('result1').style.color = '#ff0000';
			document.getElementById('result1').innerHTML = '<b>Wrong Answer</b>';
		} else {
			document.getElementById('result1').style.display = 'inline';
			document.getElementById('result1').style.color = '#ff0000';
			document.getElementById('result1').innerHTML = '<b>Wrong Answer <br> please try again</b>';
		}
	}
}
function quiz21() {
	lolo1 = t + fo;
	if (event.keyCode === 13) {
		if (document.getElementById('num2').value == lolo1) {
			setTimeout(function() {
				document.getElementById('Quiz2').style.animationName = 'slide';
			}, 500);
			setTimeout(function() {
				document.getElementById('Quiz2').style.display = 'none';
			}, 1100);
			document.getElementById('Quiz3').style.animationName = 'fate';
			setTimeout(function() {
				document.getElementById('Quiz3').style.animationName = 'none';
				document.getElementById('Quiz3').style.opacity = '1';
			}, 1000);
			document.getElementById('Quiz3').style.animationDuration = '1s';
			document.getElementById('result2').style.display = 'inline';
			document.getElementById('result2').style.color = '#09ff00';
			document.getElementById('result2').innerHTML = '<b>correct answer</b>';
			document.getElementById('num3').focus();
		} else if (window.matchMedia('(max-width: 425px)').matches) {
			document.getElementById('result2').style.display = 'inline';
			document.getElementById('result2').style.color = '#ff0000';
			document.getElementById('result2').innerHTML = '<b>Wrong Answer</b>';
		} else {
			document.getElementById('result2').style.display = 'inline';
			document.getElementById('result2').style.color = '#ff0000';
			document.getElementById('result2').innerHTML = '<b>Wrong Answer <br> please try again</b>';
		}
	}
}
function quiz31() {
	lolo1 = fi + si;
	if (event.keyCode === 13) {
		if (document.getElementById('num3').value == lolo1) {
			setTimeout(function lol5() {
				document.getElementById('Quiz3').style.animationName = 'slide';
			}, 500);
			setTimeout(function() {
				document.getElementById('Quiz3').style.display = 'none';
			}, 1100);
			setTimeout(function() {
				document.getElementById('Quiz4').style.animationName = 'none';
				document.getElementById('Quiz4').style.opacity = '1';
			}, 1000);
			document.getElementById('Quiz4').style.animationName = 'fate';
			document.getElementById('Quiz4').style.animationDuration = '1s';
			document.getElementById('result3').style.display = 'inline';
			document.getElementById('result3').style.color = '#09ff00';
			document.getElementById('result3').innerHTML = '<b>correct answer</b>';
			document.getElementById('num4').focus();
		} else if (window.matchMedia('(max-width: 425px)').matches) {
			document.getElementById('result3').style.display = 'inline';
			document.getElementById('result3').style.color = '#ff0000';
			document.getElementById('result3').innerHTML = '<b>Wrong Answer</b>';
		} else {
			document.getElementById('result3').style.display = 'inline';
			document.getElementById('result3').style.color = '#ff0000';
			document.getElementById('result3').innerHTML = '<b>Wrong Answer <br> please try again</b>';
		}
	}
}
function quiz41() {
	lolo1 = se * e;
	if (event.keyCode === 13) {
		if (document.getElementById('num4').value == lolo1) {
			setTimeout(function lol7() {
				document.getElementById('Quiz4').style.animationName = 'slide';
			}, 500);
			setTimeout(function() {
				document.getElementById('Quiz4').style.display = 'none';
			}, 1100);
			setTimeout(function() {
				document.getElementById('Quiz5').style.animationName = 'none';
				document.getElementById('Quiz5').style.opacity = '1';
			}, 1000);
			document.getElementById('Quiz5').style.animationName = 'fate';
			document.getElementById('Quiz5').style.animationDuration = '1s';
			document.getElementById('result4').style.display = 'inline';
			document.getElementById('result4').style.color = '#09ff00';
			document.getElementById('result4').innerHTML = '<b>correct answer</b>';
			document.getElementById('num5').focus();
		} else if (window.matchMedia('(max-width: 425px)').matches) {
			document.getElementById('result4').style.display = 'inline';
			document.getElementById('result4').style.color = '#ff0000';
			document.getElementById('result4').innerHTML = '<b>Wrong Answer</b>';
		} else {
			document.getElementById('result4').style.display = 'inline';
			document.getElementById('result4').style.color = '#ff0000';
			document.getElementById('result4').innerHTML = '<b>Wrong Answer <br> please try again</b>';
		}
	}
}
function quiz51() {
	lolo1 = n * te;
	if (event.keyCode === 13) {
		if (document.getElementById('num5').value == lolo1) {
			setTimeout(function lol9() {
				document.getElementById('Quiz5').style.animationName = 'slide';
			}, 500);
			setTimeout(function() {
				document.getElementById('Quiz5').style.display = 'none';
			}, 1100);
			setTimeout(function() {
				document.getElementById('Quiz6').style.animationName = 'none';
				document.getElementById('Quiz6').style.opacity = '1';
			}, 1000);
			document.getElementById('Quiz6').style.animationName = 'fate';
			document.getElementById('Quiz6').style.animationDuration = '1s';
			document.getElementById('result5').style.display = 'inline';
			document.getElementById('result5').style.color = '#09ff00';
			document.getElementById('result5').innerHTML = '<b>correct answer</b>';
			document.getElementById('num6').focus();
		} else if (window.matchMedia('(max-width: 425px)').matches) {
			document.getElementById('result5').style.display = 'inline';
			document.getElementById('result5').style.color = '#ff0000';
			document.getElementById('result5').innerHTML = '<b>Wrong Answer</b>';
		} else {
			document.getElementById('result5').style.display = 'inline';
			document.getElementById('result5').style.color = '#ff0000';
			document.getElementById('result5').innerHTML = '<b>Wrong Answer <br> please try again</b>';
		}
	}
}
function quiz61() {
	lolo1 = el * tw;
	if (event.keyCode === 13) {
		if (document.getElementById('num6').value == lolo1) {
			setTimeout(function lol11() {
				document.getElementById('Quiz6').style.animationName = 'slide';
			}, 500);
			document.getElementById('Quiz1').style.display = 'none';
			document.getElementById('result6').style.display = 'inline';
			document.getElementById('result6').style.color = '#09ff00';
			document.getElementById('result6').innerHTML = '<b>correct answer</b>';
			document.getElementsByClassName('ending')[0].style.display = 'block';
		} else if (window.matchMedia('(max-width: 425px)').matches) {
			document.getElementById('result6').style.display = 'inline';
			document.getElementById('result6').style.color = '#ff0000';
			document.getElementById('result6').innerHTML = '<b>Wrong Answer</b>';
		} else {
			document.getElementById('result6').style.display = 'inline';
			document.getElementById('result6').style.color = '#ff0000';
			document.getElementById('result6').innerHTML = '<b>Wrong Answer <br> please try again</b>';
		}
	}
}
