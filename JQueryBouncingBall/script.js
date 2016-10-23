﻿var $ball = $('ball'),
    DURATION = 575;

function dropBall() {
    // We animate 'top' because jquery can't
    // animate transforms (wihtout plugins):
    // See https://bugs.jquery.com/ticket/4171
    $ball.animate({ top: '180px' }, DURATION, 'easeInQuad', restoreBall);
}

function restoreBall() {
    $ball.animate({ top: '0' }, DURATION, 'easeOutQuad', dropBall);
}

$(document).ready(function () {
    dropBall();
});