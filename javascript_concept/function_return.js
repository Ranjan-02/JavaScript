"use strict";

// ============= use registrition===================

function memberRegistition(memberId, memberAge) {
    return mumberChake(memberId, memberAge);
}

function mumberChake(memberId, memberAge) {
    if (memberId == "12345" && memberAge >= 18) {
        return true;
    }
    return false;
}


if (memberRegistition("1234", 18)) {
    alert("Registrition Succssfully")
} else {
    alert("Registrition Failed")
}