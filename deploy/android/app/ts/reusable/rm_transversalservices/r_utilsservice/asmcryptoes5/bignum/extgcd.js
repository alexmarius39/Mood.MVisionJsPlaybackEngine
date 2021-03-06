"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bignum_1 = require("./bignum");
function Number_extGCD(a, b) {
    var sa = a < 0 ? -1 : 1, sb = b < 0 ? -1 : 1, xi = 1, xj = 0, yi = 0, yj = 1, r, q, t, a_cmp_b;
    a *= sa;
    b *= sb;
    a_cmp_b = a < b;
    if (a_cmp_b) {
        t = a;
        (a = b), (b = t);
        t = sa;
        sa = sb;
        sb = t;
    }
    (q = Math.floor(a / b)), (r = a - q * b);
    while (r) {
        (t = xi - q * xj), (xi = xj), (xj = t);
        (t = yi - q * yj), (yi = yj), (yj = t);
        (a = b), (b = r);
        (q = Math.floor(a / b)), (r = a - q * b);
    }
    xj *= sa;
    yj *= sb;
    if (a_cmp_b) {
        t = xj;
        (xj = yj), (yj = t);
    }
    return {
        gcd: b,
        x: xj,
        y: yj,
    };
}
exports.Number_extGCD = Number_extGCD;
function BigNumber_extGCD(a, b) {
    var sa = a.sign;
    var sb = b.sign;
    if (sa < 0)
        a = a.negate();
    if (sb < 0)
        b = b.negate();
    var a_cmp_b = a.compare(b);
    if (a_cmp_b < 0) {
        var t = a;
        (a = b), (b = t);
        var t2 = sa;
        sa = sb;
        sb = t2;
    }
    var xi = bignum_1.BigNumber.ONE, xj = bignum_1.BigNumber.ZERO, lx = b.bitLength, yi = bignum_1.BigNumber.ZERO, yj = bignum_1.BigNumber.ONE, ly = a.bitLength, z, r, q;
    z = a.divide(b);
    while ((r = z.remainder) !== bignum_1.BigNumber.ZERO) {
        q = z.quotient;
        (z = xi.subtract(q.multiply(xj).clamp(lx)).clamp(lx)), (xi = xj), (xj = z);
        (z = yi.subtract(q.multiply(yj).clamp(ly)).clamp(ly)), (yi = yj), (yj = z);
        (a = b), (b = r);
        z = a.divide(b);
    }
    if (sa < 0)
        xj = xj.negate();
    if (sb < 0)
        yj = yj.negate();
    if (a_cmp_b < 0) {
        var t = xj;
        (xj = yj), (yj = t);
    }
    return {
        gcd: b,
        x: xj,
        y: yj,
    };
}
exports.BigNumber_extGCD = BigNumber_extGCD;
//# sourceMappingURL=extgcd.js.map