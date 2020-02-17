function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-cph-send-cph-send-module~pages-tabs-pledge-pledge-module~pages-tabs-wallet-wallet-modu~b845ac84"], {
  /***/
  "./node_modules/@stablelib/binary/lib/binary.js":
  /*!******************************************************!*\
    !*** ./node_modules/@stablelib/binary/lib/binary.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStablelibBinaryLibBinaryJs(module, exports, __webpack_require__) {
    "use strict"; // Copyright (C) 2016 Dmitry Chestnykh
    // MIT License. See LICENSE file for details.

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var int_1 = __webpack_require__(
    /*! @stablelib/int */
    "./node_modules/@stablelib/int/lib/int.js"); // TODO(dchest): add asserts for correct value ranges and array offsets.

    /**
     * Reads 2 bytes from array starting at offset as big-endian
     * signed 16-bit integer and returns it.
     */


    function readInt16BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      return (array[offset + 0] << 8 | array[offset + 1]) << 16 >> 16;
    }

    exports.readInt16BE = readInt16BE;
    /**
     * Reads 2 bytes from array starting at offset as big-endian
     * unsigned 16-bit integer and returns it.
     */

    function readUint16BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      return (array[offset + 0] << 8 | array[offset + 1]) >>> 0;
    }

    exports.readUint16BE = readUint16BE;
    /**
     * Reads 2 bytes from array starting at offset as little-endian
     * signed 16-bit integer and returns it.
     */

    function readInt16LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      return (array[offset + 1] << 8 | array[offset]) << 16 >> 16;
    }

    exports.readInt16LE = readInt16LE;
    /**
     * Reads 2 bytes from array starting at offset as little-endian
     * unsigned 16-bit integer and returns it.
     */

    function readUint16LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      return (array[offset + 1] << 8 | array[offset]) >>> 0;
    }

    exports.readUint16LE = readUint16LE;
    /**
     * Writes 2-byte big-endian representation of 16-bit unsigned
     * value to byte array starting at offset.
     *
     * If byte array is not given, creates a new 2-byte one.
     *
     * Returns the output byte array.
     */

    function writeUint16BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(2);
      }

      if (offset === void 0) {
        offset = 0;
      }

      out[offset + 0] = value >>> 8;
      out[offset + 1] = value >>> 0;
      return out;
    }

    exports.writeUint16BE = writeUint16BE;
    exports.writeInt16BE = writeUint16BE;
    /**
     * Writes 2-byte little-endian representation of 16-bit unsigned
     * value to array starting at offset.
     *
     * If byte array is not given, creates a new 2-byte one.
     *
     * Returns the output byte array.
     */

    function writeUint16LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(2);
      }

      if (offset === void 0) {
        offset = 0;
      }

      out[offset + 0] = value >>> 0;
      out[offset + 1] = value >>> 8;
      return out;
    }

    exports.writeUint16LE = writeUint16LE;
    exports.writeInt16LE = writeUint16LE;
    /**
     * Reads 4 bytes from array starting at offset as big-endian
     * signed 32-bit integer and returns it.
     */

    function readInt32BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      return array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3];
    }

    exports.readInt32BE = readInt32BE;
    /**
     * Reads 4 bytes from array starting at offset as big-endian
     * unsigned 32-bit integer and returns it.
     */

    function readUint32BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      return (array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3]) >>> 0;
    }

    exports.readUint32BE = readUint32BE;
    /**
     * Reads 4 bytes from array starting at offset as little-endian
     * signed 32-bit integer and returns it.
     */

    function readInt32LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      return array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset];
    }

    exports.readInt32LE = readInt32LE;
    /**
     * Reads 4 bytes from array starting at offset as little-endian
     * unsigned 32-bit integer and returns it.
     */

    function readUint32LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      return (array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset]) >>> 0;
    }

    exports.readUint32LE = readUint32LE;
    /**
     * Writes 4-byte big-endian representation of 32-bit unsigned
     * value to byte array starting at offset.
     *
     * If byte array is not given, creates a new 4-byte one.
     *
     * Returns the output byte array.
     */

    function writeUint32BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }

      if (offset === void 0) {
        offset = 0;
      }

      out[offset + 0] = value >>> 24;
      out[offset + 1] = value >>> 16;
      out[offset + 2] = value >>> 8;
      out[offset + 3] = value >>> 0;
      return out;
    }

    exports.writeUint32BE = writeUint32BE;
    exports.writeInt32BE = writeUint32BE;
    /**
     * Writes 4-byte little-endian representation of 32-bit unsigned
     * value to array starting at offset.
     *
     * If byte array is not given, creates a new 4-byte one.
     *
     * Returns the output byte array.
     */

    function writeUint32LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }

      if (offset === void 0) {
        offset = 0;
      }

      out[offset + 0] = value >>> 0;
      out[offset + 1] = value >>> 8;
      out[offset + 2] = value >>> 16;
      out[offset + 3] = value >>> 24;
      return out;
    }

    exports.writeUint32LE = writeUint32LE;
    exports.writeInt32LE = writeUint32LE;
    /**
     * Reads 8 bytes from array starting at offset as big-endian
     * signed 64-bit integer and returns it.
     *
     * Due to JavaScript limitation, supports values up to 2^53-1.
     *
     * XXX: not constant-time.
     */

    function readInt64BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      var hi = readInt32BE(array, offset);
      var lo = readInt32BE(array, offset + 4);
      var result = hi * 0x100000000 + lo; // TODO(dchest): make constant-time.

      if (lo < 0) {
        result += 0x100000000;
      }

      return result;
    }

    exports.readInt64BE = readInt64BE;
    /**
     * Reads 8 bytes from array starting at offset as big-endian
     * unsigned 64-bit integer and returns it.
     *
     * Due to JavaScript limitation, supports values up to 2^53-1.
     */

    function readUint64BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      var hi = readUint32BE(array, offset);
      var lo = readUint32BE(array, offset + 4);
      return hi * 0x100000000 + lo;
    }

    exports.readUint64BE = readUint64BE;
    /**
     * Reads 8 bytes from array starting at offset as little-endian
     * signed 64-bit integer and returns it.
     *
     * Due to JavaScript limitation, supports values up to 2^53-1.
     *
     * XXX: not constant-time.
     */

    function readInt64LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      var lo = readInt32LE(array, offset);
      var hi = readInt32LE(array, offset + 4);
      var result = hi * 0x100000000 + lo; // TODO(dchest): make constant-time.

      if (lo < 0) {
        result += 0x100000000;
      }

      return result;
    }

    exports.readInt64LE = readInt64LE;
    /**
     * Reads 8 bytes from array starting at offset as little-endian
     * unsigned 64-bit integer and returns it.
     *
     * Due to JavaScript limitation, supports values up to 2^53-1.
     */

    function readUint64LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      var lo = readUint32LE(array, offset);
      var hi = readUint32LE(array, offset + 4);
      return hi * 0x100000000 + lo;
    }

    exports.readUint64LE = readUint64LE;
    /**
     * Writes 8-byte big-endian representation of 64-bit unsigned
     * value to byte array starting at offset.
     *
     * Due to JavaScript limitation, supports values up to 2^53-1.
     *
     * If byte array is not given, creates a new 8-byte one.
     *
     * Returns the output byte array.
     */

    function writeUint64BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }

      if (offset === void 0) {
        offset = 0;
      }

      writeUint32BE(value / 0x100000000 >>> 0, out, offset);
      writeUint32BE(value >>> 0, out, offset + 4);
      return out;
    }

    exports.writeUint64BE = writeUint64BE;
    exports.writeInt64BE = writeUint64BE;
    /**
     * Writes 8-byte little-endian representation of 64-bit unsigned
     * value to byte array starting at offset.
     *
     * Due to JavaScript limitation, supports values up to 2^53-1.
     *
     * If byte array is not given, creates a new 8-byte one.
     *
     * Returns the output byte array.
     */

    function writeUint64LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }

      if (offset === void 0) {
        offset = 0;
      }

      writeUint32LE(value >>> 0, out, offset);
      writeUint32LE(value / 0x100000000 >>> 0, out, offset + 4);
      return out;
    }

    exports.writeUint64LE = writeUint64LE;
    exports.writeInt64LE = writeUint64LE;
    /**
     * Reads bytes from array starting at offset as big-endian
     * unsigned bitLen-bit integer and returns it.
     *
     * Supports bit lengths divisible by 8, up to 48.
     */

    function readUintBE(bitLength, array, offset) {
      if (offset === void 0) {
        offset = 0;
      } // TODO(dchest): implement support for bitLenghts non-divisible by 8


      if (bitLength % 8 !== 0) {
        throw new Error("readUintBE supports only bitLengths divisible by 8");
      }

      if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintBE: array is too short for the given bitLength");
      }

      var result = 0;
      var mul = 1;

      for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
        result += array[i] * mul;
        mul *= 256;
      }

      return result;
    }

    exports.readUintBE = readUintBE;
    /**
     * Reads bytes from array starting at offset as little-endian
     * unsigned bitLen-bit integer and returns it.
     *
     * Supports bit lengths divisible by 8, up to 48.
     */

    function readUintLE(bitLength, array, offset) {
      if (offset === void 0) {
        offset = 0;
      } // TODO(dchest): implement support for bitLenghts non-divisible by 8


      if (bitLength % 8 !== 0) {
        throw new Error("readUintLE supports only bitLengths divisible by 8");
      }

      if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintLE: array is too short for the given bitLength");
      }

      var result = 0;
      var mul = 1;

      for (var i = offset; i < offset + bitLength / 8; i++) {
        result += array[i] * mul;
        mul *= 256;
      }

      return result;
    }

    exports.readUintLE = readUintLE;
    /**
     * Writes a big-endian representation of bitLen-bit unsigned
     * value to array starting at offset.
     *
     * Supports bit lengths divisible by 8, up to 48.
     *
     * If byte array is not given, creates a new one.
     *
     * Returns the output byte array.
     */

    function writeUintBE(bitLength, value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(bitLength / 8);
      }

      if (offset === void 0) {
        offset = 0;
      } // TODO(dchest): implement support for bitLenghts non-divisible by 8


      if (bitLength % 8 !== 0) {
        throw new Error("writeUintBE supports only bitLengths divisible by 8");
      }

      if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintBE value must be an integer");
      }

      var div = 1;

      for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
        out[i] = value / div & 0xff;
        div *= 256;
      }

      return out;
    }

    exports.writeUintBE = writeUintBE;
    /**
     * Writes a little-endian representation of bitLen-bit unsigned
     * value to array starting at offset.
     *
     * Supports bit lengths divisible by 8, up to 48.
     *
     * If byte array is not given, creates a new one.
     *
     * Returns the output byte array.
     */

    function writeUintLE(bitLength, value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(bitLength / 8);
      }

      if (offset === void 0) {
        offset = 0;
      } // TODO(dchest): implement support for bitLenghts non-divisible by 8


      if (bitLength % 8 !== 0) {
        throw new Error("writeUintLE supports only bitLengths divisible by 8");
      }

      if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintLE value must be an integer");
      }

      var div = 1;

      for (var i = offset; i < offset + bitLength / 8; i++) {
        out[i] = value / div & 0xff;
        div *= 256;
      }

      return out;
    }

    exports.writeUintLE = writeUintLE;
    /**
     * Reads 4 bytes from array starting at offset as big-endian
     * 32-bit floating-point number and returns it.
     */

    function readFloat32BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat32(offset);
    }

    exports.readFloat32BE = readFloat32BE;
    /**
     * Reads 4 bytes from array starting at offset as little-endian
     * 32-bit floating-point number and returns it.
     */

    function readFloat32LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat32(offset, true);
    }

    exports.readFloat32LE = readFloat32LE;
    /**
     * Reads 8 bytes from array starting at offset as big-endian
     * 64-bit floating-point number ("double") and returns it.
     */

    function readFloat64BE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat64(offset);
    }

    exports.readFloat64BE = readFloat64BE;
    /**
     * Reads 8 bytes from array starting at offset as little-endian
     * 64-bit floating-point number ("double") and returns it.
     */

    function readFloat64LE(array, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
      return view.getFloat64(offset, true);
    }

    exports.readFloat64LE = readFloat64LE;
    /**
     * Writes 4-byte big-endian floating-point representation of value
     * to byte array starting at offset.
     *
     * If byte array is not given, creates a new 4-byte one.
     *
     * Returns the output byte array.
     */

    function writeFloat32BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }

      if (offset === void 0) {
        offset = 0;
      }

      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat32(offset, value);
      return out;
    }

    exports.writeFloat32BE = writeFloat32BE;
    /**
     * Writes 4-byte little-endian floating-point representation of value
     * to byte array starting at offset.
     *
     * If byte array is not given, creates a new 4-byte one.
     *
     * Returns the output byte array.
     */

    function writeFloat32LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(4);
      }

      if (offset === void 0) {
        offset = 0;
      }

      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat32(offset, value, true);
      return out;
    }

    exports.writeFloat32LE = writeFloat32LE;
    /**
     * Writes 8-byte big-endian floating-point representation of value
     * to byte array starting at offset.
     *
     * If byte array is not given, creates a new 8-byte one.
     *
     * Returns the output byte array.
     */

    function writeFloat64BE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }

      if (offset === void 0) {
        offset = 0;
      }

      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat64(offset, value);
      return out;
    }

    exports.writeFloat64BE = writeFloat64BE;
    /**
     * Writes 8-byte little-endian floating-point representation of value
     * to byte array starting at offset.
     *
     * If byte array is not given, creates a new 8-byte one.
     *
     * Returns the output byte array.
     */

    function writeFloat64LE(value, out, offset) {
      if (out === void 0) {
        out = new Uint8Array(8);
      }

      if (offset === void 0) {
        offset = 0;
      }

      var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
      view.setFloat64(offset, value, true);
      return out;
    }

    exports.writeFloat64LE = writeFloat64LE; //# sourceMappingURL=binary.js.map

    /***/
  },

  /***/
  "./node_modules/@stablelib/ed25519/lib/ed25519.js":
  /*!********************************************************!*\
    !*** ./node_modules/@stablelib/ed25519/lib/ed25519.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStablelibEd25519LibEd25519Js(module, exports, __webpack_require__) {
    "use strict"; // Copyright (C) 2016 Dmitry Chestnykh
    // MIT License. See LICENSE file for details.

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var random_1 = __webpack_require__(
    /*! @stablelib/random */
    "./node_modules/@stablelib/random/lib/random.js");

    var sha512_1 = __webpack_require__(
    /*! @stablelib/sha512 */
    "./node_modules/@stablelib/sha512/lib/sha512.js");

    var wipe_1 = __webpack_require__(
    /*! @stablelib/wipe */
    "./node_modules/@stablelib/wipe/lib/wipe.js");

    exports.SIGNATURE_LENGTH = 64;
    exports.PUBLIC_KEY_LENGTH = 32;
    exports.SECRET_KEY_LENGTH = 64;
    exports.SEED_LENGTH = 32; // Returns new zero-filled 16-element GF (Float64Array).
    // If passed an array of numbers, prefills the returned
    // array with them.
    //
    // We use Float64Array, because we need 48-bit numbers
    // for this implementation.

    function gf(init) {
      var r = new Float64Array(16);

      if (init) {
        for (var i = 0; i < init.length; i++) {
          r[i] = init[i];
        }
      }

      return r;
    } // Base point.


    var _9 = new Uint8Array(32);

    _9[0] = 9;
    var gf0 = gf();
    var gf1 = gf([1]);
    var D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]);
    var D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]);
    var X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]);
    var Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]);
    var I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

    function set25519(r, a) {
      for (var i = 0; i < 16; i++) {
        r[i] = a[i] | 0;
      }
    }

    function car25519(o) {
      var c = 1;

      for (var i = 0; i < 16; i++) {
        var v = o[i] + c + 65535;
        c = Math.floor(v / 65536);
        o[i] = v - c * 65536;
      }

      o[0] += c - 1 + 37 * (c - 1);
    }

    function sel25519(p, q, b) {
      var c = ~(b - 1);

      for (var i = 0; i < 16; i++) {
        var t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
      }
    }

    function pack25519(o, n) {
      var m = gf();
      var t = gf();

      for (var i = 0; i < 16; i++) {
        t[i] = n[i];
      }

      car25519(t);
      car25519(t);
      car25519(t);

      for (var j = 0; j < 2; j++) {
        m[0] = t[0] - 0xffed;

        for (var i = 1; i < 15; i++) {
          m[i] = t[i] - 0xffff - (m[i - 1] >> 16 & 1);
          m[i - 1] &= 0xffff;
        }

        m[15] = t[15] - 0x7fff - (m[14] >> 16 & 1);
        var b = m[15] >> 16 & 1;
        m[14] &= 0xffff;
        sel25519(t, m, 1 - b);
      }

      for (var i = 0; i < 16; i++) {
        o[2 * i] = t[i] & 0xff;
        o[2 * i + 1] = t[i] >> 8;
      }
    }

    function verify32(x, y) {
      var d = 0;

      for (var i = 0; i < 32; i++) {
        d |= x[i] ^ y[i];
      }

      return (1 & d - 1 >>> 8) - 1;
    }

    function neq25519(a, b) {
      var c = new Uint8Array(32);
      var d = new Uint8Array(32);
      pack25519(c, a);
      pack25519(d, b);
      return verify32(c, d);
    }

    function par25519(a) {
      var d = new Uint8Array(32);
      pack25519(d, a);
      return d[0] & 1;
    }

    function unpack25519(o, n) {
      for (var i = 0; i < 16; i++) {
        o[i] = n[2 * i] + (n[2 * i + 1] << 8);
      }

      o[15] &= 0x7fff;
    }

    function add(o, a, b) {
      for (var i = 0; i < 16; i++) {
        o[i] = a[i] + b[i];
      }
    }

    function sub(o, a, b) {
      for (var i = 0; i < 16; i++) {
        o[i] = a[i] - b[i];
      }
    }

    function mul(o, a, b) {
      var v,
          c,
          t0 = 0,
          t1 = 0,
          t2 = 0,
          t3 = 0,
          t4 = 0,
          t5 = 0,
          t6 = 0,
          t7 = 0,
          t8 = 0,
          t9 = 0,
          t10 = 0,
          t11 = 0,
          t12 = 0,
          t13 = 0,
          t14 = 0,
          t15 = 0,
          t16 = 0,
          t17 = 0,
          t18 = 0,
          t19 = 0,
          t20 = 0,
          t21 = 0,
          t22 = 0,
          t23 = 0,
          t24 = 0,
          t25 = 0,
          t26 = 0,
          t27 = 0,
          t28 = 0,
          t29 = 0,
          t30 = 0,
          b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3],
          b4 = b[4],
          b5 = b[5],
          b6 = b[6],
          b7 = b[7],
          b8 = b[8],
          b9 = b[9],
          b10 = b[10],
          b11 = b[11],
          b12 = b[12],
          b13 = b[13],
          b14 = b[14],
          b15 = b[15];
      v = a[0];
      t0 += v * b0;
      t1 += v * b1;
      t2 += v * b2;
      t3 += v * b3;
      t4 += v * b4;
      t5 += v * b5;
      t6 += v * b6;
      t7 += v * b7;
      t8 += v * b8;
      t9 += v * b9;
      t10 += v * b10;
      t11 += v * b11;
      t12 += v * b12;
      t13 += v * b13;
      t14 += v * b14;
      t15 += v * b15;
      v = a[1];
      t1 += v * b0;
      t2 += v * b1;
      t3 += v * b2;
      t4 += v * b3;
      t5 += v * b4;
      t6 += v * b5;
      t7 += v * b6;
      t8 += v * b7;
      t9 += v * b8;
      t10 += v * b9;
      t11 += v * b10;
      t12 += v * b11;
      t13 += v * b12;
      t14 += v * b13;
      t15 += v * b14;
      t16 += v * b15;
      v = a[2];
      t2 += v * b0;
      t3 += v * b1;
      t4 += v * b2;
      t5 += v * b3;
      t6 += v * b4;
      t7 += v * b5;
      t8 += v * b6;
      t9 += v * b7;
      t10 += v * b8;
      t11 += v * b9;
      t12 += v * b10;
      t13 += v * b11;
      t14 += v * b12;
      t15 += v * b13;
      t16 += v * b14;
      t17 += v * b15;
      v = a[3];
      t3 += v * b0;
      t4 += v * b1;
      t5 += v * b2;
      t6 += v * b3;
      t7 += v * b4;
      t8 += v * b5;
      t9 += v * b6;
      t10 += v * b7;
      t11 += v * b8;
      t12 += v * b9;
      t13 += v * b10;
      t14 += v * b11;
      t15 += v * b12;
      t16 += v * b13;
      t17 += v * b14;
      t18 += v * b15;
      v = a[4];
      t4 += v * b0;
      t5 += v * b1;
      t6 += v * b2;
      t7 += v * b3;
      t8 += v * b4;
      t9 += v * b5;
      t10 += v * b6;
      t11 += v * b7;
      t12 += v * b8;
      t13 += v * b9;
      t14 += v * b10;
      t15 += v * b11;
      t16 += v * b12;
      t17 += v * b13;
      t18 += v * b14;
      t19 += v * b15;
      v = a[5];
      t5 += v * b0;
      t6 += v * b1;
      t7 += v * b2;
      t8 += v * b3;
      t9 += v * b4;
      t10 += v * b5;
      t11 += v * b6;
      t12 += v * b7;
      t13 += v * b8;
      t14 += v * b9;
      t15 += v * b10;
      t16 += v * b11;
      t17 += v * b12;
      t18 += v * b13;
      t19 += v * b14;
      t20 += v * b15;
      v = a[6];
      t6 += v * b0;
      t7 += v * b1;
      t8 += v * b2;
      t9 += v * b3;
      t10 += v * b4;
      t11 += v * b5;
      t12 += v * b6;
      t13 += v * b7;
      t14 += v * b8;
      t15 += v * b9;
      t16 += v * b10;
      t17 += v * b11;
      t18 += v * b12;
      t19 += v * b13;
      t20 += v * b14;
      t21 += v * b15;
      v = a[7];
      t7 += v * b0;
      t8 += v * b1;
      t9 += v * b2;
      t10 += v * b3;
      t11 += v * b4;
      t12 += v * b5;
      t13 += v * b6;
      t14 += v * b7;
      t15 += v * b8;
      t16 += v * b9;
      t17 += v * b10;
      t18 += v * b11;
      t19 += v * b12;
      t20 += v * b13;
      t21 += v * b14;
      t22 += v * b15;
      v = a[8];
      t8 += v * b0;
      t9 += v * b1;
      t10 += v * b2;
      t11 += v * b3;
      t12 += v * b4;
      t13 += v * b5;
      t14 += v * b6;
      t15 += v * b7;
      t16 += v * b8;
      t17 += v * b9;
      t18 += v * b10;
      t19 += v * b11;
      t20 += v * b12;
      t21 += v * b13;
      t22 += v * b14;
      t23 += v * b15;
      v = a[9];
      t9 += v * b0;
      t10 += v * b1;
      t11 += v * b2;
      t12 += v * b3;
      t13 += v * b4;
      t14 += v * b5;
      t15 += v * b6;
      t16 += v * b7;
      t17 += v * b8;
      t18 += v * b9;
      t19 += v * b10;
      t20 += v * b11;
      t21 += v * b12;
      t22 += v * b13;
      t23 += v * b14;
      t24 += v * b15;
      v = a[10];
      t10 += v * b0;
      t11 += v * b1;
      t12 += v * b2;
      t13 += v * b3;
      t14 += v * b4;
      t15 += v * b5;
      t16 += v * b6;
      t17 += v * b7;
      t18 += v * b8;
      t19 += v * b9;
      t20 += v * b10;
      t21 += v * b11;
      t22 += v * b12;
      t23 += v * b13;
      t24 += v * b14;
      t25 += v * b15;
      v = a[11];
      t11 += v * b0;
      t12 += v * b1;
      t13 += v * b2;
      t14 += v * b3;
      t15 += v * b4;
      t16 += v * b5;
      t17 += v * b6;
      t18 += v * b7;
      t19 += v * b8;
      t20 += v * b9;
      t21 += v * b10;
      t22 += v * b11;
      t23 += v * b12;
      t24 += v * b13;
      t25 += v * b14;
      t26 += v * b15;
      v = a[12];
      t12 += v * b0;
      t13 += v * b1;
      t14 += v * b2;
      t15 += v * b3;
      t16 += v * b4;
      t17 += v * b5;
      t18 += v * b6;
      t19 += v * b7;
      t20 += v * b8;
      t21 += v * b9;
      t22 += v * b10;
      t23 += v * b11;
      t24 += v * b12;
      t25 += v * b13;
      t26 += v * b14;
      t27 += v * b15;
      v = a[13];
      t13 += v * b0;
      t14 += v * b1;
      t15 += v * b2;
      t16 += v * b3;
      t17 += v * b4;
      t18 += v * b5;
      t19 += v * b6;
      t20 += v * b7;
      t21 += v * b8;
      t22 += v * b9;
      t23 += v * b10;
      t24 += v * b11;
      t25 += v * b12;
      t26 += v * b13;
      t27 += v * b14;
      t28 += v * b15;
      v = a[14];
      t14 += v * b0;
      t15 += v * b1;
      t16 += v * b2;
      t17 += v * b3;
      t18 += v * b4;
      t19 += v * b5;
      t20 += v * b6;
      t21 += v * b7;
      t22 += v * b8;
      t23 += v * b9;
      t24 += v * b10;
      t25 += v * b11;
      t26 += v * b12;
      t27 += v * b13;
      t28 += v * b14;
      t29 += v * b15;
      v = a[15];
      t15 += v * b0;
      t16 += v * b1;
      t17 += v * b2;
      t18 += v * b3;
      t19 += v * b4;
      t20 += v * b5;
      t21 += v * b6;
      t22 += v * b7;
      t23 += v * b8;
      t24 += v * b9;
      t25 += v * b10;
      t26 += v * b11;
      t27 += v * b12;
      t28 += v * b13;
      t29 += v * b14;
      t30 += v * b15;
      t0 += 38 * t16;
      t1 += 38 * t17;
      t2 += 38 * t18;
      t3 += 38 * t19;
      t4 += 38 * t20;
      t5 += 38 * t21;
      t6 += 38 * t22;
      t7 += 38 * t23;
      t8 += 38 * t24;
      t9 += 38 * t25;
      t10 += 38 * t26;
      t11 += 38 * t27;
      t12 += 38 * t28;
      t13 += 38 * t29;
      t14 += 38 * t30; // t15 left as is
      // first car

      c = 1;
      v = t0 + c + 65535;
      c = Math.floor(v / 65536);
      t0 = v - c * 65536;
      v = t1 + c + 65535;
      c = Math.floor(v / 65536);
      t1 = v - c * 65536;
      v = t2 + c + 65535;
      c = Math.floor(v / 65536);
      t2 = v - c * 65536;
      v = t3 + c + 65535;
      c = Math.floor(v / 65536);
      t3 = v - c * 65536;
      v = t4 + c + 65535;
      c = Math.floor(v / 65536);
      t4 = v - c * 65536;
      v = t5 + c + 65535;
      c = Math.floor(v / 65536);
      t5 = v - c * 65536;
      v = t6 + c + 65535;
      c = Math.floor(v / 65536);
      t6 = v - c * 65536;
      v = t7 + c + 65535;
      c = Math.floor(v / 65536);
      t7 = v - c * 65536;
      v = t8 + c + 65535;
      c = Math.floor(v / 65536);
      t8 = v - c * 65536;
      v = t9 + c + 65535;
      c = Math.floor(v / 65536);
      t9 = v - c * 65536;
      v = t10 + c + 65535;
      c = Math.floor(v / 65536);
      t10 = v - c * 65536;
      v = t11 + c + 65535;
      c = Math.floor(v / 65536);
      t11 = v - c * 65536;
      v = t12 + c + 65535;
      c = Math.floor(v / 65536);
      t12 = v - c * 65536;
      v = t13 + c + 65535;
      c = Math.floor(v / 65536);
      t13 = v - c * 65536;
      v = t14 + c + 65535;
      c = Math.floor(v / 65536);
      t14 = v - c * 65536;
      v = t15 + c + 65535;
      c = Math.floor(v / 65536);
      t15 = v - c * 65536;
      t0 += c - 1 + 37 * (c - 1); // second car

      c = 1;
      v = t0 + c + 65535;
      c = Math.floor(v / 65536);
      t0 = v - c * 65536;
      v = t1 + c + 65535;
      c = Math.floor(v / 65536);
      t1 = v - c * 65536;
      v = t2 + c + 65535;
      c = Math.floor(v / 65536);
      t2 = v - c * 65536;
      v = t3 + c + 65535;
      c = Math.floor(v / 65536);
      t3 = v - c * 65536;
      v = t4 + c + 65535;
      c = Math.floor(v / 65536);
      t4 = v - c * 65536;
      v = t5 + c + 65535;
      c = Math.floor(v / 65536);
      t5 = v - c * 65536;
      v = t6 + c + 65535;
      c = Math.floor(v / 65536);
      t6 = v - c * 65536;
      v = t7 + c + 65535;
      c = Math.floor(v / 65536);
      t7 = v - c * 65536;
      v = t8 + c + 65535;
      c = Math.floor(v / 65536);
      t8 = v - c * 65536;
      v = t9 + c + 65535;
      c = Math.floor(v / 65536);
      t9 = v - c * 65536;
      v = t10 + c + 65535;
      c = Math.floor(v / 65536);
      t10 = v - c * 65536;
      v = t11 + c + 65535;
      c = Math.floor(v / 65536);
      t11 = v - c * 65536;
      v = t12 + c + 65535;
      c = Math.floor(v / 65536);
      t12 = v - c * 65536;
      v = t13 + c + 65535;
      c = Math.floor(v / 65536);
      t13 = v - c * 65536;
      v = t14 + c + 65535;
      c = Math.floor(v / 65536);
      t14 = v - c * 65536;
      v = t15 + c + 65535;
      c = Math.floor(v / 65536);
      t15 = v - c * 65536;
      t0 += c - 1 + 37 * (c - 1);
      o[0] = t0;
      o[1] = t1;
      o[2] = t2;
      o[3] = t3;
      o[4] = t4;
      o[5] = t5;
      o[6] = t6;
      o[7] = t7;
      o[8] = t8;
      o[9] = t9;
      o[10] = t10;
      o[11] = t11;
      o[12] = t12;
      o[13] = t13;
      o[14] = t14;
      o[15] = t15;
    }

    function square(o, a) {
      mul(o, a, a);
    }

    function inv25519(o, i) {
      var c = gf();
      var a;

      for (a = 0; a < 16; a++) {
        c[a] = i[a];
      }

      for (a = 253; a >= 0; a--) {
        square(c, c);

        if (a !== 2 && a !== 4) {
          mul(c, c, i);
        }
      }

      for (a = 0; a < 16; a++) {
        o[a] = c[a];
      }
    }

    function pow2523(o, i) {
      var c = gf();
      var a;

      for (a = 0; a < 16; a++) {
        c[a] = i[a];
      }

      for (a = 250; a >= 0; a--) {
        square(c, c);

        if (a !== 1) {
          mul(c, c, i);
        }
      }

      for (a = 0; a < 16; a++) {
        o[a] = c[a];
      }
    }

    function edadd(p, q) {
      var a = gf(),
          b = gf(),
          c = gf(),
          d = gf(),
          e = gf(),
          f = gf(),
          g = gf(),
          h = gf(),
          t = gf();
      sub(a, p[1], p[0]);
      sub(t, q[1], q[0]);
      mul(a, a, t);
      add(b, p[0], p[1]);
      add(t, q[0], q[1]);
      mul(b, b, t);
      mul(c, p[3], q[3]);
      mul(c, c, D2);
      mul(d, p[2], q[2]);
      add(d, d, d);
      sub(e, b, a);
      sub(f, d, c);
      add(g, d, c);
      add(h, b, a);
      mul(p[0], e, f);
      mul(p[1], h, g);
      mul(p[2], g, f);
      mul(p[3], e, h);
    }

    function cswap(p, q, b) {
      for (var i = 0; i < 4; i++) {
        sel25519(p[i], q[i], b);
      }
    }

    function pack(r, p) {
      var tx = gf(),
          ty = gf(),
          zi = gf();
      inv25519(zi, p[2]);
      mul(tx, p[0], zi);
      mul(ty, p[1], zi);
      pack25519(r, ty);
      r[31] ^= par25519(tx) << 7;
    }

    function scalarmult(p, q, s) {
      set25519(p[0], gf0);
      set25519(p[1], gf1);
      set25519(p[2], gf1);
      set25519(p[3], gf0);

      for (var i = 255; i >= 0; --i) {
        var b = s[i / 8 | 0] >> (i & 7) & 1;
        cswap(p, q, b);
        edadd(q, p);
        edadd(p, p);
        cswap(p, q, b);
      }
    }

    function scalarbase(p, s) {
      var q = [gf(), gf(), gf(), gf()];
      set25519(q[0], X);
      set25519(q[1], Y);
      set25519(q[2], gf1);
      mul(q[3], X, Y);
      scalarmult(p, q, s);
    } // Generates key pair from secret 32-byte seed.


    function generateKeyPairFromSeed(seed) {
      if (seed.length !== exports.SEED_LENGTH) {
        throw new Error("ed25519: seed must be " + exports.SEED_LENGTH + " bytes");
      }

      var d = sha512_1.hash(seed);
      d[0] &= 248;
      d[31] &= 127;
      d[31] |= 64;
      var publicKey = new Uint8Array(32);
      var p = [gf(), gf(), gf(), gf()];
      scalarbase(p, d);
      pack(publicKey, p);
      var secretKey = new Uint8Array(64);
      secretKey.set(seed);
      secretKey.set(publicKey, 32);
      return {
        publicKey: publicKey,
        secretKey: secretKey
      };
    }

    exports.generateKeyPairFromSeed = generateKeyPairFromSeed;

    function generateKeyPair(prng) {
      var seed = random_1.randomBytes(32, prng);
      var result = generateKeyPairFromSeed(seed);
      wipe_1.wipe(seed);
      return result;
    }

    exports.generateKeyPair = generateKeyPair;

    function extractPublicKeyFromSecretKey(secretKey) {
      if (secretKey.length !== exports.SECRET_KEY_LENGTH) {
        throw new Error("ed25519: secret key must be " + exports.SECRET_KEY_LENGTH + " bytes");
      }

      return new Uint8Array(secretKey.subarray(32));
    }

    exports.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
    var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);

    function modL(r, x) {
      var carry;
      var i;
      var j;
      var k;

      for (i = 63; i >= 32; --i) {
        carry = 0;

        for (j = i - 32, k = i - 12; j < k; ++j) {
          x[j] += carry - 16 * x[i] * L[j - (i - 32)];
          carry = x[j] + 128 >> 8;
          x[j] -= carry * 256;
        }

        x[j] += carry;
        x[i] = 0;
      }

      carry = 0;

      for (j = 0; j < 32; j++) {
        x[j] += carry - (x[31] >> 4) * L[j];
        carry = x[j] >> 8;
        x[j] &= 255;
      }

      for (j = 0; j < 32; j++) {
        x[j] -= carry * L[j];
      }

      for (i = 0; i < 32; i++) {
        x[i + 1] += x[i] >> 8;
        r[i] = x[i] & 255;
      }
    }

    function reduce(r) {
      var x = new Float64Array(64);

      for (var i = 0; i < 64; i++) {
        x[i] = r[i];
      }

      for (var i = 0; i < 64; i++) {
        r[i] = 0;
      }

      modL(r, x);
    } // Returns 64-byte signature of the message under the 64-byte secret key.


    function sign(secretKey, message) {
      var x = new Float64Array(64);
      var p = [gf(), gf(), gf(), gf()];
      var d = sha512_1.hash(secretKey.subarray(0, 32));
      d[0] &= 248;
      d[31] &= 127;
      d[31] |= 64;
      var signature = new Uint8Array(64);
      signature.set(d.subarray(32), 32);
      var hs = new sha512_1.SHA512();
      hs.update(signature.subarray(32));
      hs.update(message);
      var r = hs.digest();
      hs.clean();
      reduce(r);
      scalarbase(p, r);
      pack(signature, p);
      hs.reset();
      hs.update(signature.subarray(0, 32));
      hs.update(secretKey.subarray(32));
      hs.update(message);
      var h = hs.digest();
      reduce(h);

      for (var i = 0; i < 32; i++) {
        x[i] = r[i];
      }

      for (var i = 0; i < 32; i++) {
        for (var j = 0; j < 32; j++) {
          x[i + j] += h[i] * d[j];
        }
      }

      modL(signature.subarray(32), x);
      return signature;
    }

    exports.sign = sign;

    function unpackneg(r, p) {
      var t = gf(),
          chk = gf(),
          num = gf(),
          den = gf(),
          den2 = gf(),
          den4 = gf(),
          den6 = gf();
      set25519(r[2], gf1);
      unpack25519(r[1], p);
      square(num, r[1]);
      mul(den, num, D);
      sub(num, num, r[2]);
      add(den, r[2], den);
      square(den2, den);
      square(den4, den2);
      mul(den6, den4, den2);
      mul(t, den6, num);
      mul(t, t, den);
      pow2523(t, t);
      mul(t, t, num);
      mul(t, t, den);
      mul(t, t, den);
      mul(r[0], t, den);
      square(chk, r[0]);
      mul(chk, chk, den);

      if (neq25519(chk, num)) {
        mul(r[0], r[0], I);
      }

      square(chk, r[0]);
      mul(chk, chk, den);

      if (neq25519(chk, num)) {
        return -1;
      }

      if (par25519(r[0]) === p[31] >> 7) {
        sub(r[0], gf0, r[0]);
      }

      mul(r[3], r[0], r[1]);
      return 0;
    }

    function verify(publicKey, message, signature) {
      var t = new Uint8Array(32);
      var p = [gf(), gf(), gf(), gf()];
      var q = [gf(), gf(), gf(), gf()];

      if (signature.length !== exports.SIGNATURE_LENGTH) {
        throw new Error("ed25519: signature must be " + exports.SIGNATURE_LENGTH + " bytes");
      }

      if (unpackneg(q, publicKey)) {
        return false;
      }

      var hs = new sha512_1.SHA512();
      hs.update(signature.subarray(0, 32));
      hs.update(publicKey);
      hs.update(message);
      var h = hs.digest();
      reduce(h);
      scalarmult(p, q, h);
      scalarbase(q, signature.subarray(32));
      edadd(p, q);
      pack(t, p);

      if (verify32(signature, t)) {
        return false;
      }

      return true;
    }

    exports.verify = verify;
    /**
     * Convert Ed25519 public key to X5519 public key.
     *
     * Throws if given an invalid public key.
     */

    function convertPublicKeyToX25519(publicKey) {
      var q = [gf(), gf(), gf(), gf()];

      if (unpackneg(q, publicKey)) {
        throw new Error("Ed25519: invalid public key");
      } // Formula: montgomeryX = (edwardsY + 1)*inverse(1 - edwardsY) mod p


      var a = gf();
      var b = gf();
      var y = q[1];
      add(a, gf1, y);
      sub(b, gf1, y);
      inv25519(b, b);
      mul(a, a, b);
      var z = new Uint8Array(32);
      pack25519(z, a);
      return z;
    }

    exports.convertPublicKeyToX25519 = convertPublicKeyToX25519;
    /**
     *  Convert Ed25519 secret (private) key to X25519 secret key.
     */

    function convertSecretKeyToX25519(secretKey) {
      var d = sha512_1.hash(secretKey.subarray(0, 32));
      d[0] &= 248;
      d[31] &= 127;
      d[31] |= 64;
      var o = new Uint8Array(d.subarray(0, 32));
      wipe_1.wipe(d);
      return o;
    }

    exports.convertSecretKeyToX25519 = convertSecretKeyToX25519; //# sourceMappingURL=ed25519.js.map

    /***/
  },

  /***/
  "./node_modules/@stablelib/int/lib/int.js":
  /*!************************************************!*\
    !*** ./node_modules/@stablelib/int/lib/int.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStablelibIntLibIntJs(module, exports, __webpack_require__) {
    "use strict"; // Copyright (C) 2016 Dmitry Chestnykh
    // MIT License. See LICENSE file for details.

    Object.defineProperty(exports, "__esModule", {
      value: true
    }); // Shim using 16-bit pieces.

    function imulShim(a, b) {
      var ah = a >>> 16 & 0xffff,
          al = a & 0xffff;
      var bh = b >>> 16 & 0xffff,
          bl = b & 0xffff;
      return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
    }
    /** 32-bit integer multiplication.  */
    // Use system Math.imul if available, otherwise use our shim.


    exports.mul = Math.imul || imulShim;
    /** 32-bit integer addition.  */

    function add(a, b) {
      return a + b | 0;
    }

    exports.add = add;
    /**  32-bit integer subtraction.  */

    function sub(a, b) {
      return a - b | 0;
    }

    exports.sub = sub;
    /** 32-bit integer left rotation */

    function rotl(x, n) {
      return x << n | x >>> 32 - n;
    }

    exports.rotl = rotl;
    /** 32-bit integer left rotation */

    function rotr(x, n) {
      return x << 32 - n | x >>> n;
    }

    exports.rotr = rotr;

    function isIntegerShim(n) {
      return typeof n === "number" && isFinite(n) && Math.floor(n) === n;
    }
    /**
     * Returns true if the argument is an integer number.
     *
     * In ES2015, Number.isInteger.
     */


    exports.isInteger = Number.isInteger || isIntegerShim;
    /**
     *  Math.pow(2, 53) - 1
     *
     *  In ES2015 Number.MAX_SAFE_INTEGER.
     */

    exports.MAX_SAFE_INTEGER = 9007199254740991;
    /**
     * Returns true if the argument is a safe integer number
     * (-MIN_SAFE_INTEGER < number <= MAX_SAFE_INTEGER)
     *
     * In ES2015, Number.isSafeInteger.
     */

    exports.isSafeInteger = function (n) {
      return exports.isInteger(n) && n >= -exports.MAX_SAFE_INTEGER && n <= exports.MAX_SAFE_INTEGER;
    }; //# sourceMappingURL=int.js.map

    /***/

  },

  /***/
  "./node_modules/@stablelib/random/lib/random.js":
  /*!******************************************************!*\
    !*** ./node_modules/@stablelib/random/lib/random.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStablelibRandomLibRandomJs(module, exports, __webpack_require__) {
    "use strict"; // Copyright (C) 2016 Dmitry Chestnykh
    // MIT License. See LICENSE file for details.

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var system_1 = __webpack_require__(
    /*! ./source/system */
    "./node_modules/@stablelib/random/lib/source/system.js");

    var binary_1 = __webpack_require__(
    /*! @stablelib/binary */
    "./node_modules/@stablelib/binary/lib/binary.js");

    var wipe_1 = __webpack_require__(
    /*! @stablelib/wipe */
    "./node_modules/@stablelib/wipe/lib/wipe.js");

    exports.defaultRandomSource = new system_1.SystemRandomSource();

    function randomBytes(length, prng) {
      if (prng === void 0) {
        prng = exports.defaultRandomSource;
      }

      return prng.randomBytes(length);
    }

    exports.randomBytes = randomBytes;

    function randomUint32(prng) {
      if (prng === void 0) {
        prng = exports.defaultRandomSource;
      } // Generate 4-byte random buffer.


      var buf = randomBytes(4, prng); // Convert bytes from buffer into a 32-bit integer.
      // It's not important which byte order to use, since
      // the result is random.

      var result = binary_1.readUint32LE(buf); // Clean the buffer.

      wipe_1.wipe(buf);
      return result;
    }

    exports.randomUint32 = randomUint32;
    /** 62 alphanumeric characters for default charset of randomString() */

    var ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    /**
     * Returns uniform random string of the given length
     * with characters from the given charset.
     *
     * Charset must not have more than 256 characters.
     *
     * Default charset generates case-sensitive alphanumeric
     * strings (0-9, A-Z, a-z).
     */

    function randomString(length, charset, prng) {
      if (charset === void 0) {
        charset = ALPHANUMERIC;
      }

      if (prng === void 0) {
        prng = exports.defaultRandomSource;
      }

      if (charset.length < 2) {
        throw new Error("randomString charset is too short");
      }

      if (charset.length > 256) {
        throw new Error("randomString charset is too long");
      }

      var out = '';
      var charsLen = charset.length;
      var maxByte = 256 - 256 % charsLen;

      while (length > 0) {
        var buf = randomBytes(Math.ceil(length * 256 / maxByte), prng);

        for (var i = 0; i < buf.length && length > 0; i++) {
          var randomByte = buf[i];

          if (randomByte < maxByte) {
            out += charset.charAt(randomByte % charsLen);
            length--;
          }
        }

        wipe_1.wipe(buf);
      }

      return out;
    }

    exports.randomString = randomString;
    /**
     * Returns uniform random string containing at least the given
     * number of bits of entropy.
     *
     * For example, randomStringForEntropy(128) will return a 22-character
     * alphanumeric string, while randomStringForEntropy(128, "0123456789")
     * will return a 39-character numeric string, both will contain at
     * least 128 bits of entropy.
     *
     * Default charset generates case-sensitive alphanumeric
     * strings (0-9, A-Z, a-z).
     */

    function randomStringForEntropy(bits, charset, prng) {
      if (charset === void 0) {
        charset = ALPHANUMERIC;
      }

      if (prng === void 0) {
        prng = exports.defaultRandomSource;
      }

      var length = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
      return randomString(length, charset, prng);
    }

    exports.randomStringForEntropy = randomStringForEntropy; //# sourceMappingURL=random.js.map

    /***/
  },

  /***/
  "./node_modules/@stablelib/random/lib/source/browser.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@stablelib/random/lib/source/browser.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStablelibRandomLibSourceBrowserJs(module, exports, __webpack_require__) {
    "use strict"; // Copyright (C) 2016 Dmitry Chestnykh
    // MIT License. See LICENSE file for details.

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var QUOTA = 65536;

    var BrowserRandomSource =
    /** @class */
    function () {
      function BrowserRandomSource() {
        this.isAvailable = false;
        this.isInstantiated = false;
        var browserCrypto = typeof self !== 'undefined' ? self.crypto || self.msCrypto : // IE11 has msCrypto
        null;

        if (browserCrypto && browserCrypto.getRandomValues) {
          this._crypto = browserCrypto;
          this.isAvailable = true;
          this.isInstantiated = true;
        }
      }

      BrowserRandomSource.prototype.randomBytes = function (length) {
        if (!this.isAvailable || !this._crypto) {
          throw new Error("Browser random byte generator is not available.");
        }

        var out = new Uint8Array(length);

        for (var i = 0; i < out.length; i += QUOTA) {
          this._crypto.getRandomValues(out.subarray(i, i + Math.min(out.length - i, QUOTA)));
        }

        return out;
      };

      return BrowserRandomSource;
    }();

    exports.BrowserRandomSource = BrowserRandomSource; //# sourceMappingURL=browser.js.map

    /***/
  },

  /***/
  "./node_modules/@stablelib/random/lib/source/node.js":
  /*!***********************************************************!*\
    !*** ./node_modules/@stablelib/random/lib/source/node.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStablelibRandomLibSourceNodeJs(module, exports, __webpack_require__) {
    "use strict"; // Copyright (C) 2016 Dmitry Chestnykh
    // MIT License. See LICENSE file for details.

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var wipe_1 = __webpack_require__(
    /*! @stablelib/wipe */
    "./node_modules/@stablelib/wipe/lib/wipe.js");

    var NodeRandomSource =
    /** @class */
    function () {
      function NodeRandomSource() {
        this.isAvailable = false;
        this.isInstantiated = false;

        if (true) {
          var nodeCrypto = __webpack_require__(
          /*! crypto */
          "./node_modules/crypto-browserify/index.js");

          if (nodeCrypto && nodeCrypto.randomBytes) {
            this._crypto = nodeCrypto;
            this.isAvailable = true;
            this.isInstantiated = true;
          }
        }
      }

      NodeRandomSource.prototype.randomBytes = function (length) {
        if (!this.isAvailable || !this._crypto) {
          throw new Error("Node.js random byte generator is not available.");
        } // Get random bytes (result is Buffer).


        var buffer = this._crypto.randomBytes(length); // Make sure we got the length that we requested.


        if (buffer.length !== length) {
          throw new Error("NodeRandomSource: got fewer bytes than requested");
        } // Allocate output array.


        var out = new Uint8Array(length); // Copy bytes from buffer to output.

        for (var i = 0; i < out.length; i++) {
          out[i] = buffer[i];
        } // Cleanup.


        wipe_1.wipe(buffer);
        return out;
      };

      return NodeRandomSource;
    }();

    exports.NodeRandomSource = NodeRandomSource; //# sourceMappingURL=node.js.map

    /***/
  },

  /***/
  "./node_modules/@stablelib/random/lib/source/system.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@stablelib/random/lib/source/system.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStablelibRandomLibSourceSystemJs(module, exports, __webpack_require__) {
    "use strict"; // Copyright (C) 2016 Dmitry Chestnykh
    // MIT License. See LICENSE file for details.

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var browser_1 = __webpack_require__(
    /*! ./browser */
    "./node_modules/@stablelib/random/lib/source/browser.js");

    var node_1 = __webpack_require__(
    /*! ./node */
    "./node_modules/@stablelib/random/lib/source/node.js");

    var SystemRandomSource =
    /** @class */
    function () {
      function SystemRandomSource() {
        this.isAvailable = false;
        this.name = ""; // Try browser.

        this._source = new browser_1.BrowserRandomSource();

        if (this._source.isAvailable) {
          this.isAvailable = true;
          this.name = "Browser";
          return;
        } // If no browser source, try Node.


        this._source = new node_1.NodeRandomSource();

        if (this._source.isAvailable) {
          this.isAvailable = true;
          this.name = "Node";
          return;
        } // No sources, we're out of options.

      }

      SystemRandomSource.prototype.randomBytes = function (length) {
        if (!this.isAvailable) {
          throw new Error("System random byte generator is not available.");
        }

        return this._source.randomBytes(length);
      };

      return SystemRandomSource;
    }();

    exports.SystemRandomSource = SystemRandomSource; //# sourceMappingURL=system.js.map

    /***/
  },

  /***/
  "./node_modules/@stablelib/sha512/lib/sha512.js":
  /*!******************************************************!*\
    !*** ./node_modules/@stablelib/sha512/lib/sha512.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStablelibSha512LibSha512Js(module, exports, __webpack_require__) {
    "use strict"; // Copyright (C) 2016 Dmitry Chestnykh
    // MIT License. See LICENSE file for details.

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var binary_1 = __webpack_require__(
    /*! @stablelib/binary */
    "./node_modules/@stablelib/binary/lib/binary.js");

    var wipe_1 = __webpack_require__(
    /*! @stablelib/wipe */
    "./node_modules/@stablelib/wipe/lib/wipe.js");

    exports.DIGEST_LENGTH = 64;
    exports.BLOCK_SIZE = 128;
    /**
     * SHA2-512 cryptographic hash algorithm.
     */

    var SHA512 = function () {
      function SHA512() {
        /** Length of hash output */
        this.digestLength = exports.DIGEST_LENGTH;
        /** Block size */

        this.blockSize = exports.BLOCK_SIZE; // Note: Int32Array is used instead of Uint32Array for performance reasons.

        this._stateHi = new Int32Array(8); // hash state, high bytes

        this._stateLo = new Int32Array(8); // hash state, low bytes

        this._tempHi = new Int32Array(16); // temporary state, high bytes

        this._tempLo = new Int32Array(16); // temporary state, low bytes

        this._buffer = new Uint8Array(256); // buffer for data to hash

        this._bufferLength = 0; // number of bytes in buffer

        this._bytesHashed = 0; // number of total bytes hashed

        this._finished = false; // indicates whether the hash was finalized

        this.reset();
      }

      SHA512.prototype._initState = function () {
        this._stateHi[0] = 0x6a09e667;
        this._stateHi[1] = 0xbb67ae85;
        this._stateHi[2] = 0x3c6ef372;
        this._stateHi[3] = 0xa54ff53a;
        this._stateHi[4] = 0x510e527f;
        this._stateHi[5] = 0x9b05688c;
        this._stateHi[6] = 0x1f83d9ab;
        this._stateHi[7] = 0x5be0cd19;
        this._stateLo[0] = 0xf3bcc908;
        this._stateLo[1] = 0x84caa73b;
        this._stateLo[2] = 0xfe94f82b;
        this._stateLo[3] = 0x5f1d36f1;
        this._stateLo[4] = 0xade682d1;
        this._stateLo[5] = 0x2b3e6c1f;
        this._stateLo[6] = 0xfb41bd6b;
        this._stateLo[7] = 0x137e2179;
      };
      /**
       * Resets hash state making it possible
       * to re-use this instance to hash other data.
       */


      SHA512.prototype.reset = function () {
        this._initState();

        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
      };
      /**
       * Cleans internal buffers and resets hash state.
       */


      SHA512.prototype.clean = function () {
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._tempHi);
        wipe_1.wipe(this._tempLo);
        this.reset();
      };
      /**
       * Updates hash state with the given data.
       *
       * Throws error when trying to update already finalized hash:
       * instance must be reset to update it again.
       */


      SHA512.prototype.update = function (data, dataLength) {
        if (dataLength === void 0) {
          dataLength = data.length;
        }

        if (this._finished) {
          throw new Error("SHA512: can't update because hash was finished.");
        }

        var dataPos = 0;
        this._bytesHashed += dataLength;

        if (this._bufferLength > 0) {
          while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }

          if (this._bufferLength === this.blockSize) {
            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
            this._bufferLength = 0;
          }
        }

        if (dataLength >= this.blockSize) {
          dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
          dataLength %= this.blockSize;
        }

        while (dataLength > 0) {
          this._buffer[this._bufferLength++] = data[dataPos++];
          dataLength--;
        }

        return this;
      };
      /**
       * Finalizes hash state and puts hash into out.
       * If hash was already finalized, puts the same value.
       */


      SHA512.prototype.finish = function (out) {
        if (!this._finished) {
          var bytesHashed = this._bytesHashed;
          var left = this._bufferLength;
          var bitLenHi = bytesHashed / 0x20000000 | 0;
          var bitLenLo = bytesHashed << 3;
          var padLength = bytesHashed % 128 < 112 ? 128 : 256;
          this._buffer[left] = 0x80;

          for (var i = left + 1; i < padLength - 8; i++) {
            this._buffer[i] = 0;
          }

          binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
          binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
          hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
          this._finished = true;
        }

        for (var i = 0; i < this.digestLength / 8; i++) {
          binary_1.writeUint32BE(this._stateHi[i], out, i * 8);
          binary_1.writeUint32BE(this._stateLo[i], out, i * 8 + 4);
        }

        return this;
      };
      /**
       * Returns the final hash digest.
       */


      SHA512.prototype.digest = function () {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
      };
      /**
       * Function useful for HMAC/PBKDF2 optimization. Returns hash state to be
       * used with restoreState(). Only chain value is saved, not buffers or
       * other state variables.
       */


      SHA512.prototype.saveState = function () {
        if (this._finished) {
          throw new Error("SHA256: cannot save finished state");
        }

        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : undefined,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      };
      /**
       * Function useful for HMAC/PBKDF2 optimization. Restores state saved by
       * saveState() and sets bytesHashed to the given value.
       */


      SHA512.prototype.restoreState = function (savedState) {
        this._stateHi.set(savedState.stateHi);

        this._stateLo.set(savedState.stateLo);

        this._bufferLength = savedState.bufferLength;

        if (savedState.buffer) {
          this._buffer.set(savedState.buffer);
        }

        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
      };
      /**
       * Cleans state returned by saveState().
       */


      SHA512.prototype.cleanSavedState = function (savedState) {
        wipe_1.wipe(savedState.stateHi);
        wipe_1.wipe(savedState.stateLo);

        if (savedState.buffer) {
          wipe_1.wipe(savedState.buffer);
        }

        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
      };

      return SHA512;
    }();

    exports.SHA512 = SHA512; // Constants

    var K = new Int32Array([0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817]);

    function hashBlocks(wh, wl, hh, hl, m, pos, len) {
      var ah0 = hh[0],
          ah1 = hh[1],
          ah2 = hh[2],
          ah3 = hh[3],
          ah4 = hh[4],
          ah5 = hh[5],
          ah6 = hh[6],
          ah7 = hh[7],
          al0 = hl[0],
          al1 = hl[1],
          al2 = hl[2],
          al3 = hl[3],
          al4 = hl[4],
          al5 = hl[5],
          al6 = hl[6],
          al7 = hl[7];
      var h, l;
      var th, tl;
      var a, b, c, d;

      while (len >= 128) {
        for (var i = 0; i < 16; i++) {
          var j = 8 * i + pos;
          wh[i] = binary_1.readUint32BE(m, j);
          wl[i] = binary_1.readUint32BE(m, j + 4);
        }

        for (var i = 0; i < 80; i++) {
          var bh0 = ah0;
          var bh1 = ah1;
          var bh2 = ah2;
          var bh3 = ah3;
          var bh4 = ah4;
          var bh5 = ah5;
          var bh6 = ah6;
          var bh7 = ah7;
          var bl0 = al0;
          var bl1 = al1;
          var bl2 = al2;
          var bl3 = al3;
          var bl4 = al4;
          var bl5 = al5;
          var bl6 = al6;
          var bl7 = al7; // add

          h = ah7;
          l = al7;
          a = l & 0xffff;
          b = l >>> 16;
          c = h & 0xffff;
          d = h >>> 16; // Sigma1

          h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
          l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
          a += l & 0xffff;
          b += l >>> 16;
          c += h & 0xffff;
          d += h >>> 16; // Ch

          h = ah4 & ah5 ^ ~ah4 & ah6;
          l = al4 & al5 ^ ~al4 & al6;
          a += l & 0xffff;
          b += l >>> 16;
          c += h & 0xffff;
          d += h >>> 16; // K

          h = K[i * 2];
          l = K[i * 2 + 1];
          a += l & 0xffff;
          b += l >>> 16;
          c += h & 0xffff;
          d += h >>> 16; // w

          h = wh[i % 16];
          l = wl[i % 16];
          a += l & 0xffff;
          b += l >>> 16;
          c += h & 0xffff;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          th = c & 0xffff | d << 16;
          tl = a & 0xffff | b << 16; // add

          h = th;
          l = tl;
          a = l & 0xffff;
          b = l >>> 16;
          c = h & 0xffff;
          d = h >>> 16; // Sigma0

          h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
          l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
          a += l & 0xffff;
          b += l >>> 16;
          c += h & 0xffff;
          d += h >>> 16; // Maj

          h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
          l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
          a += l & 0xffff;
          b += l >>> 16;
          c += h & 0xffff;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          bh7 = c & 0xffff | d << 16;
          bl7 = a & 0xffff | b << 16; // add

          h = bh3;
          l = bl3;
          a = l & 0xffff;
          b = l >>> 16;
          c = h & 0xffff;
          d = h >>> 16;
          h = th;
          l = tl;
          a += l & 0xffff;
          b += l >>> 16;
          c += h & 0xffff;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          bh3 = c & 0xffff | d << 16;
          bl3 = a & 0xffff | b << 16;
          ah1 = bh0;
          ah2 = bh1;
          ah3 = bh2;
          ah4 = bh3;
          ah5 = bh4;
          ah6 = bh5;
          ah7 = bh6;
          ah0 = bh7;
          al1 = bl0;
          al2 = bl1;
          al3 = bl2;
          al4 = bl3;
          al5 = bl4;
          al6 = bl5;
          al7 = bl6;
          al0 = bl7;

          if (i % 16 === 15) {
            for (var j = 0; j < 16; j++) {
              // add
              h = wh[j];
              l = wl[j];
              a = l & 0xffff;
              b = l >>> 16;
              c = h & 0xffff;
              d = h >>> 16;
              h = wh[(j + 9) % 16];
              l = wl[(j + 9) % 16];
              a += l & 0xffff;
              b += l >>> 16;
              c += h & 0xffff;
              d += h >>> 16; // sigma0

              th = wh[(j + 1) % 16];
              tl = wl[(j + 1) % 16];
              h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
              l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
              a += l & 0xffff;
              b += l >>> 16;
              c += h & 0xffff;
              d += h >>> 16; // sigma1

              th = wh[(j + 14) % 16];
              tl = wl[(j + 14) % 16];
              h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
              l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
              a += l & 0xffff;
              b += l >>> 16;
              c += h & 0xffff;
              d += h >>> 16;
              b += a >>> 16;
              c += b >>> 16;
              d += c >>> 16;
              wh[j] = c & 0xffff | d << 16;
              wl[j] = a & 0xffff | b << 16;
            }
          }
        } // add


        h = ah0;
        l = al0;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[0];
        l = hl[0];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[0] = ah0 = c & 0xffff | d << 16;
        hl[0] = al0 = a & 0xffff | b << 16;
        h = ah1;
        l = al1;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[1];
        l = hl[1];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[1] = ah1 = c & 0xffff | d << 16;
        hl[1] = al1 = a & 0xffff | b << 16;
        h = ah2;
        l = al2;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[2];
        l = hl[2];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[2] = ah2 = c & 0xffff | d << 16;
        hl[2] = al2 = a & 0xffff | b << 16;
        h = ah3;
        l = al3;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[3];
        l = hl[3];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[3] = ah3 = c & 0xffff | d << 16;
        hl[3] = al3 = a & 0xffff | b << 16;
        h = ah4;
        l = al4;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[4];
        l = hl[4];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[4] = ah4 = c & 0xffff | d << 16;
        hl[4] = al4 = a & 0xffff | b << 16;
        h = ah5;
        l = al5;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[5];
        l = hl[5];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[5] = ah5 = c & 0xffff | d << 16;
        hl[5] = al5 = a & 0xffff | b << 16;
        h = ah6;
        l = al6;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[6];
        l = hl[6];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[6] = ah6 = c & 0xffff | d << 16;
        hl[6] = al6 = a & 0xffff | b << 16;
        h = ah7;
        l = al7;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[7];
        l = hl[7];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[7] = ah7 = c & 0xffff | d << 16;
        hl[7] = al7 = a & 0xffff | b << 16;
        pos += 128;
        len -= 128;
      }

      return pos;
    }

    function hash(data) {
      var h = new SHA512();
      h.update(data);
      var digest = h.digest();
      h.clean();
      return digest;
    }

    exports.hash = hash; //# sourceMappingURL=sha512.js.map

    /***/
  },

  /***/
  "./node_modules/@stablelib/wipe/lib/wipe.js":
  /*!**************************************************!*\
    !*** ./node_modules/@stablelib/wipe/lib/wipe.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStablelibWipeLibWipeJs(module, exports, __webpack_require__) {
    "use strict"; // Copyright (C) 2016 Dmitry Chestnykh
    // MIT License. See LICENSE file for details.

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    /**
     * Sets all values in the given array to zero and returns it.
     *
     * The fact that it sets bytes to zero can be relied on.
     *
     * There is no guarantee that this function makes data disappear from memory,
     * as runtime implementation can, for example, have copying garbage collector
     * that will make copies of sensitive data before we wipe it. Or that an
     * operating system will write our data to swap or sleep image. Another thing
     * is that an optimizing compiler can remove calls to this function or make it
     * no-op. There's nothing we can do with it, so we just do our best and hope
     * that everything will be okay and good will triumph over evil.
     */

    function wipe(array) {
      // Right now it's similar to array.fill(0). If it turns
      // out that runtimes optimize this call away, maybe
      // we can try something else.
      for (var i = 0; i < array.length; i++) {
        array[i] = 0;
      }

      return array;
    }

    exports.wipe = wipe; //# sourceMappingURL=wipe.js.map

    /***/
  },

  /***/
  "./node_modules/crypto-js/aes.js":
  /*!***************************************!*\
    !*** ./node_modules/crypto-js/aes.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsAesJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./enc-base64 */
        "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(
        /*! ./md5 */
        "./node_modules/crypto-js/md5.js"), __webpack_require__(
        /*! ./evpkdf */
        "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo; // Lookup tables

        var SBOX = [];
        var INV_SBOX = [];
        var SUB_MIX_0 = [];
        var SUB_MIX_1 = [];
        var SUB_MIX_2 = [];
        var SUB_MIX_3 = [];
        var INV_SUB_MIX_0 = [];
        var INV_SUB_MIX_1 = [];
        var INV_SUB_MIX_2 = [];
        var INV_SUB_MIX_3 = []; // Compute lookup tables

        (function () {
          // Compute double table
          var d = [];

          for (var i = 0; i < 256; i++) {
            if (i < 128) {
              d[i] = i << 1;
            } else {
              d[i] = i << 1 ^ 0x11b;
            }
          } // Walk GF(2^8)


          var x = 0;
          var xi = 0;

          for (var i = 0; i < 256; i++) {
            // Compute sbox
            var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
            sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
            SBOX[x] = sx;
            INV_SBOX[sx] = x; // Compute multiplication

            var x2 = d[x];
            var x4 = d[x2];
            var x8 = d[x4]; // Compute sub bytes, mix columns tables

            var t = d[sx] * 0x101 ^ sx * 0x1010100;
            SUB_MIX_0[x] = t << 24 | t >>> 8;
            SUB_MIX_1[x] = t << 16 | t >>> 16;
            SUB_MIX_2[x] = t << 8 | t >>> 24;
            SUB_MIX_3[x] = t; // Compute inv sub bytes, inv mix columns tables

            var t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
            INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
            INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
            INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
            INV_SUB_MIX_3[sx] = t; // Compute next counter

            if (!x) {
              x = xi = 1;
            } else {
              x = x2 ^ d[d[d[x8 ^ x2]]];
              xi ^= d[d[xi]];
            }
          }
        })(); // Precomputed Rcon lookup


        var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
        /**
         * AES block cipher algorithm.
         */

        var AES = C_algo.AES = BlockCipher.extend({
          _doReset: function _doReset() {
            // Skip reset of nRounds has been set before and key did not change
            if (this._nRounds && this._keyPriorReset === this._key) {
              return;
            } // Shortcuts


            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4; // Compute number of rounds

            var nRounds = this._nRounds = keySize + 6; // Compute number of key schedule rows

            var ksRows = (nRounds + 1) * 4; // Compute key schedule

            var keySchedule = this._keySchedule = [];

            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
              if (ksRow < keySize) {
                keySchedule[ksRow] = keyWords[ksRow];
              } else {
                var t = keySchedule[ksRow - 1];

                if (!(ksRow % keySize)) {
                  // Rot word
                  t = t << 8 | t >>> 24; // Sub word

                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff]; // Mix Rcon

                  t ^= RCON[ksRow / keySize | 0] << 24;
                } else if (keySize > 6 && ksRow % keySize == 4) {
                  // Sub word
                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];
                }

                keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
              }
            } // Compute inv key schedule


            var invKeySchedule = this._invKeySchedule = [];

            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
              var ksRow = ksRows - invKsRow;

              if (invKsRow % 4) {
                var t = keySchedule[ksRow];
              } else {
                var t = keySchedule[ksRow - 4];
              }

              if (invKsRow < 4 || ksRow <= 4) {
                invKeySchedule[invKsRow] = t;
              } else {
                invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 0xff]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
              }
            }
          },
          encryptBlock: function encryptBlock(M, offset) {
            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
          },
          decryptBlock: function decryptBlock(M, offset) {
            // Swap 2nd and 4th rows
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;

            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX); // Inv swap 2nd and 4th rows


            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
          },
          _doCryptBlock: function _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
            // Shortcut
            var nRounds = this._nRounds; // Get input, add round key

            var s0 = M[offset] ^ keySchedule[0];
            var s1 = M[offset + 1] ^ keySchedule[1];
            var s2 = M[offset + 2] ^ keySchedule[2];
            var s3 = M[offset + 3] ^ keySchedule[3]; // Key schedule row counter

            var ksRow = 4; // Rounds

            for (var round = 1; round < nRounds; round++) {
              // Shift rows, sub bytes, mix columns, add round key
              var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
              var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
              var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
              var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++]; // Update state

              s0 = t0;
              s1 = t1;
              s2 = t2;
              s3 = t3;
            } // Shift rows, sub bytes, add round key


            var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
            var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
            var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
            var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++]; // Set output

            M[offset] = t0;
            M[offset + 1] = t1;
            M[offset + 2] = t2;
            M[offset + 3] = t3;
          },
          keySize: 256 / 32
        });
        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
         */

        C.AES = BlockCipher._createHelper(AES);
      })();

      return CryptoJS.AES;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/cipher-core.js":
  /*!***********************************************!*\
    !*** ./node_modules/crypto-js/cipher-core.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsCipherCoreJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"));
      } else {}
    })(this, function (CryptoJS) {
      /**
       * Cipher core components.
       */
      CryptoJS.lib.Cipher || function (undefined) {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var Base64 = C_enc.Base64;
        var C_algo = C.algo;
        var EvpKDF = C_algo.EvpKDF;
        /**
         * Abstract base cipher template.
         *
         * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
         * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
         * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
         * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
         */

        var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: Base.extend(),

          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function createEncryptor(key, cfg) {
            return this.create(this._ENC_XFORM_MODE, key, cfg);
          },

          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function createDecryptor(key, cfg) {
            return this.create(this._DEC_XFORM_MODE, key, cfg);
          },

          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function init(xformMode, key, cfg) {
            // Apply config defaults
            this.cfg = this.cfg.extend(cfg); // Store transform mode and key

            this._xformMode = xformMode;
            this._key = key; // Set initial values

            this.reset();
          },

          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function reset() {
            // Reset data buffer
            BufferedBlockAlgorithm.reset.call(this); // Perform concrete-cipher logic

            this._doReset();
          },

          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function process(dataUpdate) {
            // Append
            this._append(dataUpdate); // Process available blocks


            return this._process();
          },

          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function finalize(dataUpdate) {
            // Final data update
            if (dataUpdate) {
              this._append(dataUpdate);
            } // Perform concrete-cipher logic


            var finalProcessedData = this._doFinalize();

            return finalProcessedData;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,

          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: function () {
            function selectCipherStrategy(key) {
              if (typeof key == 'string') {
                return PasswordBasedCipher;
              } else {
                return SerializableCipher;
              }
            }

            return function (cipher) {
              return {
                encrypt: function encrypt(message, key, cfg) {
                  return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                },
                decrypt: function decrypt(ciphertext, key, cfg) {
                  return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                }
              };
            };
          }()
        });
        /**
         * Abstract base stream cipher template.
         *
         * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
         */

        var StreamCipher = C_lib.StreamCipher = Cipher.extend({
          _doFinalize: function _doFinalize() {
            // Process partial blocks
            var finalProcessedBlocks = this._process(!!'flush');

            return finalProcessedBlocks;
          },
          blockSize: 1
        });
        /**
         * Mode namespace.
         */

        var C_mode = C.mode = {};
        /**
         * Abstract base block cipher mode template.
         */

        var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function createEncryptor(cipher, iv) {
            return this.Encryptor.create(cipher, iv);
          },

          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function createDecryptor(cipher, iv) {
            return this.Decryptor.create(cipher, iv);
          },

          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function init(cipher, iv) {
            this._cipher = cipher;
            this._iv = iv;
          }
        });
        /**
         * Cipher Block Chaining mode.
         */

        var CBC = C_mode.CBC = function () {
          /**
           * Abstract base CBC mode.
           */
          var CBC = BlockCipherMode.extend();
          /**
           * CBC encryptor.
           */

          CBC.Encryptor = CBC.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function processBlock(words, offset) {
              // Shortcuts
              var cipher = this._cipher;
              var blockSize = cipher.blockSize; // XOR and encrypt

              xorBlock.call(this, words, offset, blockSize);
              cipher.encryptBlock(words, offset); // Remember this block to use with next block

              this._prevBlock = words.slice(offset, offset + blockSize);
            }
          });
          /**
           * CBC decryptor.
           */

          CBC.Decryptor = CBC.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function processBlock(words, offset) {
              // Shortcuts
              var cipher = this._cipher;
              var blockSize = cipher.blockSize; // Remember this block to use with next block

              var thisBlock = words.slice(offset, offset + blockSize); // Decrypt and XOR

              cipher.decryptBlock(words, offset);
              xorBlock.call(this, words, offset, blockSize); // This block becomes the previous block

              this._prevBlock = thisBlock;
            }
          });

          function xorBlock(words, offset, blockSize) {
            // Shortcut
            var iv = this._iv; // Choose mixing block

            if (iv) {
              var block = iv; // Remove IV for subsequent blocks

              this._iv = undefined;
            } else {
              var block = this._prevBlock;
            } // XOR blocks


            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= block[i];
            }
          }

          return CBC;
        }();
        /**
         * Padding namespace.
         */


        var C_pad = C.pad = {};
        /**
         * PKCS #5/7 padding strategy.
         */

        var Pkcs7 = C_pad.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function pad(data, blockSize) {
            // Shortcut
            var blockSizeBytes = blockSize * 4; // Count padding bytes

            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes; // Create padding word

            var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes; // Create padding

            var paddingWords = [];

            for (var i = 0; i < nPaddingBytes; i += 4) {
              paddingWords.push(paddingWord);
            }

            var padding = WordArray.create(paddingWords, nPaddingBytes); // Add padding

            data.concat(padding);
          },

          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function unpad(data) {
            // Get number of padding bytes from last byte
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff; // Remove padding

            data.sigBytes -= nPaddingBytes;
          }
        };
        /**
         * Abstract base block cipher template.
         *
         * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
         */

        var BlockCipher = C_lib.BlockCipher = Cipher.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: Cipher.cfg.extend({
            mode: CBC,
            padding: Pkcs7
          }),
          reset: function reset() {
            // Reset cipher
            Cipher.reset.call(this); // Shortcuts

            var cfg = this.cfg;
            var iv = cfg.iv;
            var mode = cfg.mode; // Reset block mode

            if (this._xformMode == this._ENC_XFORM_MODE) {
              var modeCreator = mode.createEncryptor;
            } else
              /* if (this._xformMode == this._DEC_XFORM_MODE) */
              {
                var modeCreator = mode.createDecryptor; // Keep at least one block in the buffer for unpadding

                this._minBufferSize = 1;
              }

            this._mode = modeCreator.call(mode, this, iv && iv.words);
          },
          _doProcessBlock: function _doProcessBlock(words, offset) {
            this._mode.processBlock(words, offset);
          },
          _doFinalize: function _doFinalize() {
            // Shortcut
            var padding = this.cfg.padding; // Finalize

            if (this._xformMode == this._ENC_XFORM_MODE) {
              // Pad data
              padding.pad(this._data, this.blockSize); // Process final blocks

              var finalProcessedBlocks = this._process(!!'flush');
            } else
              /* if (this._xformMode == this._DEC_XFORM_MODE) */
              {
                // Process final blocks
                var finalProcessedBlocks = this._process(!!'flush'); // Unpad data


                padding.unpad(finalProcessedBlocks);
              }

            return finalProcessedBlocks;
          },
          blockSize: 128 / 32
        });
        /**
         * A collection of cipher parameters.
         *
         * @property {WordArray} ciphertext The raw ciphertext.
         * @property {WordArray} key The key to this ciphertext.
         * @property {WordArray} iv The IV used in the ciphering operation.
         * @property {WordArray} salt The salt used with a key derivation function.
         * @property {Cipher} algorithm The cipher algorithm.
         * @property {Mode} mode The block mode used in the ciphering operation.
         * @property {Padding} padding The padding scheme used in the ciphering operation.
         * @property {number} blockSize The block size of the cipher.
         * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
         */

        var CipherParams = C_lib.CipherParams = Base.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function init(cipherParams) {
            this.mixIn(cipherParams);
          },

          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function toString(formatter) {
            return (formatter || this.formatter).stringify(this);
          }
        });
        /**
         * Format namespace.
         */

        var C_format = C.format = {};
        /**
         * OpenSSL formatting strategy.
         */

        var OpenSSLFormatter = C_format.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function stringify(cipherParams) {
            // Shortcuts
            var ciphertext = cipherParams.ciphertext;
            var salt = cipherParams.salt; // Format

            if (salt) {
              var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
            } else {
              var wordArray = ciphertext;
            }

            return wordArray.toString(Base64);
          },

          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function parse(openSSLStr) {
            // Parse base64
            var ciphertext = Base64.parse(openSSLStr); // Shortcut

            var ciphertextWords = ciphertext.words; // Test for salt

            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
              // Extract salt
              var salt = WordArray.create(ciphertextWords.slice(2, 4)); // Remove salt from ciphertext

              ciphertextWords.splice(0, 4);
              ciphertext.sigBytes -= 16;
            }

            return CipherParams.create({
              ciphertext: ciphertext,
              salt: salt
            });
          }
        };
        /**
         * A cipher wrapper that returns ciphertext as a serializable cipher params object.
         */

        var SerializableCipher = C_lib.SerializableCipher = Base.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: Base.extend({
            format: OpenSSLFormatter
          }),

          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function encrypt(cipher, message, key, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg); // Encrypt

            var encryptor = cipher.createEncryptor(key, cfg);
            var ciphertext = encryptor.finalize(message); // Shortcut

            var cipherCfg = encryptor.cfg; // Create and return serializable cipher params

            return CipherParams.create({
              ciphertext: ciphertext,
              key: key,
              iv: cipherCfg.iv,
              algorithm: cipher,
              mode: cipherCfg.mode,
              padding: cipherCfg.padding,
              blockSize: cipher.blockSize,
              formatter: cfg.format
            });
          },

          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function decrypt(cipher, ciphertext, key, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg); // Convert string to CipherParams

            ciphertext = this._parse(ciphertext, cfg.format); // Decrypt

            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
            return plaintext;
          },

          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function _parse(ciphertext, format) {
            if (typeof ciphertext == 'string') {
              return format.parse(ciphertext, this);
            } else {
              return ciphertext;
            }
          }
        });
        /**
         * Key derivation function namespace.
         */

        var C_kdf = C.kdf = {};
        /**
         * OpenSSL key derivation function.
         */

        var OpenSSLKdf = C_kdf.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function execute(password, keySize, ivSize, salt) {
            // Generate random salt
            if (!salt) {
              salt = WordArray.random(64 / 8);
            } // Derive key and IV


            var key = EvpKDF.create({
              keySize: keySize + ivSize
            }).compute(password, salt); // Separate key and IV

            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
            key.sigBytes = keySize * 4; // Return params

            return CipherParams.create({
              key: key,
              iv: iv,
              salt: salt
            });
          }
        };
        /**
         * A serializable cipher wrapper that derives the key from a password,
         * and returns ciphertext as a serializable cipher params object.
         */

        var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: SerializableCipher.cfg.extend({
            kdf: OpenSSLKdf
          }),

          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function encrypt(cipher, message, password, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg); // Derive key and other params

            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize); // Add IV to config

            cfg.iv = derivedParams.iv; // Encrypt

            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg); // Mix in derived params

            ciphertext.mixIn(derivedParams);
            return ciphertext;
          },

          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function decrypt(cipher, ciphertext, password, cfg) {
            // Apply config defaults
            cfg = this.cfg.extend(cfg); // Convert string to CipherParams

            ciphertext = this._parse(ciphertext, cfg.format); // Derive key and other params

            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt); // Add IV to config

            cfg.iv = derivedParams.iv; // Decrypt

            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
            return plaintext;
          }
        });
      }();
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/core.js":
  /*!****************************************!*\
    !*** ./node_modules/crypto-js/core.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsCoreJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory) {
      if (true) {
        // CommonJS
        module.exports = exports = factory();
      } else {}
    })(this, function () {
      /**
       * CryptoJS core components.
       */
      var CryptoJS = CryptoJS || function (Math, undefined) {
        /*
         * Local polyfil of Object.create
         */
        var create = Object.create || function () {
          function F() {}

          ;
          return function (obj) {
            var subtype;
            F.prototype = obj;
            subtype = new F();
            F.prototype = null;
            return subtype;
          };
        }();
        /**
         * CryptoJS namespace.
         */


        var C = {};
        /**
         * Library namespace.
         */

        var C_lib = C.lib = {};
        /**
         * Base object for prototypal inheritance.
         */

        var Base = C_lib.Base = function () {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function extend(overrides) {
              // Spawn
              var subtype = create(this); // Augment

              if (overrides) {
                subtype.mixIn(overrides);
              } // Create default initializer


              if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
                subtype.init = function () {
                  subtype.$super.init.apply(this, arguments);
                };
              } // Initializer's prototype is the subtype object


              subtype.init.prototype = subtype; // Reference supertype

              subtype.$super = this;
              return subtype;
            },

            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function create() {
              var instance = this.extend();
              instance.init.apply(instance, arguments);
              return instance;
            },

            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function init() {},

            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function mixIn(properties) {
              for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                  this[propertyName] = properties[propertyName];
                }
              } // IE won't copy toString using the loop above


              if (properties.hasOwnProperty('toString')) {
                this.toString = properties.toString;
              }
            },

            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function clone() {
              return this.init.prototype.extend(this);
            }
          };
        }();
        /**
         * An array of 32-bit words.
         *
         * @property {Array} words The array of 32-bit words.
         * @property {number} sigBytes The number of significant bytes in this word array.
         */


        var WordArray = C_lib.WordArray = Base.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function init(words, sigBytes) {
            words = this.words = words || [];

            if (sigBytes != undefined) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 4;
            }
          },

          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function toString(encoder) {
            return (encoder || Hex).stringify(this);
          },

          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function concat(wordArray) {
            // Shortcuts
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes; // Clamp excess bits

            this.clamp(); // Concat

            if (thisSigBytes % 4) {
              // Copy one byte at a time
              for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              }
            } else {
              // Copy one word at a time
              for (var i = 0; i < thatSigBytes; i += 4) {
                thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
              }
            }

            this.sigBytes += thatSigBytes; // Chainable

            return this;
          },

          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function clamp() {
            // Shortcuts
            var words = this.words;
            var sigBytes = this.sigBytes; // Clamp

            words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
            words.length = Math.ceil(sigBytes / 4);
          },

          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function clone() {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);
            return clone;
          },

          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function random(nBytes) {
            var words = [];

            var r = function r(m_w) {
              var m_w = m_w;
              var m_z = 0x3ade68b1;
              var mask = 0xffffffff;
              return function () {
                m_z = 0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10) & mask;
                m_w = 0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10) & mask;
                var result = (m_z << 0x10) + m_w & mask;
                result /= 0x100000000;
                result += 0.5;
                return result * (Math.random() > .5 ? 1 : -1);
              };
            };

            for (var i = 0, rcache; i < nBytes; i += 4) {
              var _r = r((rcache || Math.random()) * 0x100000000);

              rcache = _r() * 0x3ade67b7;
              words.push(_r() * 0x100000000 | 0);
            }

            return new WordArray.init(words, nBytes);
          }
        });
        /**
         * Encoder namespace.
         */

        var C_enc = C.enc = {};
        /**
         * Hex encoding strategy.
         */

        var Hex = C_enc.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function stringify(wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes; // Convert

            var hexChars = [];

            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
              hexChars.push((bite >>> 4).toString(16));
              hexChars.push((bite & 0x0f).toString(16));
            }

            return hexChars.join('');
          },

          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function parse(hexStr) {
            // Shortcut
            var hexStrLength = hexStr.length; // Convert

            var words = [];

            for (var i = 0; i < hexStrLength; i += 2) {
              words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
            }

            return new WordArray.init(words, hexStrLength / 2);
          }
        };
        /**
         * Latin1 encoding strategy.
         */

        var Latin1 = C_enc.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function stringify(wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes; // Convert

            var latin1Chars = [];

            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
              latin1Chars.push(String.fromCharCode(bite));
            }

            return latin1Chars.join('');
          },

          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function parse(latin1Str) {
            // Shortcut
            var latin1StrLength = latin1Str.length; // Convert

            var words = [];

            for (var i = 0; i < latin1StrLength; i++) {
              words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
            }

            return new WordArray.init(words, latin1StrLength);
          }
        };
        /**
         * UTF-8 encoding strategy.
         */

        var Utf8 = C_enc.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function stringify(wordArray) {
            try {
              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
              throw new Error('Malformed UTF-8 data');
            }
          },

          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function parse(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
          }
        };
        /**
         * Abstract buffered block algorithm template.
         *
         * The property blockSize must be implemented in a concrete subtype.
         *
         * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
         */

        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function reset() {
            // Initial values
            this._data = new WordArray.init();
            this._nDataBytes = 0;
          },

          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function _append(data) {
            // Convert string to WordArray, else assume WordArray already
            if (typeof data == 'string') {
              data = Utf8.parse(data);
            } // Append


            this._data.concat(data);

            this._nDataBytes += data.sigBytes;
          },

          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function _process(doFlush) {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4; // Count blocks ready

            var nBlocksReady = dataSigBytes / blockSizeBytes;

            if (doFlush) {
              // Round up to include partial blocks
              nBlocksReady = Math.ceil(nBlocksReady);
            } else {
              // Round down to include only full blocks,
              // less the number of blocks that must remain in the buffer
              nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
            } // Count words ready


            var nWordsReady = nBlocksReady * blockSize; // Count bytes ready

            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes); // Process blocks

            if (nWordsReady) {
              for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                // Perform concrete-algorithm logic
                this._doProcessBlock(dataWords, offset);
              } // Remove processed words


              var processedWords = dataWords.splice(0, nWordsReady);
              data.sigBytes -= nBytesReady;
            } // Return processed words


            return new WordArray.init(processedWords, nBytesReady);
          },

          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function clone() {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();
            return clone;
          },
          _minBufferSize: 0
        });
        /**
         * Abstract hasher template.
         *
         * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
         */

        var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           */
          cfg: Base.extend(),

          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function init(cfg) {
            // Apply config defaults
            this.cfg = this.cfg.extend(cfg); // Set initial values

            this.reset();
          },

          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function reset() {
            // Reset data buffer
            BufferedBlockAlgorithm.reset.call(this); // Perform concrete-hasher logic

            this._doReset();
          },

          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function update(messageUpdate) {
            // Append
            this._append(messageUpdate); // Update the hash


            this._process(); // Chainable


            return this;
          },

          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function finalize(messageUpdate) {
            // Final message update
            if (messageUpdate) {
              this._append(messageUpdate);
            } // Perform concrete-hasher logic


            var hash = this._doFinalize();

            return hash;
          },
          blockSize: 512 / 32,

          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function _createHelper(hasher) {
            return function (message, cfg) {
              return new hasher.init(cfg).finalize(message);
            };
          },

          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function _createHmacHelper(hasher) {
            return function (message, key) {
              return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
          }
        });
        /**
         * Algorithm namespace.
         */

        var C_algo = C.algo = {};
        return C;
      }(Math);

      return CryptoJS;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/enc-base64.js":
  /*!**********************************************!*\
    !*** ./node_modules/crypto-js/enc-base64.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsEncBase64Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        /**
         * Base64 encoding strategy.
         */

        var Base64 = C_enc.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function stringify(wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map; // Clamp excess bits

            wordArray.clamp(); // Convert

            var base64Chars = [];

            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;

              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
              }
            } // Add padding


            var paddingChar = map.charAt(64);

            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }

            return base64Chars.join('');
          },

          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function parse(base64Str) {
            // Shortcuts
            var base64StrLength = base64Str.length;
            var map = this._map;
            var reverseMap = this._reverseMap;

            if (!reverseMap) {
              reverseMap = this._reverseMap = [];

              for (var j = 0; j < map.length; j++) {
                reverseMap[map.charCodeAt(j)] = j;
              }
            } // Ignore padding


            var paddingChar = map.charAt(64);

            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);

              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            } // Convert


            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
        };

        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;

          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              words[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }

          return WordArray.create(words, nBytes);
        }
      })();

      return CryptoJS.enc.Base64;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/enc-utf16.js":
  /*!*********************************************!*\
    !*** ./node_modules/crypto-js/enc-utf16.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsEncUtf16Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        /**
         * UTF-16 BE encoding strategy.
         */

        var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function stringify(wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes; // Convert

            var utf16Chars = [];

            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff;
              utf16Chars.push(String.fromCharCode(codePoint));
            }

            return utf16Chars.join('');
          },

          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function parse(utf16Str) {
            // Shortcut
            var utf16StrLength = utf16Str.length; // Convert

            var words = [];

            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
            }

            return WordArray.create(words, utf16StrLength * 2);
          }
        };
        /**
         * UTF-16 LE encoding strategy.
         */

        C_enc.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function stringify(wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes; // Convert

            var utf16Chars = [];

            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff);
              utf16Chars.push(String.fromCharCode(codePoint));
            }

            return utf16Chars.join('');
          },

          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function parse(utf16Str) {
            // Shortcut
            var utf16StrLength = utf16Str.length; // Convert

            var words = [];

            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
            }

            return WordArray.create(words, utf16StrLength * 2);
          }
        };

        function swapEndian(word) {
          return word << 8 & 0xff00ff00 | word >>> 8 & 0x00ff00ff;
        }
      })();

      return CryptoJS.enc.Utf16;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/evpkdf.js":
  /*!******************************************!*\
    !*** ./node_modules/crypto-js/evpkdf.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsEvpkdfJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./sha1 */
        "./node_modules/crypto-js/sha1.js"), __webpack_require__(
        /*! ./hmac */
        "./node_modules/crypto-js/hmac.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var MD5 = C_algo.MD5;
        /**
         * This key derivation function is meant to conform with EVP_BytesToKey.
         * www.openssl.org/docs/crypto/EVP_BytesToKey.html
         */

        var EvpKDF = C_algo.EvpKDF = Base.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: Base.extend({
            keySize: 128 / 32,
            hasher: MD5,
            iterations: 1
          }),

          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function init(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },

          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function compute(password, salt) {
            // Shortcut
            var cfg = this.cfg; // Init hasher

            var hasher = cfg.hasher.create(); // Initial values

            var derivedKey = WordArray.create(); // Shortcuts

            var derivedKeyWords = derivedKey.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations; // Generate key

            while (derivedKeyWords.length < keySize) {
              if (block) {
                hasher.update(block);
              }

              var block = hasher.update(password).finalize(salt);
              hasher.reset(); // Iterations

              for (var i = 1; i < iterations; i++) {
                block = hasher.finalize(block);
                hasher.reset();
              }

              derivedKey.concat(block);
            }

            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        /**
         * Derives a key from a password.
         *
         * @param {WordArray|string} password The password.
         * @param {WordArray|string} salt A salt.
         * @param {Object} cfg (Optional) The configuration options to use for this computation.
         *
         * @return {WordArray} The derived key.
         *
         * @static
         *
         * @example
         *
         *     var key = CryptoJS.EvpKDF(password, salt);
         *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
         *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
         */

        C.EvpKDF = function (password, salt, cfg) {
          return EvpKDF.create(cfg).compute(password, salt);
        };
      })();

      return CryptoJS.EvpKDF;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/format-hex.js":
  /*!**********************************************!*\
    !*** ./node_modules/crypto-js/format-hex.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsFormatHexJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function (undefined) {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var CipherParams = C_lib.CipherParams;
        var C_enc = C.enc;
        var Hex = C_enc.Hex;
        var C_format = C.format;
        var HexFormatter = C_format.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function stringify(cipherParams) {
            return cipherParams.ciphertext.toString(Hex);
          },

          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function parse(input) {
            var ciphertext = Hex.parse(input);
            return CipherParams.create({
              ciphertext: ciphertext
            });
          }
        };
      })();

      return CryptoJS.format.Hex;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/hmac.js":
  /*!****************************************!*\
    !*** ./node_modules/crypto-js/hmac.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsHmacJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var C_algo = C.algo;
        /**
         * HMAC algorithm.
         */

        var HMAC = C_algo.HMAC = Base.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function init(hasher, key) {
            // Init hasher
            hasher = this._hasher = new hasher.init(); // Convert string to WordArray, else assume WordArray already

            if (typeof key == 'string') {
              key = Utf8.parse(key);
            } // Shortcuts


            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = hasherBlockSize * 4; // Allow arbitrary length keys

            if (key.sigBytes > hasherBlockSizeBytes) {
              key = hasher.finalize(key);
            } // Clamp excess bits


            key.clamp(); // Clone key for inner and outer pads

            var oKey = this._oKey = key.clone();
            var iKey = this._iKey = key.clone(); // Shortcuts

            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words; // XOR keys with pad constants

            for (var i = 0; i < hasherBlockSize; i++) {
              oKeyWords[i] ^= 0x5c5c5c5c;
              iKeyWords[i] ^= 0x36363636;
            }

            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes; // Set initial values

            this.reset();
          },

          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function reset() {
            // Shortcut
            var hasher = this._hasher; // Reset

            hasher.reset();
            hasher.update(this._iKey);
          },

          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function update(messageUpdate) {
            this._hasher.update(messageUpdate); // Chainable


            return this;
          },

          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function finalize(messageUpdate) {
            // Shortcut
            var hasher = this._hasher; // Compute HMAC

            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
            return hmac;
          }
        });
      })();
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/index.js":
  /*!*****************************************!*\
    !*** ./node_modules/crypto-js/index.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsIndexJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./x64-core */
        "./node_modules/crypto-js/x64-core.js"), __webpack_require__(
        /*! ./lib-typedarrays */
        "./node_modules/crypto-js/lib-typedarrays.js"), __webpack_require__(
        /*! ./enc-utf16 */
        "./node_modules/crypto-js/enc-utf16.js"), __webpack_require__(
        /*! ./enc-base64 */
        "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(
        /*! ./md5 */
        "./node_modules/crypto-js/md5.js"), __webpack_require__(
        /*! ./sha1 */
        "./node_modules/crypto-js/sha1.js"), __webpack_require__(
        /*! ./sha256 */
        "./node_modules/crypto-js/sha256.js"), __webpack_require__(
        /*! ./sha224 */
        "./node_modules/crypto-js/sha224.js"), __webpack_require__(
        /*! ./sha512 */
        "./node_modules/crypto-js/sha512.js"), __webpack_require__(
        /*! ./sha384 */
        "./node_modules/crypto-js/sha384.js"), __webpack_require__(
        /*! ./sha3 */
        "./node_modules/crypto-js/sha3.js"), __webpack_require__(
        /*! ./ripemd160 */
        "./node_modules/crypto-js/ripemd160.js"), __webpack_require__(
        /*! ./hmac */
        "./node_modules/crypto-js/hmac.js"), __webpack_require__(
        /*! ./pbkdf2 */
        "./node_modules/crypto-js/pbkdf2.js"), __webpack_require__(
        /*! ./evpkdf */
        "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"), __webpack_require__(
        /*! ./mode-cfb */
        "./node_modules/crypto-js/mode-cfb.js"), __webpack_require__(
        /*! ./mode-ctr */
        "./node_modules/crypto-js/mode-ctr.js"), __webpack_require__(
        /*! ./mode-ctr-gladman */
        "./node_modules/crypto-js/mode-ctr-gladman.js"), __webpack_require__(
        /*! ./mode-ofb */
        "./node_modules/crypto-js/mode-ofb.js"), __webpack_require__(
        /*! ./mode-ecb */
        "./node_modules/crypto-js/mode-ecb.js"), __webpack_require__(
        /*! ./pad-ansix923 */
        "./node_modules/crypto-js/pad-ansix923.js"), __webpack_require__(
        /*! ./pad-iso10126 */
        "./node_modules/crypto-js/pad-iso10126.js"), __webpack_require__(
        /*! ./pad-iso97971 */
        "./node_modules/crypto-js/pad-iso97971.js"), __webpack_require__(
        /*! ./pad-zeropadding */
        "./node_modules/crypto-js/pad-zeropadding.js"), __webpack_require__(
        /*! ./pad-nopadding */
        "./node_modules/crypto-js/pad-nopadding.js"), __webpack_require__(
        /*! ./format-hex */
        "./node_modules/crypto-js/format-hex.js"), __webpack_require__(
        /*! ./aes */
        "./node_modules/crypto-js/aes.js"), __webpack_require__(
        /*! ./tripledes */
        "./node_modules/crypto-js/tripledes.js"), __webpack_require__(
        /*! ./rc4 */
        "./node_modules/crypto-js/rc4.js"), __webpack_require__(
        /*! ./rabbit */
        "./node_modules/crypto-js/rabbit.js"), __webpack_require__(
        /*! ./rabbit-legacy */
        "./node_modules/crypto-js/rabbit-legacy.js"));
      } else {}
    })(this, function (CryptoJS) {
      return CryptoJS;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/lib-typedarrays.js":
  /*!***************************************************!*\
    !*** ./node_modules/crypto-js/lib-typedarrays.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsLibTypedarraysJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Check if typed arrays are supported
        if (typeof ArrayBuffer != 'function') {
          return;
        } // Shortcuts


        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray; // Reference original init

        var superInit = WordArray.init; // Augment WordArray.init to handle typed arrays

        var subInit = WordArray.init = function (typedArray) {
          // Convert buffers to uint8
          if (typedArray instanceof ArrayBuffer) {
            typedArray = new Uint8Array(typedArray);
          } // Convert other array views to uint8


          if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
          } // Handle Uint8Array


          if (typedArray instanceof Uint8Array) {
            // Shortcut
            var typedArrayByteLength = typedArray.byteLength; // Extract bytes

            var words = [];

            for (var i = 0; i < typedArrayByteLength; i++) {
              words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
            } // Initialize this word array


            superInit.call(this, words, typedArrayByteLength);
          } else {
            // Else call normal init
            superInit.apply(this, arguments);
          }
        };

        subInit.prototype = WordArray;
      })();

      return CryptoJS.lib.WordArray;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/md5.js":
  /*!***************************************!*\
    !*** ./node_modules/crypto-js/md5.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsMd5Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function (Math) {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo; // Constants table

        var T = []; // Compute constants

        (function () {
          for (var i = 0; i < 64; i++) {
            T[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;
          }
        })();
        /**
         * MD5 hash algorithm.
         */


        var MD5 = C_algo.MD5 = Hasher.extend({
          _doReset: function _doReset() {
            this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            // Swap endian
            for (var i = 0; i < 16; i++) {
              // Shortcuts
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
            } // Shortcuts


            var H = this._hash.words;
            var M_offset_0 = M[offset + 0];
            var M_offset_1 = M[offset + 1];
            var M_offset_2 = M[offset + 2];
            var M_offset_3 = M[offset + 3];
            var M_offset_4 = M[offset + 4];
            var M_offset_5 = M[offset + 5];
            var M_offset_6 = M[offset + 6];
            var M_offset_7 = M[offset + 7];
            var M_offset_8 = M[offset + 8];
            var M_offset_9 = M[offset + 9];
            var M_offset_10 = M[offset + 10];
            var M_offset_11 = M[offset + 11];
            var M_offset_12 = M[offset + 12];
            var M_offset_13 = M[offset + 13];
            var M_offset_14 = M[offset + 14];
            var M_offset_15 = M[offset + 15]; // Working varialbes

            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3]; // Computation

            a = FF(a, b, c, d, M_offset_0, 7, T[0]);
            d = FF(d, a, b, c, M_offset_1, 12, T[1]);
            c = FF(c, d, a, b, M_offset_2, 17, T[2]);
            b = FF(b, c, d, a, M_offset_3, 22, T[3]);
            a = FF(a, b, c, d, M_offset_4, 7, T[4]);
            d = FF(d, a, b, c, M_offset_5, 12, T[5]);
            c = FF(c, d, a, b, M_offset_6, 17, T[6]);
            b = FF(b, c, d, a, M_offset_7, 22, T[7]);
            a = FF(a, b, c, d, M_offset_8, 7, T[8]);
            d = FF(d, a, b, c, M_offset_9, 12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7, T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
            a = GG(a, b, c, d, M_offset_1, 5, T[16]);
            d = GG(d, a, b, c, M_offset_6, 9, T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0, 20, T[19]);
            a = GG(a, b, c, d, M_offset_5, 5, T[20]);
            d = GG(d, a, b, c, M_offset_10, 9, T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4, 20, T[23]);
            a = GG(a, b, c, d, M_offset_9, 5, T[24]);
            d = GG(d, a, b, c, M_offset_14, 9, T[25]);
            c = GG(c, d, a, b, M_offset_3, 14, T[26]);
            b = GG(b, c, d, a, M_offset_8, 20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5, T[28]);
            d = GG(d, a, b, c, M_offset_2, 9, T[29]);
            c = GG(c, d, a, b, M_offset_7, 14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
            a = HH(a, b, c, d, M_offset_5, 4, T[32]);
            d = HH(d, a, b, c, M_offset_8, 11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1, 4, T[36]);
            d = HH(d, a, b, c, M_offset_4, 11, T[37]);
            c = HH(c, d, a, b, M_offset_7, 16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4, T[40]);
            d = HH(d, a, b, c, M_offset_0, 11, T[41]);
            c = HH(c, d, a, b, M_offset_3, 16, T[42]);
            b = HH(b, c, d, a, M_offset_6, 23, T[43]);
            a = HH(a, b, c, d, M_offset_9, 4, T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2, 23, T[47]);
            a = II(a, b, c, d, M_offset_0, 6, T[48]);
            d = II(d, a, b, c, M_offset_7, 10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5, 21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6, T[52]);
            d = II(d, a, b, c, M_offset_3, 10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1, 21, T[55]);
            a = II(a, b, c, d, M_offset_8, 6, T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6, 15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4, 6, T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2, 15, T[62]);
            b = II(b, c, d, a, M_offset_9, 21, T[63]); // Intermediate hash value

            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
          },
          _doFinalize: function _doFinalize() {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8; // Add padding

            dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
            var nBitsTotalL = nBitsTotal;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;
            data.sigBytes = (dataWords.length + 1) * 4; // Hash final blocks

            this._process(); // Shortcuts


            var hash = this._hash;
            var H = hash.words; // Swap endian

            for (var i = 0; i < 4; i++) {
              // Shortcut
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
            } // Return final computed hash


            return hash;
          },
          clone: function clone() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });

        function FF(a, b, c, d, x, s, t) {
          var n = a + (b & c | ~b & d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }

        function GG(a, b, c, d, x, s, t) {
          var n = a + (b & d | c & ~d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }

        function HH(a, b, c, d, x, s, t) {
          var n = a + (b ^ c ^ d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }

        function II(a, b, c, d, x, s, t) {
          var n = a + (c ^ (b | ~d)) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         *
         * @return {WordArray} The hash.
         *
         * @static
         *
         * @example
         *
         *     var hash = CryptoJS.MD5('message');
         *     var hash = CryptoJS.MD5(wordArray);
         */


        C.MD5 = Hasher._createHelper(MD5);
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         * @param {WordArray|string} key The secret key.
         *
         * @return {WordArray} The HMAC.
         *
         * @static
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacMD5(message, key);
         */

        C.HmacMD5 = Hasher._createHmacHelper(MD5);
      })(Math);

      return CryptoJS.MD5;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/mode-cfb.js":
  /*!********************************************!*\
    !*** ./node_modules/crypto-js/mode-cfb.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsModeCfbJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      /**
       * Cipher Feedback block mode.
       */
      CryptoJS.mode.CFB = function () {
        var CFB = CryptoJS.lib.BlockCipherMode.extend();
        CFB.Encryptor = CFB.extend({
          processBlock: function processBlock(words, offset) {
            // Shortcuts
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher); // Remember this block to use with next block

            this._prevBlock = words.slice(offset, offset + blockSize);
          }
        });
        CFB.Decryptor = CFB.extend({
          processBlock: function processBlock(words, offset) {
            // Shortcuts
            var cipher = this._cipher;
            var blockSize = cipher.blockSize; // Remember this block to use with next block

            var thisBlock = words.slice(offset, offset + blockSize);
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher); // This block becomes the previous block

            this._prevBlock = thisBlock;
          }
        });

        function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
          // Shortcut
          var iv = this._iv; // Generate keystream

          if (iv) {
            var keystream = iv.slice(0); // Remove IV for subsequent blocks

            this._iv = undefined;
          } else {
            var keystream = this._prevBlock;
          }

          cipher.encryptBlock(keystream, 0); // Encrypt

          for (var i = 0; i < blockSize; i++) {
            words[offset + i] ^= keystream[i];
          }
        }

        return CFB;
      }();

      return CryptoJS.mode.CFB;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/mode-ctr-gladman.js":
  /*!****************************************************!*\
    !*** ./node_modules/crypto-js/mode-ctr-gladman.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsModeCtrGladmanJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      CryptoJS.mode.CTRGladman = function () {
        var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

        function incWord(word) {
          if ((word >> 24 & 0xff) === 0xff) {
            //overflow
            var b1 = word >> 16 & 0xff;
            var b2 = word >> 8 & 0xff;
            var b3 = word & 0xff;

            if (b1 === 0xff) // overflow b1
              {
                b1 = 0;

                if (b2 === 0xff) {
                  b2 = 0;

                  if (b3 === 0xff) {
                    b3 = 0;
                  } else {
                    ++b3;
                  }
                } else {
                  ++b2;
                }
              } else {
              ++b1;
            }

            word = 0;
            word += b1 << 16;
            word += b2 << 8;
            word += b3;
          } else {
            word += 0x01 << 24;
          }

          return word;
        }

        function incCounter(counter) {
          if ((counter[0] = incWord(counter[0])) === 0) {
            // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
            counter[1] = incWord(counter[1]);
          }

          return counter;
        }

        var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
          processBlock: function processBlock(words, offset) {
            // Shortcuts
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter; // Generate keystream

            if (iv) {
              counter = this._counter = iv.slice(0); // Remove IV for subsequent blocks

              this._iv = undefined;
            }

            incCounter(counter);
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0); // Encrypt

            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTRGladman.Decryptor = Encryptor;
        return CTRGladman;
      }();

      return CryptoJS.mode.CTRGladman;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/mode-ctr.js":
  /*!********************************************!*\
    !*** ./node_modules/crypto-js/mode-ctr.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsModeCtrJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      /**
       * Counter block mode.
       */
      CryptoJS.mode.CTR = function () {
        var CTR = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = CTR.Encryptor = CTR.extend({
          processBlock: function processBlock(words, offset) {
            // Shortcuts
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter; // Generate keystream

            if (iv) {
              counter = this._counter = iv.slice(0); // Remove IV for subsequent blocks

              this._iv = undefined;
            }

            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0); // Increment counter

            counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0; // Encrypt

            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTR.Decryptor = Encryptor;
        return CTR;
      }();

      return CryptoJS.mode.CTR;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/mode-ecb.js":
  /*!********************************************!*\
    !*** ./node_modules/crypto-js/mode-ecb.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsModeEcbJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      /**
       * Electronic Codebook block mode.
       */
      CryptoJS.mode.ECB = function () {
        var ECB = CryptoJS.lib.BlockCipherMode.extend();
        ECB.Encryptor = ECB.extend({
          processBlock: function processBlock(words, offset) {
            this._cipher.encryptBlock(words, offset);
          }
        });
        ECB.Decryptor = ECB.extend({
          processBlock: function processBlock(words, offset) {
            this._cipher.decryptBlock(words, offset);
          }
        });
        return ECB;
      }();

      return CryptoJS.mode.ECB;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/mode-ofb.js":
  /*!********************************************!*\
    !*** ./node_modules/crypto-js/mode-ofb.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsModeOfbJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      /**
       * Output Feedback block mode.
       */
      CryptoJS.mode.OFB = function () {
        var OFB = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = OFB.Encryptor = OFB.extend({
          processBlock: function processBlock(words, offset) {
            // Shortcuts
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var keystream = this._keystream; // Generate keystream

            if (iv) {
              keystream = this._keystream = iv.slice(0); // Remove IV for subsequent blocks

              this._iv = undefined;
            }

            cipher.encryptBlock(keystream, 0); // Encrypt

            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        OFB.Decryptor = Encryptor;
        return OFB;
      }();

      return CryptoJS.mode.OFB;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/pad-ansix923.js":
  /*!************************************************!*\
    !*** ./node_modules/crypto-js/pad-ansix923.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsPadAnsix923Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      /**
       * ANSI X.923 padding strategy.
       */
      CryptoJS.pad.AnsiX923 = {
        pad: function pad(data, blockSize) {
          // Shortcuts
          var dataSigBytes = data.sigBytes;
          var blockSizeBytes = blockSize * 4; // Count padding bytes

          var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes; // Compute last byte position

          var lastBytePos = dataSigBytes + nPaddingBytes - 1; // Pad

          data.clamp();
          data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
          data.sigBytes += nPaddingBytes;
        },
        unpad: function unpad(data) {
          // Get number of padding bytes from last byte
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff; // Remove padding

          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Ansix923;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/pad-iso10126.js":
  /*!************************************************!*\
    !*** ./node_modules/crypto-js/pad-iso10126.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsPadIso10126Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      /**
       * ISO 10126 padding strategy.
       */
      CryptoJS.pad.Iso10126 = {
        pad: function pad(data, blockSize) {
          // Shortcut
          var blockSizeBytes = blockSize * 4; // Count padding bytes

          var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes; // Pad

          data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
        },
        unpad: function unpad(data) {
          // Get number of padding bytes from last byte
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff; // Remove padding

          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Iso10126;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/pad-iso97971.js":
  /*!************************************************!*\
    !*** ./node_modules/crypto-js/pad-iso97971.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsPadIso97971Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      /**
       * ISO/IEC 9797-1 Padding Method 2.
       */
      CryptoJS.pad.Iso97971 = {
        pad: function pad(data, blockSize) {
          // Add 0x80 byte
          data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1)); // Zero pad the rest

          CryptoJS.pad.ZeroPadding.pad(data, blockSize);
        },
        unpad: function unpad(data) {
          // Remove zero padding
          CryptoJS.pad.ZeroPadding.unpad(data); // Remove one more byte -- the 0x80 byte

          data.sigBytes--;
        }
      };
      return CryptoJS.pad.Iso97971;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/pad-nopadding.js":
  /*!*************************************************!*\
    !*** ./node_modules/crypto-js/pad-nopadding.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsPadNopaddingJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      /**
       * A noop padding strategy.
       */
      CryptoJS.pad.NoPadding = {
        pad: function pad() {},
        unpad: function unpad() {}
      };
      return CryptoJS.pad.NoPadding;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/pad-zeropadding.js":
  /*!***************************************************!*\
    !*** ./node_modules/crypto-js/pad-zeropadding.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsPadZeropaddingJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      /**
       * Zero padding strategy.
       */
      CryptoJS.pad.ZeroPadding = {
        pad: function pad(data, blockSize) {
          // Shortcut
          var blockSizeBytes = blockSize * 4; // Pad

          data.clamp();
          data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
        },
        unpad: function unpad(data) {
          // Shortcut
          var dataWords = data.words; // Unpad

          var i = data.sigBytes - 1;

          while (!(dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff)) {
            i--;
          }

          data.sigBytes = i + 1;
        }
      };
      return CryptoJS.pad.ZeroPadding;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/pbkdf2.js":
  /*!******************************************!*\
    !*** ./node_modules/crypto-js/pbkdf2.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsPbkdf2Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./sha1 */
        "./node_modules/crypto-js/sha1.js"), __webpack_require__(
        /*! ./hmac */
        "./node_modules/crypto-js/hmac.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA1 = C_algo.SHA1;
        var HMAC = C_algo.HMAC;
        /**
         * Password-Based Key Derivation Function 2 algorithm.
         */

        var PBKDF2 = C_algo.PBKDF2 = Base.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA1
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: Base.extend({
            keySize: 128 / 32,
            hasher: SHA1,
            iterations: 1
          }),

          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function init(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },

          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function compute(password, salt) {
            // Shortcut
            var cfg = this.cfg; // Init HMAC

            var hmac = HMAC.create(cfg.hasher, password); // Initial values

            var derivedKey = WordArray.create();
            var blockIndex = WordArray.create([0x00000001]); // Shortcuts

            var derivedKeyWords = derivedKey.words;
            var blockIndexWords = blockIndex.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations; // Generate key

            while (derivedKeyWords.length < keySize) {
              var block = hmac.update(salt).finalize(blockIndex);
              hmac.reset(); // Shortcuts

              var blockWords = block.words;
              var blockWordsLength = blockWords.length; // Iterations

              var intermediate = block;

              for (var i = 1; i < iterations; i++) {
                intermediate = hmac.finalize(intermediate);
                hmac.reset(); // Shortcut

                var intermediateWords = intermediate.words; // XOR intermediate with block

                for (var j = 0; j < blockWordsLength; j++) {
                  blockWords[j] ^= intermediateWords[j];
                }
              }

              derivedKey.concat(block);
              blockIndexWords[0]++;
            }

            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        /**
         * Computes the Password-Based Key Derivation Function 2.
         *
         * @param {WordArray|string} password The password.
         * @param {WordArray|string} salt A salt.
         * @param {Object} cfg (Optional) The configuration options to use for this computation.
         *
         * @return {WordArray} The derived key.
         *
         * @static
         *
         * @example
         *
         *     var key = CryptoJS.PBKDF2(password, salt);
         *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
         *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
         */

        C.PBKDF2 = function (password, salt, cfg) {
          return PBKDF2.create(cfg).compute(password, salt);
        };
      })();

      return CryptoJS.PBKDF2;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/rabbit-legacy.js":
  /*!*************************************************!*\
    !*** ./node_modules/crypto-js/rabbit-legacy.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsRabbitLegacyJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./enc-base64 */
        "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(
        /*! ./md5 */
        "./node_modules/crypto-js/md5.js"), __webpack_require__(
        /*! ./evpkdf */
        "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo; // Reusable objects

        var S = [];
        var C_ = [];
        var G = [];
        /**
         * Rabbit stream cipher algorithm.
         *
         * This is a legacy version that neglected to convert the key to little-endian.
         * This error doesn't affect the cipher's security,
         * but it does affect its compatibility with other implementations.
         */

        var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
          _doReset: function _doReset() {
            // Shortcuts
            var K = this._key.words;
            var iv = this.cfg.iv; // Generate initial state values

            var X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16]; // Generate initial counter values

            var C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff]; // Carry bit

            this._b = 0; // Iterate the system four times

            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            } // Modify the counters


            for (var i = 0; i < 8; i++) {
              C[i] ^= X[i + 4 & 7];
            } // IV setup


            if (iv) {
              // Shortcuts
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1]; // Generate four subvectors

              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
              var i1 = i0 >>> 16 | i2 & 0xffff0000;
              var i3 = i2 << 16 | i0 & 0x0000ffff; // Modify counter values

              C[0] ^= i0;
              C[1] ^= i1;
              C[2] ^= i2;
              C[3] ^= i3;
              C[4] ^= i0;
              C[5] ^= i1;
              C[6] ^= i2;
              C[7] ^= i3; // Iterate the system four times

              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            // Shortcut
            var X = this._X; // Iterate the system

            nextState.call(this); // Generate four keystream words

            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;

            for (var i = 0; i < 4; i++) {
              // Swap endian
              S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00; // Encrypt

              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });

        function nextState() {
          // Shortcuts
          var X = this._X;
          var C = this._C; // Save old counter values

          for (var i = 0; i < 8; i++) {
            C_[i] = C[i];
          } // Calculate new counter values


          C[0] = C[0] + 0x4d34d34d + this._b | 0;
          C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0; // Calculate the g-values

          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C[i]; // Construct high and low argument for squaring

            var ga = gx & 0xffff;
            var gb = gx >>> 16; // Calculate high and low result of squaring

            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0); // High XOR low

            G[i] = gh ^ gl;
          } // Calculate new state values


          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
         */


        C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
      })();

      return CryptoJS.RabbitLegacy;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/rabbit.js":
  /*!******************************************!*\
    !*** ./node_modules/crypto-js/rabbit.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsRabbitJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./enc-base64 */
        "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(
        /*! ./md5 */
        "./node_modules/crypto-js/md5.js"), __webpack_require__(
        /*! ./evpkdf */
        "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo; // Reusable objects

        var S = [];
        var C_ = [];
        var G = [];
        /**
         * Rabbit stream cipher algorithm
         */

        var Rabbit = C_algo.Rabbit = StreamCipher.extend({
          _doReset: function _doReset() {
            // Shortcuts
            var K = this._key.words;
            var iv = this.cfg.iv; // Swap endian

            for (var i = 0; i < 4; i++) {
              K[i] = (K[i] << 8 | K[i] >>> 24) & 0x00ff00ff | (K[i] << 24 | K[i] >>> 8) & 0xff00ff00;
            } // Generate initial state values


            var X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16]; // Generate initial counter values

            var C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff]; // Carry bit

            this._b = 0; // Iterate the system four times

            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            } // Modify the counters


            for (var i = 0; i < 8; i++) {
              C[i] ^= X[i + 4 & 7];
            } // IV setup


            if (iv) {
              // Shortcuts
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1]; // Generate four subvectors

              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;
              var i1 = i0 >>> 16 | i2 & 0xffff0000;
              var i3 = i2 << 16 | i0 & 0x0000ffff; // Modify counter values

              C[0] ^= i0;
              C[1] ^= i1;
              C[2] ^= i2;
              C[3] ^= i3;
              C[4] ^= i0;
              C[5] ^= i1;
              C[6] ^= i2;
              C[7] ^= i3; // Iterate the system four times

              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            // Shortcut
            var X = this._X; // Iterate the system

            nextState.call(this); // Generate four keystream words

            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;

            for (var i = 0; i < 4; i++) {
              // Swap endian
              S[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00; // Encrypt

              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });

        function nextState() {
          // Shortcuts
          var X = this._X;
          var C = this._C; // Save old counter values

          for (var i = 0; i < 8; i++) {
            C_[i] = C[i];
          } // Calculate new counter values


          C[0] = C[0] + 0x4d34d34d + this._b | 0;
          C[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0; // Calculate the g-values

          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C[i]; // Construct high and low argument for squaring

            var ga = gx & 0xffff;
            var gb = gx >>> 16; // Calculate high and low result of squaring

            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0); // High XOR low

            G[i] = gh ^ gl;
          } // Calculate new state values


          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
         */


        C.Rabbit = StreamCipher._createHelper(Rabbit);
      })();

      return CryptoJS.Rabbit;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/rc4.js":
  /*!***************************************!*\
    !*** ./node_modules/crypto-js/rc4.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsRc4Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./enc-base64 */
        "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(
        /*! ./md5 */
        "./node_modules/crypto-js/md5.js"), __webpack_require__(
        /*! ./evpkdf */
        "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        /**
         * RC4 stream cipher algorithm.
         */

        var RC4 = C_algo.RC4 = StreamCipher.extend({
          _doReset: function _doReset() {
            // Shortcuts
            var key = this._key;
            var keyWords = key.words;
            var keySigBytes = key.sigBytes; // Init sbox

            var S = this._S = [];

            for (var i = 0; i < 256; i++) {
              S[i] = i;
            } // Key setup


            for (var i = 0, j = 0; i < 256; i++) {
              var keyByteIndex = i % keySigBytes;
              var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 0xff;
              j = (j + S[i] + keyByte) % 256; // Swap

              var t = S[i];
              S[i] = S[j];
              S[j] = t;
            } // Counters


            this._i = this._j = 0;
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            M[offset] ^= generateKeystreamWord.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });

        function generateKeystreamWord() {
          // Shortcuts
          var S = this._S;
          var i = this._i;
          var j = this._j; // Generate keystream word

          var keystreamWord = 0;

          for (var n = 0; n < 4; n++) {
            i = (i + 1) % 256;
            j = (j + S[i]) % 256; // Swap

            var t = S[i];
            S[i] = S[j];
            S[j] = t;
            keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
          } // Update counters


          this._i = i;
          this._j = j;
          return keystreamWord;
        }
        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
         */


        C.RC4 = StreamCipher._createHelper(RC4);
        /**
         * Modified RC4 stream cipher algorithm.
         */

        var RC4Drop = C_algo.RC4Drop = RC4.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: RC4.cfg.extend({
            drop: 192
          }),
          _doReset: function _doReset() {
            RC4._doReset.call(this); // Drop


            for (var i = this.cfg.drop; i > 0; i--) {
              generateKeystreamWord.call(this);
            }
          }
        });
        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
         */

        C.RC4Drop = StreamCipher._createHelper(RC4Drop);
      })();

      return CryptoJS.RC4;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/ripemd160.js":
  /*!*********************************************!*\
    !*** ./node_modules/crypto-js/ripemd160.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsRipemd160Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"));
      } else {}
    })(this, function (CryptoJS) {
      /** @preserve
      (c) 2012 by Cédric Mesnil. All rights reserved.
      	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
          - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */
      (function (Math) {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo; // Constants table

        var _zl = WordArray.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);

        var _zr = WordArray.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);

        var _sl = WordArray.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);

        var _sr = WordArray.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);

        var _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);

        var _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);
        /**
         * RIPEMD160 hash algorithm.
         */


        var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
          _doReset: function _doReset() {
            this._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            // Swap endian
            for (var i = 0; i < 16; i++) {
              // Shortcuts
              var offset_i = offset + i;
              var M_offset_i = M[offset_i]; // Swap

              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
            } // Shortcut


            var H = this._hash.words;
            var hl = _hl.words;
            var hr = _hr.words;
            var zl = _zl.words;
            var zr = _zr.words;
            var sl = _sl.words;
            var sr = _sr.words; // Working variables

            var al, bl, cl, dl, el;
            var ar, br, cr, dr, er;
            ar = al = H[0];
            br = bl = H[1];
            cr = cl = H[2];
            dr = dl = H[3];
            er = el = H[4]; // Computation

            var t;

            for (var i = 0; i < 80; i += 1) {
              t = al + M[offset + zl[i]] | 0;

              if (i < 16) {
                t += f1(bl, cl, dl) + hl[0];
              } else if (i < 32) {
                t += f2(bl, cl, dl) + hl[1];
              } else if (i < 48) {
                t += f3(bl, cl, dl) + hl[2];
              } else if (i < 64) {
                t += f4(bl, cl, dl) + hl[3];
              } else {
                // if (i<80) {
                t += f5(bl, cl, dl) + hl[4];
              }

              t = t | 0;
              t = rotl(t, sl[i]);
              t = t + el | 0;
              al = el;
              el = dl;
              dl = rotl(cl, 10);
              cl = bl;
              bl = t;
              t = ar + M[offset + zr[i]] | 0;

              if (i < 16) {
                t += f5(br, cr, dr) + hr[0];
              } else if (i < 32) {
                t += f4(br, cr, dr) + hr[1];
              } else if (i < 48) {
                t += f3(br, cr, dr) + hr[2];
              } else if (i < 64) {
                t += f2(br, cr, dr) + hr[3];
              } else {
                // if (i<80) {
                t += f1(br, cr, dr) + hr[4];
              }

              t = t | 0;
              t = rotl(t, sr[i]);
              t = t + er | 0;
              ar = er;
              er = dr;
              dr = rotl(cr, 10);
              cr = br;
              br = t;
            } // Intermediate hash value


            t = H[1] + cl + dr | 0;
            H[1] = H[2] + dl + er | 0;
            H[2] = H[3] + el + ar | 0;
            H[3] = H[4] + al + br | 0;
            H[4] = H[0] + bl + cr | 0;
            H[0] = t;
          },
          _doFinalize: function _doFinalize() {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8; // Add padding

            dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 0x00ff00ff | (nBitsTotal << 24 | nBitsTotal >>> 8) & 0xff00ff00;
            data.sigBytes = (dataWords.length + 1) * 4; // Hash final blocks

            this._process(); // Shortcuts


            var hash = this._hash;
            var H = hash.words; // Swap endian

            for (var i = 0; i < 5; i++) {
              // Shortcut
              var H_i = H[i]; // Swap

              H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
            } // Return final computed hash


            return hash;
          },
          clone: function clone() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });

        function f1(x, y, z) {
          return x ^ y ^ z;
        }

        function f2(x, y, z) {
          return x & y | ~x & z;
        }

        function f3(x, y, z) {
          return (x | ~y) ^ z;
        }

        function f4(x, y, z) {
          return x & z | y & ~z;
        }

        function f5(x, y, z) {
          return x ^ (y | ~z);
        }

        function rotl(x, n) {
          return x << n | x >>> 32 - n;
        }
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         *
         * @return {WordArray} The hash.
         *
         * @static
         *
         * @example
         *
         *     var hash = CryptoJS.RIPEMD160('message');
         *     var hash = CryptoJS.RIPEMD160(wordArray);
         */


        C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         * @param {WordArray|string} key The secret key.
         *
         * @return {WordArray} The HMAC.
         *
         * @static
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
         */

        C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
      })(Math);

      return CryptoJS.RIPEMD160;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/sha1.js":
  /*!****************************************!*\
    !*** ./node_modules/crypto-js/sha1.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsSha1Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo; // Reusable object

        var W = [];
        /**
         * SHA-1 hash algorithm.
         */

        var SHA1 = C_algo.SHA1 = Hasher.extend({
          _doReset: function _doReset() {
            this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            // Shortcut
            var H = this._hash.words; // Working variables

            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4]; // Computation

            for (var i = 0; i < 80; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = n << 1 | n >>> 31;
              }

              var t = (a << 5 | a >>> 27) + e + W[i];

              if (i < 20) {
                t += (b & c | ~b & d) + 0x5a827999;
              } else if (i < 40) {
                t += (b ^ c ^ d) + 0x6ed9eba1;
              } else if (i < 60) {
                t += (b & c | b & d | c & d) - 0x70e44324;
              } else
                /* if (i < 80) */
                {
                  t += (b ^ c ^ d) - 0x359d3e2a;
                }

              e = d;
              d = c;
              c = b << 30 | b >>> 2;
              b = a;
              a = t;
            } // Intermediate hash value


            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
            H[4] = H[4] + e | 0;
          },
          _doFinalize: function _doFinalize() {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8; // Add padding

            dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4; // Hash final blocks

            this._process(); // Return final computed hash


            return this._hash;
          },
          clone: function clone() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         *
         * @return {WordArray} The hash.
         *
         * @static
         *
         * @example
         *
         *     var hash = CryptoJS.SHA1('message');
         *     var hash = CryptoJS.SHA1(wordArray);
         */

        C.SHA1 = Hasher._createHelper(SHA1);
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         * @param {WordArray|string} key The secret key.
         *
         * @return {WordArray} The HMAC.
         *
         * @static
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA1(message, key);
         */

        C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
      })();

      return CryptoJS.SHA1;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/sha224.js":
  /*!******************************************!*\
    !*** ./node_modules/crypto-js/sha224.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsSha224Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./sha256 */
        "./node_modules/crypto-js/sha256.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA256 = C_algo.SHA256;
        /**
         * SHA-224 hash algorithm.
         */

        var SHA224 = C_algo.SHA224 = SHA256.extend({
          _doReset: function _doReset() {
            this._hash = new WordArray.init([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);
          },
          _doFinalize: function _doFinalize() {
            var hash = SHA256._doFinalize.call(this);

            hash.sigBytes -= 4;
            return hash;
          }
        });
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         *
         * @return {WordArray} The hash.
         *
         * @static
         *
         * @example
         *
         *     var hash = CryptoJS.SHA224('message');
         *     var hash = CryptoJS.SHA224(wordArray);
         */

        C.SHA224 = SHA256._createHelper(SHA224);
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         * @param {WordArray|string} key The secret key.
         *
         * @return {WordArray} The HMAC.
         *
         * @static
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA224(message, key);
         */

        C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
      })();

      return CryptoJS.SHA224;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/sha256.js":
  /*!******************************************!*\
    !*** ./node_modules/crypto-js/sha256.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsSha256Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function (Math) {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo; // Initialization and round constants tables

        var H = [];
        var K = []; // Compute constants

        (function () {
          function isPrime(n) {
            var sqrtN = Math.sqrt(n);

            for (var factor = 2; factor <= sqrtN; factor++) {
              if (!(n % factor)) {
                return false;
              }
            }

            return true;
          }

          function getFractionalBits(n) {
            return (n - (n | 0)) * 0x100000000 | 0;
          }

          var n = 2;
          var nPrime = 0;

          while (nPrime < 64) {
            if (isPrime(n)) {
              if (nPrime < 8) {
                H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
              }

              K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
              nPrime++;
            }

            n++;
          }
        })(); // Reusable object


        var W = [];
        /**
         * SHA-256 hash algorithm.
         */

        var SHA256 = C_algo.SHA256 = Hasher.extend({
          _doReset: function _doReset() {
            this._hash = new WordArray.init(H.slice(0));
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            // Shortcut
            var H = this._hash.words; // Working variables

            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            var f = H[5];
            var g = H[6];
            var h = H[7]; // Computation

            for (var i = 0; i < 64; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                var gamma1x = W[i - 2];
                var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
              }

              var ch = e & f ^ ~e & g;
              var maj = a & b ^ a & c ^ b & c;
              var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
              var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
              var t1 = h + sigma1 + ch + K[i] + W[i];
              var t2 = sigma0 + maj;
              h = g;
              g = f;
              f = e;
              e = d + t1 | 0;
              d = c;
              c = b;
              b = a;
              a = t1 + t2 | 0;
            } // Intermediate hash value


            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
            H[4] = H[4] + e | 0;
            H[5] = H[5] + f | 0;
            H[6] = H[6] + g | 0;
            H[7] = H[7] + h | 0;
          },
          _doFinalize: function _doFinalize() {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8; // Add padding

            dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4; // Hash final blocks

            this._process(); // Return final computed hash


            return this._hash;
          },
          clone: function clone() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         *
         * @return {WordArray} The hash.
         *
         * @static
         *
         * @example
         *
         *     var hash = CryptoJS.SHA256('message');
         *     var hash = CryptoJS.SHA256(wordArray);
         */

        C.SHA256 = Hasher._createHelper(SHA256);
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         * @param {WordArray|string} key The secret key.
         *
         * @return {WordArray} The HMAC.
         *
         * @static
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA256(message, key);
         */

        C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
      })(Math);

      return CryptoJS.SHA256;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/sha3.js":
  /*!****************************************!*\
    !*** ./node_modules/crypto-js/sha3.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsSha3Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./x64-core */
        "./node_modules/crypto-js/x64-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function (Math) {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var C_algo = C.algo; // Constants tables

        var RHO_OFFSETS = [];
        var PI_INDEXES = [];
        var ROUND_CONSTANTS = []; // Compute Constants

        (function () {
          // Compute rho offset constants
          var x = 1,
              y = 0;

          for (var t = 0; t < 24; t++) {
            RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
            var newX = y % 5;
            var newY = (2 * x + 3 * y) % 5;
            x = newX;
            y = newY;
          } // Compute pi index constants


          for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
              PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
            }
          } // Compute round constants


          var LFSR = 0x01;

          for (var i = 0; i < 24; i++) {
            var roundConstantMsw = 0;
            var roundConstantLsw = 0;

            for (var j = 0; j < 7; j++) {
              if (LFSR & 0x01) {
                var bitPosition = (1 << j) - 1;

                if (bitPosition < 32) {
                  roundConstantLsw ^= 1 << bitPosition;
                } else
                  /* if (bitPosition >= 32) */
                  {
                    roundConstantMsw ^= 1 << bitPosition - 32;
                  }
              } // Compute next LFSR


              if (LFSR & 0x80) {
                // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
                LFSR = LFSR << 1 ^ 0x71;
              } else {
                LFSR <<= 1;
              }
            }

            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
          }
        })(); // Reusable objects for temporary values


        var T = [];

        (function () {
          for (var i = 0; i < 25; i++) {
            T[i] = X64Word.create();
          }
        })();
        /**
         * SHA-3 hash algorithm.
         */


        var SHA3 = C_algo.SHA3 = Hasher.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: Hasher.cfg.extend({
            outputLength: 512
          }),
          _doReset: function _doReset() {
            var state = this._state = [];

            for (var i = 0; i < 25; i++) {
              state[i] = new X64Word.init();
            }

            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            // Shortcuts
            var state = this._state;
            var nBlockSizeLanes = this.blockSize / 2; // Absorb

            for (var i = 0; i < nBlockSizeLanes; i++) {
              // Shortcuts
              var M2i = M[offset + 2 * i];
              var M2i1 = M[offset + 2 * i + 1]; // Swap endian

              M2i = (M2i << 8 | M2i >>> 24) & 0x00ff00ff | (M2i << 24 | M2i >>> 8) & 0xff00ff00;
              M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 0x00ff00ff | (M2i1 << 24 | M2i1 >>> 8) & 0xff00ff00; // Absorb message into state

              var lane = state[i];
              lane.high ^= M2i1;
              lane.low ^= M2i;
            } // Rounds


            for (var round = 0; round < 24; round++) {
              // Theta
              for (var x = 0; x < 5; x++) {
                // Mix column lanes
                var tMsw = 0,
                    tLsw = 0;

                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  tMsw ^= lane.high;
                  tLsw ^= lane.low;
                } // Temporary values


                var Tx = T[x];
                Tx.high = tMsw;
                Tx.low = tLsw;
              }

              for (var x = 0; x < 5; x++) {
                // Shortcuts
                var Tx4 = T[(x + 4) % 5];
                var Tx1 = T[(x + 1) % 5];
                var Tx1Msw = Tx1.high;
                var Tx1Lsw = Tx1.low; // Mix surrounding columns

                var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
                var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);

                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  lane.high ^= tMsw;
                  lane.low ^= tLsw;
                }
              } // Rho Pi


              for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                // Shortcuts
                var lane = state[laneIndex];
                var laneMsw = lane.high;
                var laneLsw = lane.low;
                var rhoOffset = RHO_OFFSETS[laneIndex]; // Rotate lanes

                if (rhoOffset < 32) {
                  var tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                  var tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
                } else
                  /* if (rhoOffset >= 32) */
                  {
                    var tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                    var tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                  } // Transpose lanes


                var TPiLane = T[PI_INDEXES[laneIndex]];
                TPiLane.high = tMsw;
                TPiLane.low = tLsw;
              } // Rho pi at x = y = 0


              var T0 = T[0];
              var state0 = state[0];
              T0.high = state0.high;
              T0.low = state0.low; // Chi

              for (var x = 0; x < 5; x++) {
                for (var y = 0; y < 5; y++) {
                  // Shortcuts
                  var laneIndex = x + 5 * y;
                  var lane = state[laneIndex];
                  var TLane = T[laneIndex];
                  var Tx1Lane = T[(x + 1) % 5 + 5 * y];
                  var Tx2Lane = T[(x + 2) % 5 + 5 * y]; // Mix rows

                  lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                  lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
                }
              } // Iota


              var lane = state[0];
              var roundConstant = ROUND_CONSTANTS[round];
              lane.high ^= roundConstant.high;
              lane.low ^= roundConstant.low;
              ;
            }
          },
          _doFinalize: function _doFinalize() {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            var blockSizeBits = this.blockSize * 32; // Add padding

            dataWords[nBitsLeft >>> 5] |= 0x1 << 24 - nBitsLeft % 32;
            dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 0x80;
            data.sigBytes = dataWords.length * 4; // Hash final blocks

            this._process(); // Shortcuts


            var state = this._state;
            var outputLengthBytes = this.cfg.outputLength / 8;
            var outputLengthLanes = outputLengthBytes / 8; // Squeeze

            var hashWords = [];

            for (var i = 0; i < outputLengthLanes; i++) {
              // Shortcuts
              var lane = state[i];
              var laneMsw = lane.high;
              var laneLsw = lane.low; // Swap endian

              laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 0x00ff00ff | (laneMsw << 24 | laneMsw >>> 8) & 0xff00ff00;
              laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 0x00ff00ff | (laneLsw << 24 | laneLsw >>> 8) & 0xff00ff00; // Squeeze state to retrieve hash

              hashWords.push(laneLsw);
              hashWords.push(laneMsw);
            } // Return final computed hash


            return new WordArray.init(hashWords, outputLengthBytes);
          },
          clone: function clone() {
            var clone = Hasher.clone.call(this);

            var state = clone._state = this._state.slice(0);

            for (var i = 0; i < 25; i++) {
              state[i] = state[i].clone();
            }

            return clone;
          }
        });
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         *
         * @return {WordArray} The hash.
         *
         * @static
         *
         * @example
         *
         *     var hash = CryptoJS.SHA3('message');
         *     var hash = CryptoJS.SHA3(wordArray);
         */

        C.SHA3 = Hasher._createHelper(SHA3);
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         * @param {WordArray|string} key The secret key.
         *
         * @return {WordArray} The HMAC.
         *
         * @static
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA3(message, key);
         */

        C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
      })(Math);

      return CryptoJS.SHA3;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/sha384.js":
  /*!******************************************!*\
    !*** ./node_modules/crypto-js/sha384.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsSha384Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./x64-core */
        "./node_modules/crypto-js/x64-core.js"), __webpack_require__(
        /*! ./sha512 */
        "./node_modules/crypto-js/sha512.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        var SHA512 = C_algo.SHA512;
        /**
         * SHA-384 hash algorithm.
         */

        var SHA384 = C_algo.SHA384 = SHA512.extend({
          _doReset: function _doReset() {
            this._hash = new X64WordArray.init([new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507), new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939), new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511), new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)]);
          },
          _doFinalize: function _doFinalize() {
            var hash = SHA512._doFinalize.call(this);

            hash.sigBytes -= 16;
            return hash;
          }
        });
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         *
         * @return {WordArray} The hash.
         *
         * @static
         *
         * @example
         *
         *     var hash = CryptoJS.SHA384('message');
         *     var hash = CryptoJS.SHA384(wordArray);
         */

        C.SHA384 = SHA512._createHelper(SHA384);
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         * @param {WordArray|string} key The secret key.
         *
         * @return {WordArray} The HMAC.
         *
         * @static
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA384(message, key);
         */

        C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
      })();

      return CryptoJS.SHA384;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/sha512.js":
  /*!******************************************!*\
    !*** ./node_modules/crypto-js/sha512.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsSha512Js(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./x64-core */
        "./node_modules/crypto-js/x64-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;

        function X64Word_create() {
          return X64Word.create.apply(X64Word, arguments);
        } // Constants


        var K = [X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd), X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc), X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019), X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118), X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe), X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2), X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1), X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694), X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3), X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65), X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483), X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5), X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210), X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4), X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725), X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70), X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926), X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df), X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8), X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b), X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001), X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30), X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910), X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8), X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53), X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8), X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb), X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3), X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60), X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec), X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9), X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b), X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207), X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178), X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6), X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b), X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493), X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c), X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a), X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)]; // Reusable objects

        var W = [];

        (function () {
          for (var i = 0; i < 80; i++) {
            W[i] = X64Word_create();
          }
        })();
        /**
         * SHA-512 hash algorithm.
         */


        var SHA512 = C_algo.SHA512 = Hasher.extend({
          _doReset: function _doReset() {
            this._hash = new X64WordArray.init([new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b), new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1), new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f), new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)]);
          },
          _doProcessBlock: function _doProcessBlock(M, offset) {
            // Shortcuts
            var H = this._hash.words;
            var H0 = H[0];
            var H1 = H[1];
            var H2 = H[2];
            var H3 = H[3];
            var H4 = H[4];
            var H5 = H[5];
            var H6 = H[6];
            var H7 = H[7];
            var H0h = H0.high;
            var H0l = H0.low;
            var H1h = H1.high;
            var H1l = H1.low;
            var H2h = H2.high;
            var H2l = H2.low;
            var H3h = H3.high;
            var H3l = H3.low;
            var H4h = H4.high;
            var H4l = H4.low;
            var H5h = H5.high;
            var H5l = H5.low;
            var H6h = H6.high;
            var H6l = H6.low;
            var H7h = H7.high;
            var H7l = H7.low; // Working variables

            var ah = H0h;
            var al = H0l;
            var bh = H1h;
            var bl = H1l;
            var ch = H2h;
            var cl = H2l;
            var dh = H3h;
            var dl = H3l;
            var eh = H4h;
            var el = H4l;
            var fh = H5h;
            var fl = H5l;
            var gh = H6h;
            var gl = H6l;
            var hh = H7h;
            var hl = H7l; // Rounds

            for (var i = 0; i < 80; i++) {
              // Shortcut
              var Wi = W[i]; // Extend message

              if (i < 16) {
                var Wih = Wi.high = M[offset + i * 2] | 0;
                var Wil = Wi.low = M[offset + i * 2 + 1] | 0;
              } else {
                // Gamma0
                var gamma0x = W[i - 15];
                var gamma0xh = gamma0x.high;
                var gamma0xl = gamma0x.low;
                var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25); // Gamma1

                var gamma1x = W[i - 2];
                var gamma1xh = gamma1x.high;
                var gamma1xl = gamma1x.low;
                var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26); // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]

                var Wi7 = W[i - 7];
                var Wi7h = Wi7.high;
                var Wi7l = Wi7.low;
                var Wi16 = W[i - 16];
                var Wi16h = Wi16.high;
                var Wi16l = Wi16.low;
                var Wil = gamma0l + Wi7l;
                var Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                var Wil = Wil + gamma1l;
                var Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                var Wil = Wil + Wi16l;
                var Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                Wi.high = Wih;
                Wi.low = Wil;
              }

              var chh = eh & fh ^ ~eh & gh;
              var chl = el & fl ^ ~el & gl;
              var majh = ah & bh ^ ah & ch ^ bh & ch;
              var majl = al & bl ^ al & cl ^ bl & cl;
              var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
              var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
              var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
              var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9); // t1 = h + sigma1 + ch + K[i] + W[i]

              var Ki = K[i];
              var Kih = Ki.high;
              var Kil = Ki.low;
              var t1l = hl + sigma1l;
              var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
              var t1l = t1l + chl;
              var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
              var t1l = t1l + Kil;
              var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
              var t1l = t1l + Wil;
              var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0); // t2 = sigma0 + maj

              var t2l = sigma0l + majl;
              var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0); // Update working variables

              hh = gh;
              hl = gl;
              gh = fh;
              gl = fl;
              fh = eh;
              fl = el;
              el = dl + t1l | 0;
              eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
              dh = ch;
              dl = cl;
              ch = bh;
              cl = bl;
              bh = ah;
              bl = al;
              al = t1l + t2l | 0;
              ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
            } // Intermediate hash value


            H0l = H0.low = H0l + al;
            H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
            H1l = H1.low = H1l + bl;
            H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
            H2l = H2.low = H2l + cl;
            H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
            H3l = H3.low = H3l + dl;
            H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
            H4l = H4.low = H4l + el;
            H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
            H5l = H5.low = H5l + fl;
            H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
            H6l = H6.low = H6l + gl;
            H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
            H7l = H7.low = H7l + hl;
            H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
          },
          _doFinalize: function _doFinalize() {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8; // Add padding

            dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
            data.sigBytes = dataWords.length * 4; // Hash final blocks

            this._process(); // Convert hash to 32-bit word array before returning


            var hash = this._hash.toX32(); // Return final computed hash


            return hash;
          },
          clone: function clone() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          },
          blockSize: 1024 / 32
        });
        /**
         * Shortcut function to the hasher's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         *
         * @return {WordArray} The hash.
         *
         * @static
         *
         * @example
         *
         *     var hash = CryptoJS.SHA512('message');
         *     var hash = CryptoJS.SHA512(wordArray);
         */

        C.SHA512 = Hasher._createHelper(SHA512);
        /**
         * Shortcut function to the HMAC's object interface.
         *
         * @param {WordArray|string} message The message to hash.
         * @param {WordArray|string} key The secret key.
         *
         * @return {WordArray} The HMAC.
         *
         * @static
         *
         * @example
         *
         *     var hmac = CryptoJS.HmacSHA512(message, key);
         */

        C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
      })();

      return CryptoJS.SHA512;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/tripledes.js":
  /*!*********************************************!*\
    !*** ./node_modules/crypto-js/tripledes.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsTripledesJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory, undef) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"), __webpack_require__(
        /*! ./enc-base64 */
        "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(
        /*! ./md5 */
        "./node_modules/crypto-js/md5.js"), __webpack_require__(
        /*! ./evpkdf */
        "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(
        /*! ./cipher-core */
        "./node_modules/crypto-js/cipher-core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function () {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo; // Permuted Choice 1 constants

        var PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]; // Permuted Choice 2 constants

        var PC2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]; // Cumulative bit shift constants

        var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]; // SBOXes and round permutation constants

        var SBOX_P = [{
          0x0: 0x808200,
          0x10000000: 0x8000,
          0x20000000: 0x808002,
          0x30000000: 0x2,
          0x40000000: 0x200,
          0x50000000: 0x808202,
          0x60000000: 0x800202,
          0x70000000: 0x800000,
          0x80000000: 0x202,
          0x90000000: 0x800200,
          0xa0000000: 0x8200,
          0xb0000000: 0x808000,
          0xc0000000: 0x8002,
          0xd0000000: 0x800002,
          0xe0000000: 0x0,
          0xf0000000: 0x8202,
          0x8000000: 0x0,
          0x18000000: 0x808202,
          0x28000000: 0x8202,
          0x38000000: 0x8000,
          0x48000000: 0x808200,
          0x58000000: 0x200,
          0x68000000: 0x808002,
          0x78000000: 0x2,
          0x88000000: 0x800200,
          0x98000000: 0x8200,
          0xa8000000: 0x808000,
          0xb8000000: 0x800202,
          0xc8000000: 0x800002,
          0xd8000000: 0x8002,
          0xe8000000: 0x202,
          0xf8000000: 0x800000,
          0x1: 0x8000,
          0x10000001: 0x2,
          0x20000001: 0x808200,
          0x30000001: 0x800000,
          0x40000001: 0x808002,
          0x50000001: 0x8200,
          0x60000001: 0x200,
          0x70000001: 0x800202,
          0x80000001: 0x808202,
          0x90000001: 0x808000,
          0xa0000001: 0x800002,
          0xb0000001: 0x8202,
          0xc0000001: 0x202,
          0xd0000001: 0x800200,
          0xe0000001: 0x8002,
          0xf0000001: 0x0,
          0x8000001: 0x808202,
          0x18000001: 0x808000,
          0x28000001: 0x800000,
          0x38000001: 0x200,
          0x48000001: 0x8000,
          0x58000001: 0x800002,
          0x68000001: 0x2,
          0x78000001: 0x8202,
          0x88000001: 0x8002,
          0x98000001: 0x800202,
          0xa8000001: 0x202,
          0xb8000001: 0x808200,
          0xc8000001: 0x800200,
          0xd8000001: 0x0,
          0xe8000001: 0x8200,
          0xf8000001: 0x808002
        }, {
          0x0: 0x40084010,
          0x1000000: 0x4000,
          0x2000000: 0x80000,
          0x3000000: 0x40080010,
          0x4000000: 0x40000010,
          0x5000000: 0x40084000,
          0x6000000: 0x40004000,
          0x7000000: 0x10,
          0x8000000: 0x84000,
          0x9000000: 0x40004010,
          0xa000000: 0x40000000,
          0xb000000: 0x84010,
          0xc000000: 0x80010,
          0xd000000: 0x0,
          0xe000000: 0x4010,
          0xf000000: 0x40080000,
          0x800000: 0x40004000,
          0x1800000: 0x84010,
          0x2800000: 0x10,
          0x3800000: 0x40004010,
          0x4800000: 0x40084010,
          0x5800000: 0x40000000,
          0x6800000: 0x80000,
          0x7800000: 0x40080010,
          0x8800000: 0x80010,
          0x9800000: 0x0,
          0xa800000: 0x4000,
          0xb800000: 0x40080000,
          0xc800000: 0x40000010,
          0xd800000: 0x84000,
          0xe800000: 0x40084000,
          0xf800000: 0x4010,
          0x10000000: 0x0,
          0x11000000: 0x40080010,
          0x12000000: 0x40004010,
          0x13000000: 0x40084000,
          0x14000000: 0x40080000,
          0x15000000: 0x10,
          0x16000000: 0x84010,
          0x17000000: 0x4000,
          0x18000000: 0x4010,
          0x19000000: 0x80000,
          0x1a000000: 0x80010,
          0x1b000000: 0x40000010,
          0x1c000000: 0x84000,
          0x1d000000: 0x40004000,
          0x1e000000: 0x40000000,
          0x1f000000: 0x40084010,
          0x10800000: 0x84010,
          0x11800000: 0x80000,
          0x12800000: 0x40080000,
          0x13800000: 0x4000,
          0x14800000: 0x40004000,
          0x15800000: 0x40084010,
          0x16800000: 0x10,
          0x17800000: 0x40000000,
          0x18800000: 0x40084000,
          0x19800000: 0x40000010,
          0x1a800000: 0x40004010,
          0x1b800000: 0x80010,
          0x1c800000: 0x0,
          0x1d800000: 0x4010,
          0x1e800000: 0x40080010,
          0x1f800000: 0x84000
        }, {
          0x0: 0x104,
          0x100000: 0x0,
          0x200000: 0x4000100,
          0x300000: 0x10104,
          0x400000: 0x10004,
          0x500000: 0x4000004,
          0x600000: 0x4010104,
          0x700000: 0x4010000,
          0x800000: 0x4000000,
          0x900000: 0x4010100,
          0xa00000: 0x10100,
          0xb00000: 0x4010004,
          0xc00000: 0x4000104,
          0xd00000: 0x10000,
          0xe00000: 0x4,
          0xf00000: 0x100,
          0x80000: 0x4010100,
          0x180000: 0x4010004,
          0x280000: 0x0,
          0x380000: 0x4000100,
          0x480000: 0x4000004,
          0x580000: 0x10000,
          0x680000: 0x10004,
          0x780000: 0x104,
          0x880000: 0x4,
          0x980000: 0x100,
          0xa80000: 0x4010000,
          0xb80000: 0x10104,
          0xc80000: 0x10100,
          0xd80000: 0x4000104,
          0xe80000: 0x4010104,
          0xf80000: 0x4000000,
          0x1000000: 0x4010100,
          0x1100000: 0x10004,
          0x1200000: 0x10000,
          0x1300000: 0x4000100,
          0x1400000: 0x100,
          0x1500000: 0x4010104,
          0x1600000: 0x4000004,
          0x1700000: 0x0,
          0x1800000: 0x4000104,
          0x1900000: 0x4000000,
          0x1a00000: 0x4,
          0x1b00000: 0x10100,
          0x1c00000: 0x4010000,
          0x1d00000: 0x104,
          0x1e00000: 0x10104,
          0x1f00000: 0x4010004,
          0x1080000: 0x4000000,
          0x1180000: 0x104,
          0x1280000: 0x4010100,
          0x1380000: 0x0,
          0x1480000: 0x10004,
          0x1580000: 0x4000100,
          0x1680000: 0x100,
          0x1780000: 0x4010004,
          0x1880000: 0x10000,
          0x1980000: 0x4010104,
          0x1a80000: 0x10104,
          0x1b80000: 0x4000004,
          0x1c80000: 0x4000104,
          0x1d80000: 0x4010000,
          0x1e80000: 0x4,
          0x1f80000: 0x10100
        }, {
          0x0: 0x80401000,
          0x10000: 0x80001040,
          0x20000: 0x401040,
          0x30000: 0x80400000,
          0x40000: 0x0,
          0x50000: 0x401000,
          0x60000: 0x80000040,
          0x70000: 0x400040,
          0x80000: 0x80000000,
          0x90000: 0x400000,
          0xa0000: 0x40,
          0xb0000: 0x80001000,
          0xc0000: 0x80400040,
          0xd0000: 0x1040,
          0xe0000: 0x1000,
          0xf0000: 0x80401040,
          0x8000: 0x80001040,
          0x18000: 0x40,
          0x28000: 0x80400040,
          0x38000: 0x80001000,
          0x48000: 0x401000,
          0x58000: 0x80401040,
          0x68000: 0x0,
          0x78000: 0x80400000,
          0x88000: 0x1000,
          0x98000: 0x80401000,
          0xa8000: 0x400000,
          0xb8000: 0x1040,
          0xc8000: 0x80000000,
          0xd8000: 0x400040,
          0xe8000: 0x401040,
          0xf8000: 0x80000040,
          0x100000: 0x400040,
          0x110000: 0x401000,
          0x120000: 0x80000040,
          0x130000: 0x0,
          0x140000: 0x1040,
          0x150000: 0x80400040,
          0x160000: 0x80401000,
          0x170000: 0x80001040,
          0x180000: 0x80401040,
          0x190000: 0x80000000,
          0x1a0000: 0x80400000,
          0x1b0000: 0x401040,
          0x1c0000: 0x80001000,
          0x1d0000: 0x400000,
          0x1e0000: 0x40,
          0x1f0000: 0x1000,
          0x108000: 0x80400000,
          0x118000: 0x80401040,
          0x128000: 0x0,
          0x138000: 0x401000,
          0x148000: 0x400040,
          0x158000: 0x80000000,
          0x168000: 0x80001040,
          0x178000: 0x40,
          0x188000: 0x80000040,
          0x198000: 0x1000,
          0x1a8000: 0x80001000,
          0x1b8000: 0x80400040,
          0x1c8000: 0x1040,
          0x1d8000: 0x80401000,
          0x1e8000: 0x400000,
          0x1f8000: 0x401040
        }, {
          0x0: 0x80,
          0x1000: 0x1040000,
          0x2000: 0x40000,
          0x3000: 0x20000000,
          0x4000: 0x20040080,
          0x5000: 0x1000080,
          0x6000: 0x21000080,
          0x7000: 0x40080,
          0x8000: 0x1000000,
          0x9000: 0x20040000,
          0xa000: 0x20000080,
          0xb000: 0x21040080,
          0xc000: 0x21040000,
          0xd000: 0x0,
          0xe000: 0x1040080,
          0xf000: 0x21000000,
          0x800: 0x1040080,
          0x1800: 0x21000080,
          0x2800: 0x80,
          0x3800: 0x1040000,
          0x4800: 0x40000,
          0x5800: 0x20040080,
          0x6800: 0x21040000,
          0x7800: 0x20000000,
          0x8800: 0x20040000,
          0x9800: 0x0,
          0xa800: 0x21040080,
          0xb800: 0x1000080,
          0xc800: 0x20000080,
          0xd800: 0x21000000,
          0xe800: 0x1000000,
          0xf800: 0x40080,
          0x10000: 0x40000,
          0x11000: 0x80,
          0x12000: 0x20000000,
          0x13000: 0x21000080,
          0x14000: 0x1000080,
          0x15000: 0x21040000,
          0x16000: 0x20040080,
          0x17000: 0x1000000,
          0x18000: 0x21040080,
          0x19000: 0x21000000,
          0x1a000: 0x1040000,
          0x1b000: 0x20040000,
          0x1c000: 0x40080,
          0x1d000: 0x20000080,
          0x1e000: 0x0,
          0x1f000: 0x1040080,
          0x10800: 0x21000080,
          0x11800: 0x1000000,
          0x12800: 0x1040000,
          0x13800: 0x20040080,
          0x14800: 0x20000000,
          0x15800: 0x1040080,
          0x16800: 0x80,
          0x17800: 0x21040000,
          0x18800: 0x40080,
          0x19800: 0x21040080,
          0x1a800: 0x0,
          0x1b800: 0x21000000,
          0x1c800: 0x1000080,
          0x1d800: 0x40000,
          0x1e800: 0x20040000,
          0x1f800: 0x20000080
        }, {
          0x0: 0x10000008,
          0x100: 0x2000,
          0x200: 0x10200000,
          0x300: 0x10202008,
          0x400: 0x10002000,
          0x500: 0x200000,
          0x600: 0x200008,
          0x700: 0x10000000,
          0x800: 0x0,
          0x900: 0x10002008,
          0xa00: 0x202000,
          0xb00: 0x8,
          0xc00: 0x10200008,
          0xd00: 0x202008,
          0xe00: 0x2008,
          0xf00: 0x10202000,
          0x80: 0x10200000,
          0x180: 0x10202008,
          0x280: 0x8,
          0x380: 0x200000,
          0x480: 0x202008,
          0x580: 0x10000008,
          0x680: 0x10002000,
          0x780: 0x2008,
          0x880: 0x200008,
          0x980: 0x2000,
          0xa80: 0x10002008,
          0xb80: 0x10200008,
          0xc80: 0x0,
          0xd80: 0x10202000,
          0xe80: 0x202000,
          0xf80: 0x10000000,
          0x1000: 0x10002000,
          0x1100: 0x10200008,
          0x1200: 0x10202008,
          0x1300: 0x2008,
          0x1400: 0x200000,
          0x1500: 0x10000000,
          0x1600: 0x10000008,
          0x1700: 0x202000,
          0x1800: 0x202008,
          0x1900: 0x0,
          0x1a00: 0x8,
          0x1b00: 0x10200000,
          0x1c00: 0x2000,
          0x1d00: 0x10002008,
          0x1e00: 0x10202000,
          0x1f00: 0x200008,
          0x1080: 0x8,
          0x1180: 0x202000,
          0x1280: 0x200000,
          0x1380: 0x10000008,
          0x1480: 0x10002000,
          0x1580: 0x2008,
          0x1680: 0x10202008,
          0x1780: 0x10200000,
          0x1880: 0x10202000,
          0x1980: 0x10200008,
          0x1a80: 0x2000,
          0x1b80: 0x202008,
          0x1c80: 0x200008,
          0x1d80: 0x0,
          0x1e80: 0x10000000,
          0x1f80: 0x10002008
        }, {
          0x0: 0x100000,
          0x10: 0x2000401,
          0x20: 0x400,
          0x30: 0x100401,
          0x40: 0x2100401,
          0x50: 0x0,
          0x60: 0x1,
          0x70: 0x2100001,
          0x80: 0x2000400,
          0x90: 0x100001,
          0xa0: 0x2000001,
          0xb0: 0x2100400,
          0xc0: 0x2100000,
          0xd0: 0x401,
          0xe0: 0x100400,
          0xf0: 0x2000000,
          0x8: 0x2100001,
          0x18: 0x0,
          0x28: 0x2000401,
          0x38: 0x2100400,
          0x48: 0x100000,
          0x58: 0x2000001,
          0x68: 0x2000000,
          0x78: 0x401,
          0x88: 0x100401,
          0x98: 0x2000400,
          0xa8: 0x2100000,
          0xb8: 0x100001,
          0xc8: 0x400,
          0xd8: 0x2100401,
          0xe8: 0x1,
          0xf8: 0x100400,
          0x100: 0x2000000,
          0x110: 0x100000,
          0x120: 0x2000401,
          0x130: 0x2100001,
          0x140: 0x100001,
          0x150: 0x2000400,
          0x160: 0x2100400,
          0x170: 0x100401,
          0x180: 0x401,
          0x190: 0x2100401,
          0x1a0: 0x100400,
          0x1b0: 0x1,
          0x1c0: 0x0,
          0x1d0: 0x2100000,
          0x1e0: 0x2000001,
          0x1f0: 0x400,
          0x108: 0x100400,
          0x118: 0x2000401,
          0x128: 0x2100001,
          0x138: 0x1,
          0x148: 0x2000000,
          0x158: 0x100000,
          0x168: 0x401,
          0x178: 0x2100400,
          0x188: 0x2000001,
          0x198: 0x2100000,
          0x1a8: 0x0,
          0x1b8: 0x2100401,
          0x1c8: 0x100401,
          0x1d8: 0x400,
          0x1e8: 0x2000400,
          0x1f8: 0x100001
        }, {
          0x0: 0x8000820,
          0x1: 0x20000,
          0x2: 0x8000000,
          0x3: 0x20,
          0x4: 0x20020,
          0x5: 0x8020820,
          0x6: 0x8020800,
          0x7: 0x800,
          0x8: 0x8020000,
          0x9: 0x8000800,
          0xa: 0x20800,
          0xb: 0x8020020,
          0xc: 0x820,
          0xd: 0x0,
          0xe: 0x8000020,
          0xf: 0x20820,
          0x80000000: 0x800,
          0x80000001: 0x8020820,
          0x80000002: 0x8000820,
          0x80000003: 0x8000000,
          0x80000004: 0x8020000,
          0x80000005: 0x20800,
          0x80000006: 0x20820,
          0x80000007: 0x20,
          0x80000008: 0x8000020,
          0x80000009: 0x820,
          0x8000000a: 0x20020,
          0x8000000b: 0x8020800,
          0x8000000c: 0x0,
          0x8000000d: 0x8020020,
          0x8000000e: 0x8000800,
          0x8000000f: 0x20000,
          0x10: 0x20820,
          0x11: 0x8020800,
          0x12: 0x20,
          0x13: 0x800,
          0x14: 0x8000800,
          0x15: 0x8000020,
          0x16: 0x8020020,
          0x17: 0x20000,
          0x18: 0x0,
          0x19: 0x20020,
          0x1a: 0x8020000,
          0x1b: 0x8000820,
          0x1c: 0x8020820,
          0x1d: 0x20800,
          0x1e: 0x820,
          0x1f: 0x8000000,
          0x80000010: 0x20000,
          0x80000011: 0x800,
          0x80000012: 0x8020020,
          0x80000013: 0x20820,
          0x80000014: 0x20,
          0x80000015: 0x8020000,
          0x80000016: 0x8000000,
          0x80000017: 0x8000820,
          0x80000018: 0x8020820,
          0x80000019: 0x8000020,
          0x8000001a: 0x8000800,
          0x8000001b: 0x0,
          0x8000001c: 0x20800,
          0x8000001d: 0x820,
          0x8000001e: 0x20020,
          0x8000001f: 0x8020800
        }]; // Masks that select the SBOX input

        var SBOX_MASK = [0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000, 0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f];
        /**
         * DES block cipher algorithm.
         */

        var DES = C_algo.DES = BlockCipher.extend({
          _doReset: function _doReset() {
            // Shortcuts
            var key = this._key;
            var keyWords = key.words; // Select 56 bits according to PC1

            var keyBits = [];

            for (var i = 0; i < 56; i++) {
              var keyBitPos = PC1[i] - 1;
              keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
            } // Assemble 16 subkeys


            var subKeys = this._subKeys = [];

            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
              // Create subkey
              var subKey = subKeys[nSubKey] = []; // Shortcut

              var bitShift = BIT_SHIFTS[nSubKey]; // Select 48 bits according to PC2

              for (var i = 0; i < 24; i++) {
                // Select from the left 28 key bits
                subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6; // Select from the right 28 key bits

                subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
              } // Since each subkey is applied to an expanded 32-bit input,
              // the subkey can be broken into 8 values scaled to 32-bits,
              // which allows the key to be used without expansion


              subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;

              for (var i = 1; i < 7; i++) {
                subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
              }

              subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
            } // Compute inverse subkeys


            var invSubKeys = this._invSubKeys = [];

            for (var i = 0; i < 16; i++) {
              invSubKeys[i] = subKeys[15 - i];
            }
          },
          encryptBlock: function encryptBlock(M, offset) {
            this._doCryptBlock(M, offset, this._subKeys);
          },
          decryptBlock: function decryptBlock(M, offset) {
            this._doCryptBlock(M, offset, this._invSubKeys);
          },
          _doCryptBlock: function _doCryptBlock(M, offset, subKeys) {
            // Get input
            this._lBlock = M[offset];
            this._rBlock = M[offset + 1]; // Initial permutation

            exchangeLR.call(this, 4, 0x0f0f0f0f);
            exchangeLR.call(this, 16, 0x0000ffff);
            exchangeRL.call(this, 2, 0x33333333);
            exchangeRL.call(this, 8, 0x00ff00ff);
            exchangeLR.call(this, 1, 0x55555555); // Rounds

            for (var round = 0; round < 16; round++) {
              // Shortcuts
              var subKey = subKeys[round];
              var lBlock = this._lBlock;
              var rBlock = this._rBlock; // Feistel function

              var f = 0;

              for (var i = 0; i < 8; i++) {
                f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
              }

              this._lBlock = rBlock;
              this._rBlock = lBlock ^ f;
            } // Undo swap from last round


            var t = this._lBlock;
            this._lBlock = this._rBlock;
            this._rBlock = t; // Final permutation

            exchangeLR.call(this, 1, 0x55555555);
            exchangeRL.call(this, 8, 0x00ff00ff);
            exchangeRL.call(this, 2, 0x33333333);
            exchangeLR.call(this, 16, 0x0000ffff);
            exchangeLR.call(this, 4, 0x0f0f0f0f); // Set output

            M[offset] = this._lBlock;
            M[offset + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        }); // Swap bits across the left and right words

        function exchangeLR(offset, mask) {
          var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
          this._rBlock ^= t;
          this._lBlock ^= t << offset;
        }

        function exchangeRL(offset, mask) {
          var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
          this._lBlock ^= t;
          this._rBlock ^= t << offset;
        }
        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
         */


        C.DES = BlockCipher._createHelper(DES);
        /**
         * Triple-DES block cipher algorithm.
         */

        var TripleDES = C_algo.TripleDES = BlockCipher.extend({
          _doReset: function _doReset() {
            // Shortcuts
            var key = this._key;
            var keyWords = key.words; // Create DES instances

            this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
            this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
            this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
          },
          encryptBlock: function encryptBlock(M, offset) {
            this._des1.encryptBlock(M, offset);

            this._des2.decryptBlock(M, offset);

            this._des3.encryptBlock(M, offset);
          },
          decryptBlock: function decryptBlock(M, offset) {
            this._des3.decryptBlock(M, offset);

            this._des2.encryptBlock(M, offset);

            this._des1.decryptBlock(M, offset);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        /**
         * Shortcut functions to the cipher's object interface.
         *
         * @example
         *
         *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
         *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
         */

        C.TripleDES = BlockCipher._createHelper(TripleDES);
      })();

      return CryptoJS.TripleDES;
    });
    /***/

  },

  /***/
  "./node_modules/crypto-js/x64-core.js":
  /*!********************************************!*\
    !*** ./node_modules/crypto-js/x64-core.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCryptoJsX64CoreJs(module, exports, __webpack_require__) {
    ;

    (function (root, factory) {
      if (true) {
        // CommonJS
        module.exports = exports = factory(__webpack_require__(
        /*! ./core */
        "./node_modules/crypto-js/core.js"));
      } else {}
    })(this, function (CryptoJS) {
      (function (undefined) {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var X32WordArray = C_lib.WordArray;
        /**
         * x64 namespace.
         */

        var C_x64 = C.x64 = {};
        /**
         * A 64-bit word.
         */

        var X64Word = C_x64.Word = Base.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function init(high, low) {
            this.high = high;
            this.low = low;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },

          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },

          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },

          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },

          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },

          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },

          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },

          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },

          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }

        });
        /**
         * An array of 64-bit words.
         *
         * @property {Array} words The array of CryptoJS.x64.Word objects.
         * @property {number} sigBytes The number of significant bytes in this word array.
         */

        var X64WordArray = C_x64.WordArray = Base.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function init(words, sigBytes) {
            words = this.words = words || [];

            if (sigBytes != undefined) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 8;
            }
          },

          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function toX32() {
            // Shortcuts
            var x64Words = this.words;
            var x64WordsLength = x64Words.length; // Convert

            var x32Words = [];

            for (var i = 0; i < x64WordsLength; i++) {
              var x64Word = x64Words[i];
              x32Words.push(x64Word.high);
              x32Words.push(x64Word.low);
            }

            return X32WordArray.create(x32Words, this.sigBytes);
          },

          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function clone() {
            var clone = Base.clone.call(this); // Clone "words" array

            var words = clone.words = this.words.slice(0); // Clone each X64Word object

            var wordsLength = words.length;

            for (var i = 0; i < wordsLength; i++) {
              words[i] = words[i].clone();
            }

            return clone;
          }
        });
      })();

      return CryptoJS;
    });
    /***/

  },

  /***/
  "./node_modules/ethereumjs-common/dist/chains/goerli.json":
  /*!****************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/chains/goerli.json ***!
    \****************************************************************/

  /*! exports provided: name, chainId, networkId, comment, url, genesis, hardforks, bootstrapNodes, default */

  /***/
  function node_modulesEthereumjsCommonDistChainsGoerliJson(module) {
    module.exports = JSON.parse("{\"name\":\"goerli\",\"chainId\":5,\"networkId\":5,\"comment\":\"Cross-client PoA test network\",\"url\":\"https://github.com/goerli/testnet\",\"genesis\":{\"hash\":\"0xbf7e331f7f7c1dd2e05159666b3bf8bc7a8a3a9eb1d518969eab529dd9b88c1a\",\"timestamp\":\"0x5c51a607\",\"gasLimit\":10485760,\"difficulty\":1,\"nonce\":\"0x0000000000000000\",\"extraData\":\"0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\"stateRoot\":\"0x5d6cded585e73c4e322c30c2f782a336316f17dd85a4863b9d838d2d4b8b3008\"},\"hardforks\":[{\"name\":\"chainstart\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"homestead\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"dao\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"tangerineWhistle\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"spuriousDragon\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"byzantium\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"constantinople\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"petersburg\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"istanbul\",\"block\":null,\"consensus\":\"poa\",\"finality\":null}],\"bootstrapNodes\":[{\"ip\":\"51.141.78.53\",\"port\":30303,\"id\":\"011f758e6552d105183b1761c5e2dea0111bc20fd5f6422bc7f91e0fabbec9a6595caf6239b37feb773dddd3f87240d99d859431891e4a642cf2a0a9e6cbb98a\",\"location\":\"\",\"comment\":\"Source: https://github.com/goerli/testnet/blob/master/bootnodes.txt\"},{\"ip\":\"13.93.54.137\",\"port\":30303,\"id\":\"176b9417f511d05b6b2cf3e34b756cf0a7096b3094572a8f6ef4cdcb9d1f9d00683bf0f83347eebdf3b81c3521c2332086d9592802230bf528eaf606a1d9677b\",\"location\":\"\",\"comment\":\"Source: https://github.com/goerli/testnet/blob/master/bootnodes.txt\"},{\"ip\":\"94.237.54.114\",\"port\":30313,\"id\":\"46add44b9f13965f7b9875ac6b85f016f341012d84f975377573800a863526f4da19ae2c620ec73d11591fa9510e992ecc03ad0751f53cc02f7c7ed6d55c7291\",\"location\":\"\",\"comment\":\"Source: https://github.com/goerli/testnet/blob/master/bootnodes.txt\"},{\"ip\":\"52.64.155.147\",\"port\":30303,\"id\":\"c1f8b7c2ac4453271fa07d8e9ecf9a2e8285aa0bd0c07df0131f47153306b0736fd3db8924e7a9bf0bed6b1d8d4f87362a71b033dc7c64547728d953e43e59b2\",\"location\":\"\",\"comment\":\"Source: https://github.com/goerli/testnet/blob/master/bootnodes.txt\"},{\"ip\":\"213.186.16.82\",\"port\":30303,\"id\":\"f4a9c6ee28586009fb5a96c8af13a58ed6d8315a9eee4772212c1d4d9cebe5a8b8a78ea4434f318726317d04a3f531a1ef0420cf9752605a562cfe858c46e263\",\"location\":\"\",\"comment\":\"Source: https://github.com/goerli/testnet/blob/master/bootnodes.txt\"}]}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/chains/index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/chains/index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesEthereumjsCommonDistChainsIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.chains = {
      names: {
        '1': 'mainnet',
        '3': 'ropsten',
        '4': 'rinkeby',
        '42': 'kovan',
        '6284': 'goerli'
      },
      mainnet: __webpack_require__(
      /*! ./mainnet.json */
      "./node_modules/ethereumjs-common/dist/chains/mainnet.json"),
      ropsten: __webpack_require__(
      /*! ./ropsten.json */
      "./node_modules/ethereumjs-common/dist/chains/ropsten.json"),
      rinkeby: __webpack_require__(
      /*! ./rinkeby.json */
      "./node_modules/ethereumjs-common/dist/chains/rinkeby.json"),
      kovan: __webpack_require__(
      /*! ./kovan.json */
      "./node_modules/ethereumjs-common/dist/chains/kovan.json"),
      goerli: __webpack_require__(
      /*! ./goerli.json */
      "./node_modules/ethereumjs-common/dist/chains/goerli.json")
    }; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/chains/kovan.json":
  /*!***************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/chains/kovan.json ***!
    \***************************************************************/

  /*! exports provided: name, chainId, networkId, comment, url, genesis, hardforks, bootstrapNodes, default */

  /***/
  function node_modulesEthereumjsCommonDistChainsKovanJson(module) {
    module.exports = JSON.parse("{\"name\":\"kovan\",\"chainId\":42,\"networkId\":42,\"comment\":\"Parity PoA test network\",\"url\":\"https://kovan-testnet.github.io/website/\",\"genesis\":{\"hash\":\"0xa3c565fc15c7478862d50ccd6561e3c06b24cc509bf388941c25ea985ce32cb9\",\"timestamp\":null,\"gasLimit\":6000000,\"difficulty\":131072,\"nonce\":\"0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\"extraData\":\"0x\",\"stateRoot\":\"0x2480155b48a1cea17d67dbfdfaafe821c1d19cdd478c5358e8ec56dec24502b2\"},\"hardforks\":[],\"bootstrapNodes\":[{\"ip\":\"40.71.221.215\",\"port\":30303,\"id\":\"56abaf065581a5985b8c5f4f88bd202526482761ba10be9bfdcd14846dd01f652ec33fde0f8c0fd1db19b59a4c04465681fcef50e11380ca88d25996191c52de\",\"location\":\"\",\"comment\":\"Parity Bootnode\"},{\"ip\":\"52.166.117.77\",\"port\":30303,\"id\":\"d07827483dc47b368eaf88454fb04b41b7452cf454e194e2bd4c14f98a3278fed5d819dbecd0d010407fc7688d941ee1e58d4f9c6354d3da3be92f55c17d7ce3\",\"location\":\"\",\"comment\":\"Parity Bootnode\"},{\"ip\":\"52.165.239.18\",\"port\":30303,\"id\":\"8fa162563a8e5a05eef3e1cd5abc5828c71344f7277bb788a395cce4a0e30baf2b34b92fe0b2dbbba2313ee40236bae2aab3c9811941b9f5a7e8e90aaa27ecba\",\"location\":\"\",\"comment\":\"Parity Bootnode\"},{\"ip\":\"52.243.47.56\",\"port\":30303,\"id\":\"7e2e7f00784f516939f94e22bdc6cf96153603ca2b5df1c7cc0f90a38e7a2f218ffb1c05b156835e8b49086d11fdd1b3e2965be16baa55204167aa9bf536a4d9\",\"location\":\"\",\"comment\":\"Parity Bootnode\"},{\"ip\":\"40.68.248.100\",\"port\":30303,\"id\":\"0518a3d35d4a7b3e8c433e7ffd2355d84a1304ceb5ef349787b556197f0c87fad09daed760635b97d52179d645d3e6d16a37d2cc0a9945c2ddf585684beb39ac\",\"location\":\"\",\"comment\":\"Parity Bootnode\"}]}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/chains/mainnet.json":
  /*!*****************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/chains/mainnet.json ***!
    \*****************************************************************/

  /*! exports provided: name, chainId, networkId, comment, url, genesis, hardforks, bootstrapNodes, default */

  /***/
  function node_modulesEthereumjsCommonDistChainsMainnetJson(module) {
    module.exports = JSON.parse("{\"name\":\"mainnet\",\"chainId\":1,\"networkId\":1,\"comment\":\"The Ethereum main chain\",\"url\":\"https://ethstats.net/\",\"genesis\":{\"hash\":\"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3\",\"timestamp\":null,\"gasLimit\":5000,\"difficulty\":17179869184,\"nonce\":\"0x0000000000000042\",\"extraData\":\"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa\",\"stateRoot\":\"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544\"},\"hardforks\":[{\"name\":\"chainstart\",\"block\":0,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"homestead\",\"block\":1150000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"dao\",\"block\":1920000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"tangerineWhistle\",\"block\":2463000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"spuriousDragon\",\"block\":2675000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"byzantium\",\"block\":4370000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"constantinople\",\"block\":7280000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"petersburg\",\"block\":7280000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"istanbul\",\"block\":null,\"consensus\":\"pow\",\"finality\":null}],\"bootstrapNodes\":[{\"ip\":\"13.93.211.84\",\"port\":30303,\"id\":\"3f1d12044546b76342d59d4a05532c14b85aa669704bfe1f864fe079415aa2c02d743e03218e57a33fb94523adb54032871a6c51b2cc5514cb7c7e35b3ed0a99\",\"location\":\"US-WEST\",\"comment\":\"Go Bootnode\"},{\"ip\":\"191.235.84.50\",\"port\":30303,\"id\":\"78de8a0916848093c73790ead81d1928bec737d565119932b98c6b100d944b7a95e94f847f689fc723399d2e31129d182f7ef3863f2b4c820abbf3ab2722344d\",\"location\":\"BR\",\"comment\":\"Go Bootnode\"},{\"ip\":\"13.75.154.138\",\"port\":30303,\"id\":\"158f8aab45f6d19c6cbf4a089c2670541a8da11978a2f90dbf6a502a4a3bab80d288afdbeb7ec0ef6d92de563767f3b1ea9e8e334ca711e9f8e2df5a0385e8e6\",\"location\":\"AU\",\"comment\":\"Go Bootnode\"},{\"ip\":\"52.74.57.123\",\"port\":30303,\"id\":\"1118980bf48b0a3640bdba04e0fe78b1add18e1cd99bf22d53daac1fd9972ad650df52176e7c7d89d1114cfef2bc23a2959aa54998a46afcf7d91809f0855082\",\"location\":\"SG\",\"comment\":\"Go Bootnode\"}]}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/chains/rinkeby.json":
  /*!*****************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/chains/rinkeby.json ***!
    \*****************************************************************/

  /*! exports provided: name, chainId, networkId, comment, url, genesis, hardforks, bootstrapNodes, default */

  /***/
  function node_modulesEthereumjsCommonDistChainsRinkebyJson(module) {
    module.exports = JSON.parse("{\"name\":\"rinkeby\",\"chainId\":4,\"networkId\":4,\"comment\":\"PoA test network\",\"url\":\"https://www.rinkeby.io\",\"genesis\":{\"hash\":\"0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177\",\"timestamp\":\"0x58ee40ba\",\"gasLimit\":4700000,\"difficulty\":1,\"nonce\":\"0x0000000000000000\",\"extraData\":\"0x52657370656374206d7920617574686f7269746168207e452e436172746d616e42eb768f2244c8811c63729a21a3569731535f067ffc57839b00206d1ad20c69a1981b489f772031b279182d99e65703f0076e4812653aab85fca0f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\"stateRoot\":\"0x53580584816f617295ea26c0e17641e0120cab2f0a8ffb53a866fd53aa8e8c2d\"},\"hardforks\":[{\"name\":\"chainstart\",\"block\":0,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"homestead\",\"block\":1,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"dao\",\"block\":null,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"tangerineWhistle\",\"block\":2,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"spuriousDragon\",\"block\":3,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"byzantium\",\"block\":1035301,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"constantinople\",\"block\":null,\"consensus\":\"poa\",\"finality\":null},{\"name\":\"istanbul\",\"block\":null,\"consensus\":\"poa\",\"finality\":null}],\"bootstrapNodes\":[{\"ip\":\"52.169.42.101\",\"port\":30303,\"id\":\"a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf\",\"location\":\"IE\",\"comment\":\"\"},{\"ip\":\"52.3.158.184\",\"port\":30303,\"id\":\"343149e4feefa15d882d9fe4ac7d88f885bd05ebb735e547f12e12080a9fa07c8014ca6fd7f373123488102fe5e34111f8509cf0b7de3f5b44339c9f25e87cb8\",\"location\":\"\",\"comment\":\"INFURA\"}]}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/chains/ropsten.json":
  /*!*****************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/chains/ropsten.json ***!
    \*****************************************************************/

  /*! exports provided: name, chainId, networkId, comment, url, genesis, hardforks, bootstrapNodes, default */

  /***/
  function node_modulesEthereumjsCommonDistChainsRopstenJson(module) {
    module.exports = JSON.parse("{\"name\":\"ropsten\",\"chainId\":3,\"networkId\":3,\"comment\":\"PoW test network\",\"url\":\"https://github.com/ethereum/ropsten\",\"genesis\":{\"hash\":\"0x41941023680923e0fe4d74a34bdac8141f2540e3ae90623718e47d66d1ca4a2d\",\"timestamp\":null,\"gasLimit\":16777216,\"difficulty\":1048576,\"nonce\":\"0x0000000000000042\",\"extraData\":\"0x3535353535353535353535353535353535353535353535353535353535353535\",\"stateRoot\":\"0x217b0bbcfb72e2d57e28f33cb361b9983513177755dc3f33ce3e7022ed62b77b\"},\"hardforks\":[{\"name\":\"chainstart\",\"block\":0,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"homestead\",\"block\":0,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"dao\",\"block\":null,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"tangerineWhistle\",\"block\":0,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"spuriousDragon\",\"block\":10,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"byzantium\",\"block\":1700000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"constantinople\",\"block\":4230000,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"petersburg\",\"block\":4939394,\"consensus\":\"pow\",\"finality\":null},{\"name\":\"istanbul\",\"block\":null,\"consensus\":\"pow\",\"finality\":null}],\"bootstrapNodes\":[{\"ip\":\"52.176.7.10\",\"port\":\"30303\",\"id\":\"30b7ab30a01c124a6cceca36863ece12c4f5fa68e3ba9b0b51407ccc002eeed3b3102d20a88f1c1d3c3154e2449317b8ef95090e77b312d5cc39354f86d5d606\",\"network\":\"Ropsten\",\"chainId\":3,\"location\":\"US\",\"comment\":\"US-Azure geth\"},{\"ip\":\"52.176.100.77\",\"port\":\"30303\",\"id\":\"865a63255b3bb68023b6bffd5095118fcc13e79dcf014fe4e47e065c350c7cc72af2e53eff895f11ba1bbb6a2b33271c1116ee870f266618eadfc2e78aa7349c\",\"network\":\"Ropsten\",\"chainId\":3,\"location\":\"US\",\"comment\":\"US-Azure parity\"},{\"ip\":\"52.232.243.152\",\"port\":\"30303\",\"id\":\"6332792c4a00e3e4ee0926ed89e0d27ef985424d97b6a45bf0f23e51f0dcb5e66b875777506458aea7af6f9e4ffb69f43f3778ee73c81ed9d34c51c4b16b0b0f\",\"network\":\"Ropsten\",\"chainId\":3,\"location\":\"US\",\"comment\":\"Parity\"},{\"ip\":\"192.81.208.223\",\"port\":\"30303\",\"id\":\"94c15d1b9e2fe7ce56e458b9a3b672ef11894ddedd0c6f247e0f1d3487f52b66208fb4aeb8179fce6e3a749ea93ed147c37976d67af557508d199d9594c35f09\",\"network\":\"Ropsten\",\"chainId\":3,\"location\":\"US\",\"comment\":\"@gpip\"}]}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/hardforks/byzantium.json":
  /*!**********************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/hardforks/byzantium.json ***!
    \**********************************************************************/

  /*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */

  /***/
  function node_modulesEthereumjsCommonDistHardforksByzantiumJson(module) {
    module.exports = JSON.parse("{\"name\":\"byzantium\",\"comment\":\"Hardfork with new precompiles, instructions and other protocol changes\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-609\",\"status\":\"Final\"},\"gasConfig\":{},\"gasPrices\":{\"modexpGquaddivisor\":{\"v\":20,\"d\":\"Gquaddivisor from modexp precompile for gas calculation\"},\"ecAdd\":{\"v\":500,\"d\":\"Gas costs for curve addition precompile\"},\"ecMul\":{\"v\":40000,\"d\":\"Gas costs for curve multiplication precompile\"},\"ecPairing\":{\"v\":100000,\"d\":\"Base gas costs for curve pairing precompile\"},\"ecPairingWord\":{\"v\":80000,\"d\":\"Gas costs regarding curve pairing precompile input length\"}},\"vm\":{},\"pow\":{\"minerReward\":{\"v\":\"3000000000000000000\",\"d\":\"the amount a miner get rewarded for mining a block\"}},\"casper\":{},\"sharding\":{}}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/hardforks/chainstart.json":
  /*!***********************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/hardforks/chainstart.json ***!
    \***********************************************************************/

  /*! exports provided: name, comment, eip, status, gasConfig, gasPrices, vm, pow, casper, sharding, default */

  /***/
  function node_modulesEthereumjsCommonDistHardforksChainstartJson(module) {
    module.exports = JSON.parse("{\"name\":\"chainstart\",\"comment\":\"Start of the Ethereum main chain\",\"eip\":{\"url\":\"\",\"status\":\"\"},\"status\":\"\",\"gasConfig\":{\"minGasLimit\":{\"v\":5000,\"d\":\"Minimum the gas limit may ever be\"},\"gasLimitBoundDivisor\":{\"v\":1024,\"d\":\"The bound divisor of the gas limit, used in update calculations\"}},\"gasPrices\":{\"base\":{\"v\":2,\"d\":\"Gas base cost, used e.g. for ChainID opcode (Istanbul)\"},\"tierStep\":{\"v\":[0,2,3,5,8,10,20],\"d\":\"Once per operation, for a selection of them\"},\"exp\":{\"v\":10,\"d\":\"Once per EXP instuction\"},\"expByte\":{\"v\":10,\"d\":\"Times ceil(log256(exponent)) for the EXP instruction\"},\"sha3\":{\"v\":30,\"d\":\"Once per SHA3 operation\"},\"sha3Word\":{\"v\":6,\"d\":\"Once per word of the SHA3 operation's data\"},\"sload\":{\"v\":50,\"d\":\"Once per SLOAD operation\"},\"sstoreSet\":{\"v\":20000,\"d\":\"Once per SSTORE operation if the zeroness changes from zero\"},\"sstoreReset\":{\"v\":5000,\"d\":\"Once per SSTORE operation if the zeroness does not change from zero\"},\"sstoreRefund\":{\"v\":15000,\"d\":\"Once per SSTORE operation if the zeroness changes to zero\"},\"jumpdest\":{\"v\":1,\"d\":\"Refunded gas, once per SSTORE operation if the zeroness changes to zero\"},\"log\":{\"v\":375,\"d\":\"Per LOG* operation\"},\"logData\":{\"v\":8,\"d\":\"Per byte in a LOG* operation's data\"},\"logTopic\":{\"v\":375,\"d\":\"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas\"},\"create\":{\"v\":32000,\"d\":\"Once per CREATE operation & contract-creation transaction\"},\"call\":{\"v\":40,\"d\":\"Once per CALL operation & message call transaction\"},\"callStipend\":{\"v\":2300,\"d\":\"Free gas given at beginning of call\"},\"callValueTransfer\":{\"v\":9000,\"d\":\"Paid for CALL when the value transfor is non-zero\"},\"callNewAccount\":{\"v\":25000,\"d\":\"Paid for CALL when the destination address didn't exist prior\"},\"selfdestructRefund\":{\"v\":24000,\"d\":\"Refunded following a selfdestruct operation\"},\"memory\":{\"v\":3,\"d\":\"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL\"},\"quadCoeffDiv\":{\"v\":512,\"d\":\"Divisor for the quadratic particle of the memory cost equation\"},\"createData\":{\"v\":200,\"d\":\"\"},\"tx\":{\"v\":21000,\"d\":\"Per transaction. NOTE: Not payable on data of calls between transactions\"},\"txCreation\":{\"v\":32000,\"d\":\"The cost of creating a contract via tx\"},\"txDataZero\":{\"v\":4,\"d\":\"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions\"},\"txDataNonZero\":{\"v\":68,\"d\":\"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions\"},\"copy\":{\"v\":3,\"d\":\"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added\"},\"ecRecover\":{\"v\":3000,\"d\":\"\"},\"sha256\":{\"v\":60,\"d\":\"\"},\"sha256Word\":{\"v\":12,\"d\":\"\"},\"ripemd160\":{\"v\":600,\"d\":\"\"},\"ripemd160Word\":{\"v\":120,\"d\":\"\"},\"identity\":{\"v\":15,\"d\":\"\"},\"identityWord\":{\"v\":3,\"d\":\"\"}},\"vm\":{\"stackLimit\":{\"v\":1024,\"d\":\"Maximum size of VM stack allowed\"},\"callCreateDepth\":{\"v\":1024,\"d\":\"Maximum depth of call/create stack\"},\"maxExtraDataSize\":{\"v\":32,\"d\":\"Maximum size extra data may be after Genesis\"}},\"pow\":{\"minimumDifficulty\":{\"v\":131072,\"d\":\"The minimum that the difficulty may ever be\"},\"difficultyBoundDivisor\":{\"v\":2048,\"d\":\"The bound divisor of the difficulty, used in the update calculations\"},\"durationLimit\":{\"v\":13,\"d\":\"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not\"},\"epochDuration\":{\"v\":30000,\"d\":\"Duration between proof-of-work epochs\"},\"timebombPeriod\":{\"v\":100000,\"d\":\"Exponential difficulty timebomb period\"},\"minerReward\":{\"v\":\"5000000000000000000\",\"d\":\"the amount a miner get rewarded for mining a block\"}},\"casper\":{},\"sharding\":{}}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/hardforks/constantinople.json":
  /*!***************************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/hardforks/constantinople.json ***!
    \***************************************************************************/

  /*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */

  /***/
  function node_modulesEthereumjsCommonDistHardforksConstantinopleJson(module) {
    module.exports = JSON.parse("{\"name\":\"constantinople\",\"comment\":\"Postponed hardfork including EIP-1283 (SSTORE gas metering changes)\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-1013\",\"status\":\"Final\"},\"gasConfig\":{},\"gasPrices\":{\"netSstoreNoopGas\":{\"v\":200,\"d\":\"Once per SSTORE operation if the value doesn't change\"},\"netSstoreInitGas\":{\"v\":20000,\"d\":\"Once per SSTORE operation from clean zero\"},\"netSstoreCleanGas\":{\"v\":5000,\"d\":\"Once per SSTORE operation from clean non-zero\"},\"netSstoreDirtyGas\":{\"v\":200,\"d\":\"Once per SSTORE operation from dirty\"},\"netSstoreClearRefund\":{\"v\":15000,\"d\":\"Once per SSTORE operation for clearing an originally existing storage slot\"},\"netSstoreResetRefund\":{\"v\":4800,\"d\":\"Once per SSTORE operation for resetting to the original non-zero value\"},\"netSstoreResetClearRefund\":{\"v\":19800,\"d\":\"Once per SSTORE operation for resetting to the original zero value\"}},\"vm\":{},\"pow\":{\"minerReward\":{\"v\":\"2000000000000000000\",\"d\":\"The amount a miner gets rewarded for mining a block\"}},\"casper\":{},\"sharding\":{}}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/hardforks/dao.json":
  /*!****************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/hardforks/dao.json ***!
    \****************************************************************/

  /*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */

  /***/
  function node_modulesEthereumjsCommonDistHardforksDaoJson(module) {
    module.exports = JSON.parse("{\"name\":\"dao\",\"comment\":\"DAO rescue hardfork\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-779\",\"status\":\"Final\"},\"gasConfig\":{},\"gasPrices\":{},\"vm\":{},\"pow\":{},\"casper\":{},\"sharding\":{}}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/hardforks/homestead.json":
  /*!**********************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/hardforks/homestead.json ***!
    \**********************************************************************/

  /*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */

  /***/
  function node_modulesEthereumjsCommonDistHardforksHomesteadJson(module) {
    module.exports = JSON.parse("{\"name\":\"homestead\",\"comment\":\"Homestead hardfork with protocol and network changes\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-606\",\"status\":\"Final\"},\"gasConfig\":{},\"gasPrices\":{},\"vm\":{},\"pow\":{},\"casper\":{},\"sharding\":{}}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/hardforks/index.js":
  /*!****************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/hardforks/index.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesEthereumjsCommonDistHardforksIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.hardforks = [['chainstart', __webpack_require__(
    /*! ./chainstart.json */
    "./node_modules/ethereumjs-common/dist/hardforks/chainstart.json")], ['homestead', __webpack_require__(
    /*! ./homestead.json */
    "./node_modules/ethereumjs-common/dist/hardforks/homestead.json")], ['dao', __webpack_require__(
    /*! ./dao.json */
    "./node_modules/ethereumjs-common/dist/hardforks/dao.json")], ['tangerineWhistle', __webpack_require__(
    /*! ./tangerineWhistle.json */
    "./node_modules/ethereumjs-common/dist/hardforks/tangerineWhistle.json")], ['spuriousDragon', __webpack_require__(
    /*! ./spuriousDragon.json */
    "./node_modules/ethereumjs-common/dist/hardforks/spuriousDragon.json")], ['byzantium', __webpack_require__(
    /*! ./byzantium.json */
    "./node_modules/ethereumjs-common/dist/hardforks/byzantium.json")], ['constantinople', __webpack_require__(
    /*! ./constantinople.json */
    "./node_modules/ethereumjs-common/dist/hardforks/constantinople.json")], ['petersburg', __webpack_require__(
    /*! ./petersburg.json */
    "./node_modules/ethereumjs-common/dist/hardforks/petersburg.json")], ['istanbul', __webpack_require__(
    /*! ./istanbul.json */
    "./node_modules/ethereumjs-common/dist/hardforks/istanbul.json")]]; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/hardforks/istanbul.json":
  /*!*********************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/hardforks/istanbul.json ***!
    \*********************************************************************/

  /*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */

  /***/
  function node_modulesEthereumjsCommonDistHardforksIstanbulJson(module) {
    module.exports = JSON.parse("{\"name\":\"istanbul\",\"comment\":\"HF targeted for October 2019 following the Constantinople/Petersburg HF\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-1679\",\"status\":\"Draft\"},\"gasConfig\":{},\"gasPrices\":{\"blake2Round\":{\"v\":1,\"d\":\"Gas cost per round for the Blake2 F precompile\"},\"ecAdd\":{\"v\":150,\"d\":\"Gas costs for curve addition precompile\"},\"ecMul\":{\"v\":6000,\"d\":\"Gas costs for curve multiplication precompile\"},\"ecPairing\":{\"v\":45000,\"d\":\"Base gas costs for curve pairing precompile\"},\"ecPairingWord\":{\"v\":34000,\"d\":\"Gas costs regarding curve pairing precompile input length\"},\"txDataNonZero\":{\"v\":16,\"d\":\"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions\"},\"sstoreSentryGasEIP2200\":{\"v\":2300,\"d\":\"Minimum gas required to be present for an SSTORE call, not consumed\"},\"sstoreNoopGasEIP2200\":{\"v\":800,\"d\":\"Once per SSTORE operation if the value doesn't change\"},\"sstoreDirtyGasEIP2200\":{\"v\":800,\"d\":\"Once per SSTORE operation if a dirty value is changed\"},\"sstoreInitGasEIP2200\":{\"v\":20000,\"d\":\"Once per SSTORE operation from clean zero to non-zero\"},\"sstoreInitRefundEIP2200\":{\"v\":19200,\"d\":\"Once per SSTORE operation for resetting to the original zero value\"},\"sstoreCleanGasEIP2200\":{\"v\":5000,\"d\":\"Once per SSTORE operation from clean non-zero to something else\"},\"sstoreCleanRefundEIP2200\":{\"v\":4200,\"d\":\"Once per SSTORE operation for resetting to the original non-zero value\"},\"sstoreClearRefundEIP2200\":{\"v\":15000,\"d\":\"Once per SSTORE operation for clearing an originally existing storage slot\"}},\"vm\":{},\"pow\":{},\"casper\":{},\"sharding\":{}}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/hardforks/petersburg.json":
  /*!***********************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/hardforks/petersburg.json ***!
    \***********************************************************************/

  /*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */

  /***/
  function node_modulesEthereumjsCommonDistHardforksPetersburgJson(module) {
    module.exports = JSON.parse("{\"name\":\"petersburg\",\"comment\":\"Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople\",\"eip\":{\"url\":\"https://github.com/ethereum/EIPs/pull/1716\",\"status\":\"Draft\"},\"gasConfig\":{},\"gasPrices\":{\"netSstoreNoopGas\":{\"v\":null,\"d\":\"Removed along EIP-1283\"},\"netSstoreInitGas\":{\"v\":null,\"d\":\"Removed along EIP-1283\"},\"netSstoreCleanGas\":{\"v\":null,\"d\":\"Removed along EIP-1283\"},\"netSstoreDirtyGas\":{\"v\":null,\"d\":\"Removed along EIP-1283\"},\"netSstoreClearRefund\":{\"v\":null,\"d\":\"Removed along EIP-1283\"},\"netSstoreResetRefund\":{\"v\":null,\"d\":\"Removed along EIP-1283\"},\"netSstoreResetClearRefund\":{\"v\":null,\"d\":\"Removed along EIP-1283\"}},\"vm\":{},\"pow\":{},\"casper\":{},\"sharding\":{}}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/hardforks/spuriousDragon.json":
  /*!***************************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/hardforks/spuriousDragon.json ***!
    \***************************************************************************/

  /*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */

  /***/
  function node_modulesEthereumjsCommonDistHardforksSpuriousDragonJson(module) {
    module.exports = JSON.parse("{\"name\":\"spuriousDragon\",\"comment\":\"HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-607\",\"status\":\"Final\"},\"gasConfig\":{},\"gasPrices\":{\"expByte\":{\"v\":50,\"d\":\"Times ceil(log256(exponent)) for the EXP instruction\"}},\"vm\":{\"maxCodeSize\":{\"v\":24576,\"d\":\"Maximum length of contract code\"}},\"pow\":{},\"casper\":{},\"sharding\":{}}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/hardforks/tangerineWhistle.json":
  /*!*****************************************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/hardforks/tangerineWhistle.json ***!
    \*****************************************************************************/

  /*! exports provided: name, comment, eip, gasConfig, gasPrices, vm, pow, casper, sharding, default */

  /***/
  function node_modulesEthereumjsCommonDistHardforksTangerineWhistleJson(module) {
    module.exports = JSON.parse("{\"name\":\"tangerineWhistle\",\"comment\":\"Hardfork with gas cost changes for IO-heavy operations\",\"eip\":{\"url\":\"https://eips.ethereum.org/EIPS/eip-608\",\"status\":\"Final\"},\"gasConfig\":{},\"gasPrices\":{\"sload\":{\"v\":200,\"d\":\"Once per SLOAD operation\"},\"call\":{\"v\":700,\"d\":\"Once per CALL operation & message call transaction\"}},\"vm\":{},\"pow\":{},\"casper\":{},\"sharding\":{}}");
    /***/
  },

  /***/
  "./node_modules/ethereumjs-common/dist/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/ethereumjs-common/dist/index.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesEthereumjsCommonDistIndexJs(module, exports, __webpack_require__) {
    "use strict";

    var __assign = this && this.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var chains_1 = __webpack_require__(
    /*! ./chains */
    "./node_modules/ethereumjs-common/dist/chains/index.js");

    var hardforks_1 = __webpack_require__(
    /*! ./hardforks */
    "./node_modules/ethereumjs-common/dist/hardforks/index.js");
    /**
     * Common class to access chain and hardfork parameters
     */


    var Common =
    /** @class */
    function () {
      /**
       * @constructor
       * @param chain String ('mainnet') or Number (1) chain
       * @param hardfork String identifier ('byzantium') for hardfork (optional)
       * @param supportedHardforks Limit parameter returns to the given hardforks (optional)
       */
      function Common(chain, hardfork, supportedHardforks) {
        this._chainParams = this.setChain(chain);
        this._hardfork = null;
        this._supportedHardforks = supportedHardforks === undefined ? [] : supportedHardforks;

        if (hardfork) {
          this.setHardfork(hardfork);
        }
      }
      /**
       * Creates a Common object for a custom chain, based on a standard one. It uses all the [[Chain]]
       * params from [[baseChain]] except the ones overridden in [[customChainParams]].
       *
       * @param baseChain The name (`mainnet`) or id (`1`) of a standard chain used to base the custom
       * chain params on.
       * @param customChainParams The custom parameters of the chain.
       * @param hardfork String identifier ('byzantium') for hardfork (optional)
       * @param supportedHardforks Limit parameter returns to the given hardforks (optional)
       */


      Common.forCustomChain = function (baseChain, customChainParams, hardfork, supportedHardforks) {
        var standardChainParams = Common._getChainParams(baseChain);

        return new Common(__assign({}, standardChainParams, customChainParams), hardfork, supportedHardforks);
      };

      Common._getChainParams = function (chain) {
        if (typeof chain === 'number') {
          if (chains_1.chains['names'][chain]) {
            return chains_1.chains[chains_1.chains['names'][chain]];
          }

          throw new Error("Chain with ID " + chain + " not supported");
        }

        if (chains_1.chains[chain]) {
          return chains_1.chains[chain];
        }

        throw new Error("Chain with name " + chain + " not supported");
      };
      /**
       * Sets the chain
       * @param chain String ('mainnet') or Number (1) chain
       *     representation. Or, a Dictionary of chain parameters for a private network.
       * @returns The dictionary with parameters set as chain
       */


      Common.prototype.setChain = function (chain) {
        if (typeof chain === 'number' || typeof chain === 'string') {
          this._chainParams = Common._getChainParams(chain);
        } else if (typeof chain === 'object') {
          var required = ['networkId', 'genesis', 'hardforks', 'bootstrapNodes'];

          for (var _i = 0, required_1 = required; _i < required_1.length; _i++) {
            var param = required_1[_i];

            if (chain[param] === undefined) {
              throw new Error("Missing required chain parameter: " + param);
            }
          }

          this._chainParams = chain;
        } else {
          throw new Error('Wrong input format');
        }

        return this._chainParams;
      };
      /**
       * Sets the hardfork to get params for
       * @param hardfork String identifier ('byzantium')
       */


      Common.prototype.setHardfork = function (hardfork) {
        if (!this._isSupportedHardfork(hardfork)) {
          throw new Error("Hardfork " + hardfork + " not set as supported in supportedHardforks");
        }

        var changed = false;

        for (var _i = 0, hardforkChanges_1 = hardforks_1.hardforks; _i < hardforkChanges_1.length; _i++) {
          var hfChanges = hardforkChanges_1[_i];

          if (hfChanges[0] === hardfork) {
            this._hardfork = hardfork;
            changed = true;
          }
        }

        if (!changed) {
          throw new Error("Hardfork with name " + hardfork + " not supported");
        }
      };
      /**
       * Internal helper function to choose between hardfork set and hardfork provided as param
       * @param hardfork Hardfork given to function as a parameter
       * @returns Hardfork chosen to be used
       */


      Common.prototype._chooseHardfork = function (hardfork, onlySupported) {
        onlySupported = onlySupported === undefined ? true : onlySupported;

        if (!hardfork) {
          if (!this._hardfork) {
            throw new Error('Method called with neither a hardfork set nor provided by param');
          } else {
            hardfork = this._hardfork;
          }
        } else if (onlySupported && !this._isSupportedHardfork(hardfork)) {
          throw new Error("Hardfork " + hardfork + " not set as supported in supportedHardforks");
        }

        return hardfork;
      };
      /**
       * Internal helper function, returns the params for the given hardfork for the chain set
       * @param hardfork Hardfork name
       * @returns Dictionary with hardfork params
       */


      Common.prototype._getHardfork = function (hardfork) {
        var hfs = this.hardforks();

        for (var _i = 0, hfs_1 = hfs; _i < hfs_1.length; _i++) {
          var hf = hfs_1[_i];
          if (hf['name'] === hardfork) return hf;
        }

        throw new Error("Hardfork " + hardfork + " not defined for chain " + this.chainName());
      };
      /**
       * Internal helper function to check if a hardfork is set to be supported by the library
       * @param hardfork Hardfork name
       * @returns True if hardfork is supported
       */


      Common.prototype._isSupportedHardfork = function (hardfork) {
        if (this._supportedHardforks.length > 0) {
          for (var _i = 0, _a = this._supportedHardforks; _i < _a.length; _i++) {
            var supportedHf = _a[_i];
            if (hardfork === supportedHf) return true;
          }
        } else {
          return true;
        }

        return false;
      };
      /**
       * Returns the parameter corresponding to a hardfork
       * @param topic Parameter topic ('gasConfig', 'gasPrices', 'vm', 'pow', 'casper', 'sharding')
       * @param name Parameter name (e.g. 'minGasLimit' for 'gasConfig' topic)
       * @param hardfork Hardfork name, optional if hardfork set
       */


      Common.prototype.param = function (topic, name, hardfork) {
        hardfork = this._chooseHardfork(hardfork);
        var value;

        for (var _i = 0, hardforkChanges_2 = hardforks_1.hardforks; _i < hardforkChanges_2.length; _i++) {
          var hfChanges = hardforkChanges_2[_i];

          if (!hfChanges[1][topic]) {
            throw new Error("Topic " + topic + " not defined");
          }

          if (hfChanges[1][topic][name] !== undefined) {
            value = hfChanges[1][topic][name].v;
          }

          if (hfChanges[0] === hardfork) break;
        }

        if (value === undefined) {
          throw new Error(topic + " value for " + name + " not found");
        }

        return value;
      };
      /**
       * Returns a parameter for the hardfork active on block number
       * @param topic Parameter topic
       * @param name Parameter name
       * @param blockNumber Block number
       */


      Common.prototype.paramByBlock = function (topic, name, blockNumber) {
        var activeHfs = this.activeHardforks(blockNumber);
        var hardfork = activeHfs[activeHfs.length - 1]['name'];
        return this.param(topic, name, hardfork);
      };
      /**
       * Checks if set or provided hardfork is active on block number
       * @param hardfork Hardfork name or null (for HF set)
       * @param blockNumber
       * @param opts Hardfork options (onlyActive unused)
       * @returns True if HF is active on block number
       */


      Common.prototype.hardforkIsActiveOnBlock = function (hardfork, blockNumber, opts) {
        opts = opts !== undefined ? opts : {};
        var onlySupported = opts.onlySupported === undefined ? false : opts.onlySupported;
        hardfork = this._chooseHardfork(hardfork, onlySupported);
        var hfBlock = this.hardforkBlock(hardfork);
        if (hfBlock !== null && blockNumber >= hfBlock) return true;
        return false;
      };
      /**
       * Alias to hardforkIsActiveOnBlock when hardfork is set
       * @param blockNumber
       * @param opts Hardfork options (onlyActive unused)
       * @returns True if HF is active on block number
       */


      Common.prototype.activeOnBlock = function (blockNumber, opts) {
        return this.hardforkIsActiveOnBlock(null, blockNumber, opts);
      };
      /**
       * Sequence based check if given or set HF1 is greater than or equal HF2
       * @param hardfork1 Hardfork name or null (if set)
       * @param hardfork2 Hardfork name
       * @param opts Hardfork options
       * @returns True if HF1 gte HF2
       */


      Common.prototype.hardforkGteHardfork = function (hardfork1, hardfork2, opts) {
        opts = opts !== undefined ? opts : {};
        var onlyActive = opts.onlyActive === undefined ? false : opts.onlyActive;
        hardfork1 = this._chooseHardfork(hardfork1, opts.onlySupported);
        var hardforks;

        if (onlyActive) {
          hardforks = this.activeHardforks(null, opts);
        } else {
          hardforks = this.hardforks();
        }

        var posHf1 = -1,
            posHf2 = -1;
        var index = 0;

        for (var _i = 0, hardforks_2 = hardforks; _i < hardforks_2.length; _i++) {
          var hf = hardforks_2[_i];
          if (hf['name'] === hardfork1) posHf1 = index;
          if (hf['name'] === hardfork2) posHf2 = index;
          index += 1;
        }

        return posHf1 >= posHf2;
      };
      /**
       * Alias to hardforkGteHardfork when hardfork is set
       * @param hardfork Hardfork name
       * @param opts Hardfork options
       * @returns True if hardfork set is greater than hardfork provided
       */


      Common.prototype.gteHardfork = function (hardfork, opts) {
        return this.hardforkGteHardfork(null, hardfork, opts);
      };
      /**
       * Checks if given or set hardfork is active on the chain
       * @param hardfork Hardfork name, optional if HF set
       * @param opts Hardfork options (onlyActive unused)
       * @returns True if hardfork is active on the chain
       */


      Common.prototype.hardforkIsActiveOnChain = function (hardfork, opts) {
        opts = opts !== undefined ? opts : {};
        var onlySupported = opts.onlySupported === undefined ? false : opts.onlySupported;
        hardfork = this._chooseHardfork(hardfork, onlySupported);

        for (var _i = 0, _a = this.hardforks(); _i < _a.length; _i++) {
          var hf = _a[_i];
          if (hf['name'] === hardfork && hf['block'] !== null) return true;
        }

        return false;
      };
      /**
       * Returns the active hardfork switches for the current chain
       * @param blockNumber up to block if provided, otherwise for the whole chain
       * @param opts Hardfork options (onlyActive unused)
       * @return Array with hardfork arrays
       */


      Common.prototype.activeHardforks = function (blockNumber, opts) {
        opts = opts !== undefined ? opts : {};
        var activeHardforks = [];
        var hfs = this.hardforks();

        for (var _i = 0, hfs_2 = hfs; _i < hfs_2.length; _i++) {
          var hf = hfs_2[_i];
          if (hf['block'] === null) continue;
          if (blockNumber !== undefined && blockNumber !== null && blockNumber < hf['block']) break;
          if (opts.onlySupported && !this._isSupportedHardfork(hf['name'])) continue;
          activeHardforks.push(hf);
        }

        return activeHardforks;
      };
      /**
       * Returns the latest active hardfork name for chain or block or throws if unavailable
       * @param blockNumber up to block if provided, otherwise for the whole chain
       * @param opts Hardfork options (onlyActive unused)
       * @return Hardfork name
       */


      Common.prototype.activeHardfork = function (blockNumber, opts) {
        opts = opts !== undefined ? opts : {};
        var activeHardforks = this.activeHardforks(blockNumber, opts);

        if (activeHardforks.length > 0) {
          return activeHardforks[activeHardforks.length - 1]['name'];
        } else {
          throw new Error("No (supported) active hardfork found");
        }
      };
      /**
       * Returns the hardfork change block for hardfork provided or set
       * @param hardfork Hardfork name, optional if HF set
       * @returns Block number
       */


      Common.prototype.hardforkBlock = function (hardfork) {
        hardfork = this._chooseHardfork(hardfork, false);
        return this._getHardfork(hardfork)['block'];
      };
      /**
       * True if block number provided is the hardfork (given or set) change block of the current chain
       * @param blockNumber Number of the block to check
       * @param hardfork Hardfork name, optional if HF set
       * @returns True if blockNumber is HF block
       */


      Common.prototype.isHardforkBlock = function (blockNumber, hardfork) {
        hardfork = this._chooseHardfork(hardfork, false);

        if (this.hardforkBlock(hardfork) === blockNumber) {
          return true;
        } else {
          return false;
        }
      };
      /**
       * Provide the consensus type for the hardfork set or provided as param
       * @param hardfork Hardfork name, optional if hardfork set
       * @returns Consensus type (e.g. 'pow', 'poa')
       */


      Common.prototype.consensus = function (hardfork) {
        hardfork = this._chooseHardfork(hardfork);
        return this._getHardfork(hardfork)['consensus'];
      };
      /**
       * Provide the finality type for the hardfork set or provided as param
       * @param {String} hardfork Hardfork name, optional if hardfork set
       * @returns {String} Finality type (e.g. 'pos', null of no finality)
       */


      Common.prototype.finality = function (hardfork) {
        hardfork = this._chooseHardfork(hardfork);
        return this._getHardfork(hardfork)['finality'];
      };
      /**
       * Returns the Genesis parameters of current chain
       * @returns Genesis dictionary
       */


      Common.prototype.genesis = function () {
        return this._chainParams['genesis'];
      };
      /**
       * Returns the hardforks for current chain
       * @returns {Array} Array with arrays of hardforks
       */


      Common.prototype.hardforks = function () {
        return this._chainParams['hardforks'];
      };
      /**
       * Returns bootstrap nodes for the current chain
       * @returns {Dictionary} Dict with bootstrap nodes
       */


      Common.prototype.bootstrapNodes = function () {
        return this._chainParams['bootstrapNodes'];
      };
      /**
       * Returns the hardfork set
       * @returns Hardfork name
       */


      Common.prototype.hardfork = function () {
        return this._hardfork;
      };
      /**
       * Returns the Id of current chain
       * @returns chain Id
       */


      Common.prototype.chainId = function () {
        return this._chainParams['chainId'];
      };
      /**
       * Returns the name of current chain
       * @returns chain name (lower case)
       */


      Common.prototype.chainName = function () {
        return chains_1.chains['names'][this.chainId()] || this._chainParams['name'];
      };
      /**
       * Returns the Id of current network
       * @returns network Id
       */


      Common.prototype.networkId = function () {
        return this._chainParams['networkId'];
      };

      return Common;
    }();

    exports.default = Common; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/ethereumjs-tx/dist/fake.js":
  /*!*************************************************!*\
    !*** ./node_modules/ethereumjs-tx/dist/fake.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesEthereumjsTxDistFakeJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var ethereumjs_util_1 = __webpack_require__(
    /*! ethereumjs-util */
    "./node_modules/ethereumjs-util/dist/index.js");

    var buffer_1 = __webpack_require__(
    /*! buffer */
    "./node_modules/buffer/index.js");

    var transaction_1 = __webpack_require__(
    /*! ./transaction */
    "./node_modules/ethereumjs-tx/dist/transaction.js");
    /**
     * Creates a new transaction object that doesn't need to be signed.
     *
     * @param data - A transaction can be initialized with its rlp representation, an array containing
     * the value of its fields in order, or an object containing them by name.
     *
     * @param opts - The transaction's options, used to indicate the chain and hardfork the
     * transactions belongs to.
     *
     * @see Transaction
     */


    var FakeTransaction =
    /** @class */
    function (_super) {
      __extends(FakeTransaction, _super);

      function FakeTransaction(data, opts) {
        if (data === void 0) {
          data = {};
        }

        if (opts === void 0) {
          opts = {};
        }

        var _this = _super.call(this, data, opts) || this;

        Object.defineProperty(_this, 'from', {
          enumerable: true,
          configurable: true,
          get: function get() {
            return _this.getSenderAddress();
          },
          set: function set(val) {
            if (val) {
              _this._from = ethereumjs_util_1.toBuffer(val);
            }
          }
        });
        var txData = data;

        if (txData.from) {
          _this.from = ethereumjs_util_1.toBuffer(txData.from);
        }

        return _this;
      }
      /**
       * Computes a sha3-256 hash of the serialized tx, using the sender address to generate a fake
       * signature.
       *
       * @param includeSignature - Whether or not to include the signature
       */


      FakeTransaction.prototype.hash = function (includeSignature) {
        if (includeSignature === void 0) {
          includeSignature = true;
        }

        if (includeSignature && this._from && this._from.toString('hex') !== '') {
          // include a fake signature using the from address as a private key
          var fakeKey = buffer_1.Buffer.concat([this._from, this._from.slice(0, 12)]);
          this.sign(fakeKey);
        }

        return _super.prototype.hash.call(this, includeSignature);
      };

      return FakeTransaction;
    }(transaction_1.default);

    exports.default = FakeTransaction; //# sourceMappingURL=fake.js.map

    /***/
  },

  /***/
  "./node_modules/ethereumjs-tx/dist/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/ethereumjs-tx/dist/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesEthereumjsTxDistIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var transaction_1 = __webpack_require__(
    /*! ./transaction */
    "./node_modules/ethereumjs-tx/dist/transaction.js");

    exports.Transaction = transaction_1.default;

    var fake_1 = __webpack_require__(
    /*! ./fake */
    "./node_modules/ethereumjs-tx/dist/fake.js");

    exports.FakeTransaction = fake_1.default; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/ethereumjs-tx/dist/transaction.js":
  /*!********************************************************!*\
    !*** ./node_modules/ethereumjs-tx/dist/transaction.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesEthereumjsTxDistTransactionJs(module, exports, __webpack_require__) {
    "use strict";

    var __assign = this && this.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var ethereumjs_util_1 = __webpack_require__(
    /*! ethereumjs-util */
    "./node_modules/ethereumjs-util/dist/index.js");

    var ethereumjs_common_1 = __webpack_require__(
    /*! ethereumjs-common */
    "./node_modules/ethereumjs-common/dist/index.js");

    var buffer_1 = __webpack_require__(
    /*! buffer */
    "./node_modules/buffer/index.js");

    var ed25519 = __webpack_require__(
    /*! @stablelib/ed25519 */
    "./node_modules/@stablelib/ed25519/lib/ed25519.js"); // secp256k1n/2


    var N_DIV_2 = new ethereumjs_util_1.BN('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
    /**
     * An Ethereum transaction.
     */

    var Transaction =
    /** @class */
    function () {
      /**
       * Creates a new transaction from an object with its fields' values.
       *
       * @param data - A transaction can be initialized with its rlp representation, an array containing
       * the value of its fields in order, or an object containing them by name.
       *
       * @param opts - The transaction's options, used to indicate the chain and hardfork the
       * transactions belongs to.
       *
       * @note Transaction objects implement EIP155 by default. To disable it, use the constructor's
       * second parameter to set a chain and hardfork before EIP155 activation (i.e. before Spurious
       * Dragon.)
       *
       * @example
       * ```js
       * const txData = {
       *   nonce: '0x00',
       *   gasPrice: '0x09184e72a000',
       *   gasLimit: '0x2710',
       *   to: '0x0000000000000000000000000000000000000000',
       *   value: '0x00',
       *   data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
       *   v: '0x1c',
       *   r: '0x5e1d3a76fbf824220eafc8c79ad578ad2b67d01b0c2425eb1f1347e8f50882ab',
       *   s: '0x5bd428537f05f9830e93792f90ea6a3e2d1ee84952dd96edbae9f658f831ab13'
       * };
       * const tx = new Transaction(txData);
       * ```
       */
      function Transaction(data, opts) {
        if (data === void 0) {
          data = {};
        }

        if (opts === void 0) {
          opts = {};
        } // instantiate Common class instance based on passed options


        if (opts.common) {
          if (opts.chain || opts.hardfork) {
            throw new Error('Instantiation with both opts.common, and opts.chain and opts.hardfork parameter not allowed!');
          }

          this._common = opts.common;
        } else {
          var chain = opts.chain ? opts.chain : 'mainnet';
          var hardfork = opts.hardfork ? opts.hardfork : 'petersburg';
          this._common = new ethereumjs_common_1.default(chain, hardfork);
        } // Define Properties


        var fields = [{
          name: 'version',
          length: 32,
          allowLess: true,
          default: new buffer_1.Buffer([])
        }, {
          name: 'senderKey',
          length: 32,
          allowLess: true,
          default: new buffer_1.Buffer([])
        }, {
          name: 'nonce',
          length: 32,
          allowLess: true,
          default: new buffer_1.Buffer([])
        }, {
          name: 'gasPrice',
          length: 32,
          allowLess: true,
          default: new buffer_1.Buffer([])
        }, {
          name: 'gasLimit',
          alias: 'gas',
          length: 32,
          allowLess: true,
          default: new buffer_1.Buffer([])
        }, {
          name: 'to',
          allowZero: true,
          length: 20,
          default: new buffer_1.Buffer([])
        }, {
          name: 'value',
          length: 32,
          allowLess: true,
          default: new buffer_1.Buffer([])
        }, {
          name: 'data',
          alias: 'input',
          allowZero: true,
          default: new buffer_1.Buffer([])
        }, {
          name: 'v',
          allowZero: true,
          default: new buffer_1.Buffer([])
        }, {
          name: 'r',
          length: 32,
          allowZero: true,
          allowLess: true,
          default: new buffer_1.Buffer([])
        }, {
          name: 's',
          length: 32,
          allowZero: true,
          allowLess: true,
          default: new buffer_1.Buffer([])
        }]; // attached serialize

        ethereumjs_util_1.defineProperties(this, fields, data);
        /**
         * @property {Buffer} from (read only) sender address of this transaction, mathematically derived from other parameters.
         * @name from
         * @memberof Transaction
         */

        Object.defineProperty(this, 'from', {
          enumerable: true,
          configurable: true,
          get: this.getSenderAddress.bind(this)
        });

        this._validateV(this.v);

        this._overrideVSetterWithValidation();
      }
      /**
       * If the tx's `to` is to the creation address
       */


      Transaction.prototype.toCreationAddress = function () {
        return this.to.toString('hex') === '';
      };
      /**
       * Computes a sha3-256 hash of the serialized tx
       * @param includeSignature - Whether or not to include the signature
       */


      Transaction.prototype.hash = function (includeSignature) {
        if (includeSignature === void 0) {
          includeSignature = true;
        }

        var items;

        if (includeSignature) {
          items = this.raw;
        } else {
          if (this._implementsEIP155()) {
            items = this.raw.slice(0, 6).concat([ethereumjs_util_1.toBuffer(this.getChainId()), // TODO: stripping zeros should probably be a responsibility of the rlp module
            ethereumjs_util_1.stripZeros(ethereumjs_util_1.toBuffer(0)), ethereumjs_util_1.stripZeros(ethereumjs_util_1.toBuffer(0))]);
          } else {
            items = this.raw.slice(0, 6);
          }
        } // create hash


        return ethereumjs_util_1.rlphash(items);
      };
      /**
       * returns chain ID
       */


      Transaction.prototype.getChainId = function () {
        return this._common.chainId();
      };
      /**
       * returns the sender's address
       */


      Transaction.prototype.getSenderAddress = function () {
        if (this._from) {
          return this._from;
        }

        var pubkey = this.getSenderPublicKey();
        this._from = ethereumjs_util_1.publicToAddress(pubkey);
        return this._from;
      };
      /**
       * returns the public key of the sender
       */


      Transaction.prototype.getSenderPublicKey = function () {
        if (!this.verifySignature()) {
          throw new Error('Invalid Signature');
        } // If the signature was verified successfully the _senderPubKey field is defined


        return this._senderPubKey;
      };
      /**
       * Determines if the signature is valid
       */


      Transaction.prototype.verifySignature = function () {
        var msgHash = this.hash(false); // All transaction signatures whose s-value is greater than secp256k1n/2 are considered invalid.

        if (this._common.gteHardfork('homestead') && new ethereumjs_util_1.BN(this.s).cmp(N_DIV_2) === 1) {
          return false;
        }

        try {
          var v = ethereumjs_util_1.bufferToInt(this.v);

          var useChainIdWhileRecoveringPubKey = v >= this.getChainId() * 2 + 35 && this._common.gteHardfork('spuriousDragon');

          this._senderPubKey = ethereumjs_util_1.ecrecover(msgHash, v, this.r, this.s, useChainIdWhileRecoveringPubKey ? this.getChainId() : undefined);
        } catch (e) {
          return false;
        }

        return !!this._senderPubKey;
      };
      /**
       * sign a transaction with a given private key
       * @param privateKey - Must be 32 bytes in length
       */


      Transaction.prototype.sign = function (privateKey) {
        // We clear any previous signature before signing it. Otherwise, _implementsEIP155's can give
        // different results if this tx was already signed.
        this.v = new buffer_1.Buffer([]);
        this.s = new buffer_1.Buffer([]);
        this.r = new buffer_1.Buffer([]);
        var msgHash = this.hash(false);
        var sig = ethereumjs_util_1.ecsign(msgHash, privateKey);

        if (this._implementsEIP155()) {
          sig.v += this.getChainId() * 2 + 8;
        }

        Object.assign(this, sig);
      };
      /**
       * signWith25519 a transaction with a given private key
       * @param privateKey - Must be 32 bytes in length
       */


      Transaction.prototype.signWith25519 = function (privateKey, pubkey) {
        // We clear any previous signature before signing it. Otherwise, _implementsEIP155's can give
        // different results if this tx was already signed.
        this.v = new buffer_1.Buffer([]);
        this.s = new buffer_1.Buffer([]);
        this.r = new buffer_1.Buffer([]); // var msgHash = this.hash(false);

        var msgHash = ethereumjs_util_1.rlphash([this.raw[0], this.raw[2], this.raw[3], this.raw[4], this.raw[5], this.raw[6], this.raw[7]]);
        var seed = ethereumjs_util_1.toBuffer('0x7892FD9E627CFFA0F0AC8400A3CED340E845F90087E4D59E9725D455534B9700');
        var pk = ed25519.generateKeyPairFromSeed(seed);
        var sig255191 = ed25519.sign(pk.secretKey, [1, 2, 3]);
        var ok1 = ed25519.verify(pk.publicKey, [1, 2, 3], sig255191); // (async () => {
        //     const s = await x.sign([1,2,3], pk.secretKey);
        //     const isMessageSigned = await x.verify(s, [1,2,3], pk.publicKey);
        //     console.log(s, isMessageSigned)
        //   })();

        var sig25519 = ed25519.sign(privateKey, msgHash);
        var ok = ed25519.verify(pubkey, msgHash, sig25519);
        console.log(ok, ok1);
        var sig = {
          r: new buffer_1.Buffer(sig25519.slice(0, 32)),
          s: new buffer_1.Buffer(sig25519.slice(32, 64)),
          v: 27
        };
        Object.assign(this, sig);
      };
      /**
       * The amount of gas paid for the data in this tx
       */


      Transaction.prototype.getDataFee = function () {
        var data = this.raw[5];
        var cost = new ethereumjs_util_1.BN(0);

        for (var i = 0; i < data.length; i++) {
          data[i] === 0 ? cost.iaddn(this._common.param('gasPrices', 'txDataZero')) : cost.iaddn(this._common.param('gasPrices', 'txDataNonZero'));
        }

        return cost;
      };
      /**
       * the minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)
       */


      Transaction.prototype.getBaseFee = function () {
        var fee = this.getDataFee().iaddn(this._common.param('gasPrices', 'tx'));

        if (this._common.gteHardfork('homestead') && this.toCreationAddress()) {
          fee.iaddn(this._common.param('gasPrices', 'txCreation'));
        }

        return fee;
      };
      /**
       * the up front amount that an account must have for this transaction to be valid
       */


      Transaction.prototype.getUpfrontCost = function () {
        return new ethereumjs_util_1.BN(this.gasLimit).imul(new ethereumjs_util_1.BN(this.gasPrice)).iadd(new ethereumjs_util_1.BN(this.value));
      };

      Transaction.prototype.validate = function (stringError) {
        if (stringError === void 0) {
          stringError = false;
        }

        var errors = [];

        if (!this.verifySignature()) {
          errors.push('Invalid Signature');
        }

        if (this.getBaseFee().cmp(new ethereumjs_util_1.BN(this.gasLimit)) > 0) {
          errors.push(["gas limit is too low. Need at least " + this.getBaseFee()]);
        }

        if (stringError === false) {
          return errors.length === 0;
        } else {
          return errors.join(' ');
        }
      };
      /**
       * Returns the rlp encoding of the transaction
       */


      Transaction.prototype.serialize = function () {
        // Note: This never gets executed, defineProperties overwrites it.
        return ethereumjs_util_1.rlp.encode(this.raw);
      };
      /**
       * Returns the transaction in JSON format
       * @see {@link https://github.com/ethereumjs/ethereumjs-util/blob/master/docs/index.md#defineproperties|ethereumjs-util}
       */


      Transaction.prototype.toJSON = function (labels) {
        if (labels === void 0) {
          labels = false;
        } // Note: This never gets executed, defineProperties overwrites it.


        return {};
      };

      Transaction.prototype._validateV = function (v) {
        if (v === undefined || v.length === 0) {
          return;
        }

        if (!this._common.gteHardfork('spuriousDragon')) {
          return;
        }

        var vInt = ethereumjs_util_1.bufferToInt(v);

        if (vInt === 27 || vInt === 28) {
          return;
        }

        var isValidEIP155V = vInt === this.getChainId() * 2 + 35 || vInt === this.getChainId() * 2 + 36;

        if (!isValidEIP155V) {
          throw new Error("Incompatible EIP155-based V " + vInt + " and chain id " + this.getChainId() + ". See the second parameter of the Transaction constructor to set the chain id.");
        }
      };

      Transaction.prototype._isSigned = function () {
        return this.v.length > 0 && this.r.length > 0 && this.s.length > 0;
      };

      Transaction.prototype._overrideVSetterWithValidation = function () {
        var _this = this;

        var vDescriptor = Object.getOwnPropertyDescriptor(this, 'v');
        Object.defineProperty(this, 'v', __assign({}, vDescriptor, {
          set: function set(v) {
            if (v !== undefined) {
              _this._validateV(ethereumjs_util_1.toBuffer(v));
            }

            vDescriptor.set(v);
          }
        }));
      };

      Transaction.prototype._implementsEIP155 = function () {
        var onEIP155BlockOrLater = this._common.gteHardfork('spuriousDragon');

        if (!this._isSigned()) {
          // We sign with EIP155 all unsigned transactions after spuriousDragon
          return onEIP155BlockOrLater;
        } // EIP155 spec:
        // If block.number >= 2,675,000 and v = CHAIN_ID * 2 + 35 or v = CHAIN_ID * 2 + 36, then when computing
        // the hash of a transaction for purposes of signing or recovering, instead of hashing only the first six
        // elements (i.e. nonce, gasprice, startgas, to, value, data), hash nine elements, with v replaced by
        // CHAIN_ID, r = 0 and s = 0.


        var v = ethereumjs_util_1.bufferToInt(this.v);
        var vAndChainIdMeetEIP155Conditions = v === this.getChainId() * 2 + 35 || v === this.getChainId() * 2 + 36;
        return vAndChainIdMeetEIP155Conditions && onEIP155BlockOrLater;
      };

      return Transaction;
    }();

    exports.default = Transaction; //# sourceMappingURL=transaction.js.map

    /***/
  },

  /***/
  "./node_modules/web3-cypher/index.js":
  /*!*******************************************!*\
    !*** ./node_modules/web3-cypher/index.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherIndexJs(module, exports, __webpack_require__) {
    var Web3 = __webpack_require__(
    /*! ./lib/web3 */
    "./node_modules/web3-cypher/lib/web3.js"); // dont override global variable


    if (typeof window !== 'undefined' && typeof window.Web3 === 'undefined') {
      window.Web3 = Web3;
    }

    module.exports = Web3;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/contracts/GlobalRegistrar.json":
  /*!*********************************************************************!*\
    !*** ./node_modules/web3-cypher/lib/contracts/GlobalRegistrar.json ***!
    \*********************************************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, default */

  /***/
  function node_modulesWeb3CypherLibContractsGlobalRegistrarJson(module) {
    module.exports = JSON.parse("[{\"constant\":true,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"name\",\"outputs\":[{\"name\":\"o_name\",\"type\":\"bytes32\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"}],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"}],\"name\":\"content\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"}],\"name\":\"addr\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"}],\"name\":\"reserve\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"}],\"name\":\"subRegistrar\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"},{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transfer\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"},{\"name\":\"_registrar\",\"type\":\"address\"}],\"name\":\"setSubRegistrar\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"Registrar\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"},{\"name\":\"_a\",\"type\":\"address\"},{\"name\":\"_primary\",\"type\":\"bool\"}],\"name\":\"setAddress\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"},{\"name\":\"_content\",\"type\":\"bytes32\"}],\"name\":\"setContent\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"}],\"name\":\"disown\",\"outputs\":[],\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_name\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"_winner\",\"type\":\"address\"}],\"name\":\"AuctionEnded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_name\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"_bidder\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"NewBid\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"name\",\"type\":\"bytes32\"}],\"name\":\"Changed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"name\",\"type\":\"bytes32\"},{\"indexed\":true,\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"PrimaryChanged\",\"type\":\"event\"}]");
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/contracts/ICAPRegistrar.json":
  /*!*******************************************************************!*\
    !*** ./node_modules/web3-cypher/lib/contracts/ICAPRegistrar.json ***!
    \*******************************************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */

  /***/
  function node_modulesWeb3CypherLibContractsICAPRegistrarJson(module) {
    module.exports = JSON.parse("[{\"constant\":true,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"}],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"},{\"name\":\"_refund\",\"type\":\"address\"}],\"name\":\"disown\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"}],\"name\":\"addr\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"}],\"name\":\"reserve\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"},{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transfer\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_name\",\"type\":\"bytes32\"},{\"name\":\"_a\",\"type\":\"address\"}],\"name\":\"setAddr\",\"outputs\":[],\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"name\",\"type\":\"bytes32\"}],\"name\":\"Changed\",\"type\":\"event\"}]");
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/contracts/SmartExchange.json":
  /*!*******************************************************************!*\
    !*** ./node_modules/web3-cypher/lib/contracts/SmartExchange.json ***!
    \*******************************************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */

  /***/
  function node_modulesWeb3CypherLibContractsSmartExchangeJson(module) {
    module.exports = JSON.parse("[{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"bytes32\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"bytes32\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"indirectId\",\"type\":\"bytes32\"},{\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"icapTransfer\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"bytes32\"}],\"name\":\"deposit\",\"outputs\":[],\"payable\":true,\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"AnonymousDeposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"bytes32\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"bytes32\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"indirectId\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"IcapTransfer\",\"type\":\"event\"}]");
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/solidity/address.js":
  /*!**********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/solidity/address.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibSolidityAddressJs(module, exports, __webpack_require__) {
    var f = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/solidity/formatters.js");

    var SolidityType = __webpack_require__(
    /*! ./type */
    "./node_modules/web3-cypher/lib/solidity/type.js");
    /**
     * SolidityTypeAddress is a prootype that represents address type
     * It matches:
     * address
     * address[]
     * address[4]
     * address[][]
     * address[3][]
     * address[][6][], ...
     */


    var SolidityTypeAddress = function SolidityTypeAddress() {
      this._inputFormatter = f.formatInputInt;
      this._outputFormatter = f.formatOutputAddress;
    };

    SolidityTypeAddress.prototype = new SolidityType({});
    SolidityTypeAddress.prototype.constructor = SolidityTypeAddress;

    SolidityTypeAddress.prototype.isType = function (name) {
      return !!name.match(/address(\[([0-9]*)\])?/);
    };

    module.exports = SolidityTypeAddress;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/solidity/bool.js":
  /*!*******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/solidity/bool.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibSolidityBoolJs(module, exports, __webpack_require__) {
    var f = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/solidity/formatters.js");

    var SolidityType = __webpack_require__(
    /*! ./type */
    "./node_modules/web3-cypher/lib/solidity/type.js");
    /**
     * SolidityTypeBool is a prootype that represents bool type
     * It matches:
     * bool
     * bool[]
     * bool[4]
     * bool[][]
     * bool[3][]
     * bool[][6][], ...
     */


    var SolidityTypeBool = function SolidityTypeBool() {
      this._inputFormatter = f.formatInputBool;
      this._outputFormatter = f.formatOutputBool;
    };

    SolidityTypeBool.prototype = new SolidityType({});
    SolidityTypeBool.prototype.constructor = SolidityTypeBool;

    SolidityTypeBool.prototype.isType = function (name) {
      return !!name.match(/^bool(\[([0-9]*)\])*$/);
    };

    module.exports = SolidityTypeBool;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/solidity/bytes.js":
  /*!********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/solidity/bytes.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibSolidityBytesJs(module, exports, __webpack_require__) {
    var f = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/solidity/formatters.js");

    var SolidityType = __webpack_require__(
    /*! ./type */
    "./node_modules/web3-cypher/lib/solidity/type.js");
    /**
     * SolidityTypeBytes is a prototype that represents the bytes type.
     * It matches:
     * bytes
     * bytes[]
     * bytes[4]
     * bytes[][]
     * bytes[3][]
     * bytes[][6][], ...
     * bytes32
     * bytes8[4]
     * bytes[3][]
     */


    var SolidityTypeBytes = function SolidityTypeBytes() {
      this._inputFormatter = f.formatInputBytes;
      this._outputFormatter = f.formatOutputBytes;
    };

    SolidityTypeBytes.prototype = new SolidityType({});
    SolidityTypeBytes.prototype.constructor = SolidityTypeBytes;

    SolidityTypeBytes.prototype.isType = function (name) {
      return !!name.match(/^bytes([0-9]{1,})(\[([0-9]*)\])*$/);
    };

    module.exports = SolidityTypeBytes;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/solidity/coder.js":
  /*!********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/solidity/coder.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibSolidityCoderJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file coder.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var f = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/solidity/formatters.js");

    var SolidityTypeAddress = __webpack_require__(
    /*! ./address */
    "./node_modules/web3-cypher/lib/solidity/address.js");

    var SolidityTypeBool = __webpack_require__(
    /*! ./bool */
    "./node_modules/web3-cypher/lib/solidity/bool.js");

    var SolidityTypeInt = __webpack_require__(
    /*! ./int */
    "./node_modules/web3-cypher/lib/solidity/int.js");

    var SolidityTypeUInt = __webpack_require__(
    /*! ./uint */
    "./node_modules/web3-cypher/lib/solidity/uint.js");

    var SolidityTypeDynamicBytes = __webpack_require__(
    /*! ./dynamicbytes */
    "./node_modules/web3-cypher/lib/solidity/dynamicbytes.js");

    var SolidityTypeString = __webpack_require__(
    /*! ./string */
    "./node_modules/web3-cypher/lib/solidity/string.js");

    var SolidityTypeReal = __webpack_require__(
    /*! ./real */
    "./node_modules/web3-cypher/lib/solidity/real.js");

    var SolidityTypeUReal = __webpack_require__(
    /*! ./ureal */
    "./node_modules/web3-cypher/lib/solidity/ureal.js");

    var SolidityTypeBytes = __webpack_require__(
    /*! ./bytes */
    "./node_modules/web3-cypher/lib/solidity/bytes.js");

    var isDynamic = function isDynamic(solidityType, type) {
      return solidityType.isDynamicType(type) || solidityType.isDynamicArray(type);
    };
    /**
     * SolidityCoder prototype should be used to encode/decode solidity params of any type
     */


    var SolidityCoder = function SolidityCoder(types) {
      this._types = types;
    };
    /**
     * This method should be used to transform type to SolidityType
     *
     * @method _requireType
     * @param {String} type
     * @returns {SolidityType}
     * @throws {Error} throws if no matching type is found
     */


    SolidityCoder.prototype._requireType = function (type) {
      var solidityType = this._types.filter(function (t) {
        return t.isType(type);
      })[0];

      if (!solidityType) {
        throw Error('invalid solidity type!: ' + type);
      }

      return solidityType;
    };
    /**
     * Should be used to encode plain param
     *
     * @method encodeParam
     * @param {String} type
     * @param {Object} plain param
     * @return {String} encoded plain param
     */


    SolidityCoder.prototype.encodeParam = function (type, param) {
      return this.encodeParams([type], [param]);
    };
    /**
     * Should be used to encode list of params
     *
     * @method encodeParams
     * @param {Array} types
     * @param {Array} params
     * @return {String} encoded list of params
     */


    SolidityCoder.prototype.encodeParams = function (types, params) {
      var solidityTypes = this.getSolidityTypes(types);
      var encodeds = solidityTypes.map(function (solidityType, index) {
        return solidityType.encode(params[index], types[index]);
      });
      var dynamicOffset = solidityTypes.reduce(function (acc, solidityType, index) {
        var staticPartLength = solidityType.staticPartLength(types[index]);
        var roundedStaticPartLength = Math.floor((staticPartLength + 31) / 32) * 32;
        return acc + (isDynamic(solidityTypes[index], types[index]) ? 32 : roundedStaticPartLength);
      }, 0);
      var result = this.encodeMultiWithOffset(types, solidityTypes, encodeds, dynamicOffset);
      return result;
    };

    SolidityCoder.prototype.encodeMultiWithOffset = function (types, solidityTypes, encodeds, dynamicOffset) {
      var result = "";
      var self = this;
      types.forEach(function (type, i) {
        if (isDynamic(solidityTypes[i], types[i])) {
          result += f.formatInputInt(dynamicOffset).encode();
          var e = self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
          dynamicOffset += e.length / 2;
        } else {
          // don't add length to dynamicOffset. it's already counted
          result += self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
        } // TODO: figure out nested arrays

      });
      types.forEach(function (type, i) {
        if (isDynamic(solidityTypes[i], types[i])) {
          var e = self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
          dynamicOffset += e.length / 2;
          result += e;
        }
      });
      return result;
    };

    SolidityCoder.prototype.encodeWithOffset = function (type, solidityType, encoded, offset) {
      /* jshint maxcomplexity: 17 */

      /* jshint maxdepth: 5 */
      var self = this;
      var encodingMode = {
        dynamic: 1,
        static: 2,
        other: 3
      };
      var mode = solidityType.isDynamicArray(type) ? encodingMode.dynamic : solidityType.isStaticArray(type) ? encodingMode.static : encodingMode.other;

      if (mode !== encodingMode.other) {
        var nestedName = solidityType.nestedName(type);
        var nestedStaticPartLength = solidityType.staticPartLength(nestedName);
        var result = mode === encodingMode.dynamic ? encoded[0] : '';

        if (solidityType.isDynamicArray(nestedName)) {
          var previousLength = mode === encodingMode.dynamic ? 2 : 0;

          for (var i = 0; i < encoded.length; i++) {
            // calculate length of previous item
            if (mode === encodingMode.dynamic) {
              previousLength += +encoded[i - 1][0] || 0;
            } else if (mode === encodingMode.static) {
              previousLength += +(encoded[i - 1] || [])[0] || 0;
            }

            result += f.formatInputInt(offset + i * nestedStaticPartLength + previousLength * 32).encode();
          }
        }

        var len = mode === encodingMode.dynamic ? encoded.length - 1 : encoded.length;

        for (var c = 0; c < len; c++) {
          var additionalOffset = result / 2;

          if (mode === encodingMode.dynamic) {
            result += self.encodeWithOffset(nestedName, solidityType, encoded[c + 1], offset + additionalOffset);
          } else if (mode === encodingMode.static) {
            result += self.encodeWithOffset(nestedName, solidityType, encoded[c], offset + additionalOffset);
          }
        }

        return result;
      }

      return encoded;
    };
    /**
     * Should be used to decode bytes to plain param
     *
     * @method decodeParam
     * @param {String} type
     * @param {String} bytes
     * @return {Object} plain param
     */


    SolidityCoder.prototype.decodeParam = function (type, bytes) {
      return this.decodeParams([type], bytes)[0];
    };
    /**
     * Should be used to decode list of params
     *
     * @method decodeParam
     * @param {Array} types
     * @param {String} bytes
     * @return {Array} array of plain params
     */


    SolidityCoder.prototype.decodeParams = function (types, bytes) {
      var solidityTypes = this.getSolidityTypes(types);
      var offsets = this.getOffsets(types, solidityTypes);
      return solidityTypes.map(function (solidityType, index) {
        return solidityType.decode(bytes, offsets[index], types[index], index);
      });
    };

    SolidityCoder.prototype.getOffsets = function (types, solidityTypes) {
      var lengths = solidityTypes.map(function (solidityType, index) {
        return solidityType.staticPartLength(types[index]);
      });

      for (var i = 1; i < lengths.length; i++) {
        // sum with length of previous element
        lengths[i] += lengths[i - 1];
      }

      return lengths.map(function (length, index) {
        // remove the current length, so the length is sum of previous elements
        var staticPartLength = solidityTypes[index].staticPartLength(types[index]);
        return length - staticPartLength;
      });
    };

    SolidityCoder.prototype.getSolidityTypes = function (types) {
      var self = this;
      return types.map(function (type) {
        return self._requireType(type);
      });
    };

    var coder = new SolidityCoder([new SolidityTypeAddress(), new SolidityTypeBool(), new SolidityTypeInt(), new SolidityTypeUInt(), new SolidityTypeDynamicBytes(), new SolidityTypeBytes(), new SolidityTypeString(), new SolidityTypeReal(), new SolidityTypeUReal()]);
    module.exports = coder;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/solidity/dynamicbytes.js":
  /*!***************************************************************!*\
    !*** ./node_modules/web3-cypher/lib/solidity/dynamicbytes.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibSolidityDynamicbytesJs(module, exports, __webpack_require__) {
    var f = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/solidity/formatters.js");

    var SolidityType = __webpack_require__(
    /*! ./type */
    "./node_modules/web3-cypher/lib/solidity/type.js");

    var SolidityTypeDynamicBytes = function SolidityTypeDynamicBytes() {
      this._inputFormatter = f.formatInputDynamicBytes;
      this._outputFormatter = f.formatOutputDynamicBytes;
    };

    SolidityTypeDynamicBytes.prototype = new SolidityType({});
    SolidityTypeDynamicBytes.prototype.constructor = SolidityTypeDynamicBytes;

    SolidityTypeDynamicBytes.prototype.isType = function (name) {
      return !!name.match(/^bytes(\[([0-9]*)\])*$/);
    };

    SolidityTypeDynamicBytes.prototype.isDynamicType = function () {
      return true;
    };

    module.exports = SolidityTypeDynamicBytes;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/solidity/formatters.js":
  /*!*************************************************************!*\
    !*** ./node_modules/web3-cypher/lib/solidity/formatters.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibSolidityFormattersJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file formatters.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var BigNumber = __webpack_require__(
    /*! bignumber.js */
    "./node_modules/web3-cypher/node_modules/bignumber.js/bignumber.js");

    var utils = __webpack_require__(
    /*! ../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var c = __webpack_require__(
    /*! ../utils/config */
    "./node_modules/web3-cypher/lib/utils/config.js");

    var SolidityParam = __webpack_require__(
    /*! ./param */
    "./node_modules/web3-cypher/lib/solidity/param.js");
    /**
     * Formats input value to byte representation of int
     * If value is negative, return it's two's complement
     * If the value is floating point, round it down
     *
     * @method formatInputInt
     * @param {String|Number|BigNumber} value that needs to be formatted
     * @returns {SolidityParam}
     */


    var formatInputInt = function formatInputInt(value) {
      BigNumber.config(c.CPH_BIGNUMBER_ROUNDING_MODE);
      var result = utils.padLeft(utils.toTwosComplement(value).toString(16), 64);
      return new SolidityParam(result);
    };
    /**
     * Formats input bytes
     *
     * @method formatInputBytes
     * @param {String}
     * @returns {SolidityParam}
     */


    var formatInputBytes = function formatInputBytes(value) {
      var result = utils.toHex(value).substr(2);
      var l = Math.floor((result.length + 63) / 64);
      result = utils.padRight(result, l * 64);
      return new SolidityParam(result);
    };
    /**
     * Formats input bytes
     *
     * @method formatDynamicInputBytes
     * @param {String}
     * @returns {SolidityParam}
     */


    var formatInputDynamicBytes = function formatInputDynamicBytes(value) {
      var result = utils.toHex(value).substr(2);
      var length = result.length / 2;
      var l = Math.floor((result.length + 63) / 64);
      result = utils.padRight(result, l * 64);
      return new SolidityParam(formatInputInt(length).value + result);
    };
    /**
     * Formats input value to byte representation of string
     *
     * @method formatInputString
     * @param {String}
     * @returns {SolidityParam}
     */


    var formatInputString = function formatInputString(value) {
      var result = utils.fromUtf8(value).substr(2);
      var length = result.length / 2;
      var l = Math.floor((result.length + 63) / 64);
      result = utils.padRight(result, l * 64);
      return new SolidityParam(formatInputInt(length).value + result);
    };
    /**
     * Formats input value to byte representation of bool
     *
     * @method formatInputBool
     * @param {Boolean}
     * @returns {SolidityParam}
     */


    var formatInputBool = function formatInputBool(value) {
      var result = '000000000000000000000000000000000000000000000000000000000000000' + (value ? '1' : '0');
      return new SolidityParam(result);
    };
    /**
     * Formats input value to byte representation of real
     * Values are multiplied by 2^m and encoded as integers
     *
     * @method formatInputReal
     * @param {String|Number|BigNumber}
     * @returns {SolidityParam}
     */


    var formatInputReal = function formatInputReal(value) {
      return formatInputInt(new BigNumber(value).times(new BigNumber(2).pow(128)));
    };
    /**
     * Check if input value is negative
     *
     * @method signedIsNegative
     * @param {String} value is hex format
     * @returns {Boolean} true if it is negative, otherwise false
     */


    var signedIsNegative = function signedIsNegative(value) {
      return new BigNumber(value.substr(0, 1), 16).toString(2).substr(0, 1) === '1';
    };
    /**
     * Formats right-aligned output bytes to int
     *
     * @method formatOutputInt
     * @param {SolidityParam} param
     * @returns {BigNumber} right-aligned output bytes formatted to big number
     */


    var formatOutputInt = function formatOutputInt(param) {
      var value = param.staticPart() || "0"; // check if it's negative number
      // it it is, return two's complement

      if (signedIsNegative(value)) {
        return new BigNumber(value, 16).minus(new BigNumber('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16)).minus(1);
      }

      return new BigNumber(value, 16);
    };
    /**
     * Formats right-aligned output bytes to uint
     *
     * @method formatOutputUInt
     * @param {SolidityParam}
     * @returns {BigNumeber} right-aligned output bytes formatted to uint
     */


    var formatOutputUInt = function formatOutputUInt(param) {
      var value = param.staticPart() || "0";
      return new BigNumber(value, 16);
    };
    /**
     * Formats right-aligned output bytes to real
     *
     * @method formatOutputReal
     * @param {SolidityParam}
     * @returns {BigNumber} input bytes formatted to real
     */


    var formatOutputReal = function formatOutputReal(param) {
      return formatOutputInt(param).dividedBy(new BigNumber(2).pow(128));
    };
    /**
     * Formats right-aligned output bytes to ureal
     *
     * @method formatOutputUReal
     * @param {SolidityParam}
     * @returns {BigNumber} input bytes formatted to ureal
     */


    var formatOutputUReal = function formatOutputUReal(param) {
      return formatOutputUInt(param).dividedBy(new BigNumber(2).pow(128));
    };
    /**
     * Should be used to format output bool
     *
     * @method formatOutputBool
     * @param {SolidityParam}
     * @returns {Boolean} right-aligned input bytes formatted to bool
     */


    var formatOutputBool = function formatOutputBool(param) {
      return param.staticPart() === '0000000000000000000000000000000000000000000000000000000000000001' ? true : false;
    };
    /**
     * Should be used to format output bytes
     *
     * @method formatOutputBytes
     * @param {SolidityParam} left-aligned hex representation of string
     * @param {String} name type name
     * @returns {String} hex string
     */


    var formatOutputBytes = function formatOutputBytes(param, name) {
      var matches = name.match(/^bytes([0-9]*)/);
      var size = parseInt(matches[1]);
      return '0x' + param.staticPart().slice(0, 2 * size);
    };
    /**
     * Should be used to format output bytes
     *
     * @method formatOutputDynamicBytes
     * @param {SolidityParam} left-aligned hex representation of string
     * @returns {String} hex string
     */


    var formatOutputDynamicBytes = function formatOutputDynamicBytes(param) {
      var length = new BigNumber(param.dynamicPart().slice(0, 64), 16).toNumber() * 2;
      return '0x' + param.dynamicPart().substr(64, length);
    };
    /**
     * Should be used to format output string
     *
     * @method formatOutputString
     * @param {SolidityParam} left-aligned hex representation of string
     * @returns {String} ascii string
     */


    var formatOutputString = function formatOutputString(param) {
      var length = new BigNumber(param.dynamicPart().slice(0, 64), 16).toNumber() * 2;
      return utils.toUtf8(param.dynamicPart().substr(64, length));
    };
    /**
     * Should be used to format output address
     *
     * @method formatOutputAddress
     * @param {SolidityParam} right-aligned input bytes
     * @returns {String} address
     */


    var formatOutputAddress = function formatOutputAddress(param) {
      var value = param.staticPart();
      return "0x" + value.slice(value.length - 40, value.length);
    };

    module.exports = {
      formatInputInt: formatInputInt,
      formatInputBytes: formatInputBytes,
      formatInputDynamicBytes: formatInputDynamicBytes,
      formatInputString: formatInputString,
      formatInputBool: formatInputBool,
      formatInputReal: formatInputReal,
      formatOutputInt: formatOutputInt,
      formatOutputUInt: formatOutputUInt,
      formatOutputReal: formatOutputReal,
      formatOutputUReal: formatOutputUReal,
      formatOutputBool: formatOutputBool,
      formatOutputBytes: formatOutputBytes,
      formatOutputDynamicBytes: formatOutputDynamicBytes,
      formatOutputString: formatOutputString,
      formatOutputAddress: formatOutputAddress
    };
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/solidity/int.js":
  /*!******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/solidity/int.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibSolidityIntJs(module, exports, __webpack_require__) {
    var f = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/solidity/formatters.js");

    var SolidityType = __webpack_require__(
    /*! ./type */
    "./node_modules/web3-cypher/lib/solidity/type.js");
    /**
     * SolidityTypeInt is a prootype that represents int type
     * It matches:
     * int
     * int[]
     * int[4]
     * int[][]
     * int[3][]
     * int[][6][], ...
     * int32
     * int64[]
     * int8[4]
     * int256[][]
     * int[3][]
     * int64[][6][], ...
     */


    var SolidityTypeInt = function SolidityTypeInt() {
      this._inputFormatter = f.formatInputInt;
      this._outputFormatter = f.formatOutputInt;
    };

    SolidityTypeInt.prototype = new SolidityType({});
    SolidityTypeInt.prototype.constructor = SolidityTypeInt;

    SolidityTypeInt.prototype.isType = function (name) {
      return !!name.match(/^int([0-9]*)?(\[([0-9]*)\])*$/);
    };

    module.exports = SolidityTypeInt;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/solidity/param.js":
  /*!********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/solidity/param.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibSolidityParamJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** 
     * @file param.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var utils = __webpack_require__(
    /*! ../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");
    /**
     * SolidityParam object prototype.
     * Should be used when encoding, decoding solidity bytes
     */


    var SolidityParam = function SolidityParam(value, offset) {
      this.value = value || '';
      this.offset = offset; // offset in bytes
    };
    /**
     * This method should be used to get length of params's dynamic part
     * 
     * @method dynamicPartLength
     * @returns {Number} length of dynamic part (in bytes)
     */


    SolidityParam.prototype.dynamicPartLength = function () {
      return this.dynamicPart().length / 2;
    };
    /**
     * This method should be used to create copy of solidity param with different offset
     *
     * @method withOffset
     * @param {Number} offset length in bytes
     * @returns {SolidityParam} new solidity param with applied offset
     */


    SolidityParam.prototype.withOffset = function (offset) {
      return new SolidityParam(this.value, offset);
    };
    /**
     * This method should be used to combine solidity params together
     * eg. when appending an array
     *
     * @method combine
     * @param {SolidityParam} param with which we should combine
     * @param {SolidityParam} result of combination
     */


    SolidityParam.prototype.combine = function (param) {
      return new SolidityParam(this.value + param.value);
    };
    /**
     * This method should be called to check if param has dynamic size.
     * If it has, it returns true, otherwise false
     *
     * @method isDynamic
     * @returns {Boolean}
     */


    SolidityParam.prototype.isDynamic = function () {
      return this.offset !== undefined;
    };
    /**
     * This method should be called to transform offset to bytes
     *
     * @method offsetAsBytes
     * @returns {String} bytes representation of offset
     */


    SolidityParam.prototype.offsetAsBytes = function () {
      return !this.isDynamic() ? '' : utils.padLeft(utils.toTwosComplement(this.offset).toString(16), 64);
    };
    /**
     * This method should be called to get static part of param
     *
     * @method staticPart
     * @returns {String} offset if it is a dynamic param, otherwise value
     */


    SolidityParam.prototype.staticPart = function () {
      if (!this.isDynamic()) {
        return this.value;
      }

      return this.offsetAsBytes();
    };
    /**
     * This method should be called to get dynamic part of param
     *
     * @method dynamicPart
     * @returns {String} returns a value if it is a dynamic param, otherwise empty string
     */


    SolidityParam.prototype.dynamicPart = function () {
      return this.isDynamic() ? this.value : '';
    };
    /**
     * This method should be called to encode param
     *
     * @method encode
     * @returns {String}
     */


    SolidityParam.prototype.encode = function () {
      return this.staticPart() + this.dynamicPart();
    };
    /**
     * This method should be called to encode array of params
     *
     * @method encodeList
     * @param {Array[SolidityParam]} params
     * @returns {String}
     */


    SolidityParam.encodeList = function (params) {
      // updating offsets
      var totalOffset = params.length * 32;
      var offsetParams = params.map(function (param) {
        if (!param.isDynamic()) {
          return param;
        }

        var offset = totalOffset;
        totalOffset += param.dynamicPartLength();
        return param.withOffset(offset);
      }); // encode everything!

      return offsetParams.reduce(function (result, param) {
        return result + param.dynamicPart();
      }, offsetParams.reduce(function (result, param) {
        return result + param.staticPart();
      }, ''));
    };

    module.exports = SolidityParam;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/solidity/real.js":
  /*!*******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/solidity/real.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibSolidityRealJs(module, exports, __webpack_require__) {
    var f = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/solidity/formatters.js");

    var SolidityType = __webpack_require__(
    /*! ./type */
    "./node_modules/web3-cypher/lib/solidity/type.js");
    /**
     * SolidityTypeReal is a prootype that represents real type
     * It matches:
     * real
     * real[]
     * real[4]
     * real[][]
     * real[3][]
     * real[][6][], ...
     * real32
     * real64[]
     * real8[4]
     * real256[][]
     * real[3][]
     * real64[][6][], ...
     */


    var SolidityTypeReal = function SolidityTypeReal() {
      this._inputFormatter = f.formatInputReal;
      this._outputFormatter = f.formatOutputReal;
    };

    SolidityTypeReal.prototype = new SolidityType({});
    SolidityTypeReal.prototype.constructor = SolidityTypeReal;

    SolidityTypeReal.prototype.isType = function (name) {
      return !!name.match(/real([0-9]*)?(\[([0-9]*)\])?/);
    };

    module.exports = SolidityTypeReal;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/solidity/string.js":
  /*!*********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/solidity/string.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibSolidityStringJs(module, exports, __webpack_require__) {
    var f = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/solidity/formatters.js");

    var SolidityType = __webpack_require__(
    /*! ./type */
    "./node_modules/web3-cypher/lib/solidity/type.js");

    var SolidityTypeString = function SolidityTypeString() {
      this._inputFormatter = f.formatInputString;
      this._outputFormatter = f.formatOutputString;
    };

    SolidityTypeString.prototype = new SolidityType({});
    SolidityTypeString.prototype.constructor = SolidityTypeString;

    SolidityTypeString.prototype.isType = function (name) {
      return !!name.match(/^string(\[([0-9]*)\])*$/);
    };

    SolidityTypeString.prototype.isDynamicType = function () {
      return true;
    };

    module.exports = SolidityTypeString;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/solidity/type.js":
  /*!*******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/solidity/type.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibSolidityTypeJs(module, exports, __webpack_require__) {
    var f = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/solidity/formatters.js");

    var SolidityParam = __webpack_require__(
    /*! ./param */
    "./node_modules/web3-cypher/lib/solidity/param.js");
    /**
     * SolidityType prototype is used to encode/decode solidity params of certain type
     */


    var SolidityType = function SolidityType(config) {
      this._inputFormatter = config.inputFormatter;
      this._outputFormatter = config.outputFormatter;
    };
    /**
     * Should be used to determine if this SolidityType do match given name
     *
     * @method isType
     * @param {String} name
     * @return {Bool} true if type match this SolidityType, otherwise false
     */


    SolidityType.prototype.isType = function (name) {
      throw "this method should be overrwritten for type " + name;
    };
    /**
     * Should be used to determine what is the length of static part in given type
     *
     * @method staticPartLength
     * @param {String} name
     * @return {Number} length of static part in bytes
     */


    SolidityType.prototype.staticPartLength = function (name) {
      // If name isn't an array then treat it like a single element array.
      return (this.nestedTypes(name) || ['[1]']).map(function (type) {
        // the length of the nested array
        return parseInt(type.slice(1, -1), 10) || 1;
      }).reduce(function (previous, current) {
        return previous * current; // all basic types are 32 bytes long
      }, 32);
    };
    /**
     * Should be used to determine if type is dynamic array
     * eg:
     * "type[]" => true
     * "type[4]" => false
     *
     * @method isDynamicArray
     * @param {String} name
     * @return {Bool} true if the type is dynamic array
     */


    SolidityType.prototype.isDynamicArray = function (name) {
      var nestedTypes = this.nestedTypes(name);
      return !!nestedTypes && !nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g);
    };
    /**
     * Should be used to determine if type is static array
     * eg:
     * "type[]" => false
     * "type[4]" => true
     *
     * @method isStaticArray
     * @param {String} name
     * @return {Bool} true if the type is static array
     */


    SolidityType.prototype.isStaticArray = function (name) {
      var nestedTypes = this.nestedTypes(name);
      return !!nestedTypes && !!nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g);
    };
    /**
     * Should return length of static array
     * eg.
     * "int[32]" => 32
     * "int256[14]" => 14
     * "int[2][3]" => 3
     * "int" => 1
     * "int[1]" => 1
     * "int[]" => 1
     *
     * @method staticArrayLength
     * @param {String} name
     * @return {Number} static array length
     */


    SolidityType.prototype.staticArrayLength = function (name) {
      var nestedTypes = this.nestedTypes(name);

      if (nestedTypes) {
        return parseInt(nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g) || 1);
      }

      return 1;
    };
    /**
     * Should return nested type
     * eg.
     * "int[32]" => "int"
     * "int256[14]" => "int256"
     * "int[2][3]" => "int[2]"
     * "int" => "int"
     * "int[]" => "int"
     *
     * @method nestedName
     * @param {String} name
     * @return {String} nested name
     */


    SolidityType.prototype.nestedName = function (name) {
      // remove last [] in name
      var nestedTypes = this.nestedTypes(name);

      if (!nestedTypes) {
        return name;
      }

      return name.substr(0, name.length - nestedTypes[nestedTypes.length - 1].length);
    };
    /**
     * Should return true if type has dynamic size by default
     * such types are "string", "bytes"
     *
     * @method isDynamicType
     * @param {String} name
     * @return {Bool} true if is dynamic, otherwise false
     */


    SolidityType.prototype.isDynamicType = function () {
      return false;
    };
    /**
     * Should return array of nested types
     * eg.
     * "int[2][3][]" => ["[2]", "[3]", "[]"]
     * "int[] => ["[]"]
     * "int" => null
     *
     * @method nestedTypes
     * @param {String} name
     * @return {Array} array of nested types
     */


    SolidityType.prototype.nestedTypes = function (name) {
      // return list of strings eg. "[]", "[3]", "[]", "[2]"
      return name.match(/(\[[0-9]*\])/g);
    };
    /**
     * Should be used to encode the value
     *
     * @method encode
     * @param {Object} value
     * @param {String} name
     * @return {String} encoded value
     */


    SolidityType.prototype.encode = function (value, name) {
      var self = this;

      if (this.isDynamicArray(name)) {
        return function () {
          var length = value.length; // in int

          var nestedName = self.nestedName(name);
          var result = [];
          result.push(f.formatInputInt(length).encode());
          value.forEach(function (v) {
            result.push(self.encode(v, nestedName));
          });
          return result;
        }();
      } else if (this.isStaticArray(name)) {
        return function () {
          var length = self.staticArrayLength(name); // in int

          var nestedName = self.nestedName(name);
          var result = [];

          for (var i = 0; i < length; i++) {
            result.push(self.encode(value[i], nestedName));
          }

          return result;
        }();
      }

      return this._inputFormatter(value, name).encode();
    };
    /**
     * Should be used to decode value from bytes
     *
     * @method decode
     * @param {String} bytes
     * @param {Number} offset in bytes
     * @param {String} name type name
     * @returns {Object} decoded value
     */


    SolidityType.prototype.decode = function (bytes, offset, name) {
      var self = this;

      if (this.isDynamicArray(name)) {
        return function () {
          var arrayOffset = parseInt('0x' + bytes.substr(offset * 2, 64)); // in bytes

          var length = parseInt('0x' + bytes.substr(arrayOffset * 2, 64)); // in int

          var arrayStart = arrayOffset + 32; // array starts after length; // in bytes

          var nestedName = self.nestedName(name);
          var nestedStaticPartLength = self.staticPartLength(nestedName); // in bytes

          var roundedNestedStaticPartLength = Math.floor((nestedStaticPartLength + 31) / 32) * 32;
          var result = [];

          for (var i = 0; i < length * roundedNestedStaticPartLength; i += roundedNestedStaticPartLength) {
            result.push(self.decode(bytes, arrayStart + i, nestedName));
          }

          return result;
        }();
      } else if (this.isStaticArray(name)) {
        return function () {
          var length = self.staticArrayLength(name); // in int

          var arrayStart = offset; // in bytes

          var nestedName = self.nestedName(name);
          var nestedStaticPartLength = self.staticPartLength(nestedName); // in bytes

          var roundedNestedStaticPartLength = Math.floor((nestedStaticPartLength + 31) / 32) * 32;
          var result = [];

          for (var i = 0; i < length * roundedNestedStaticPartLength; i += roundedNestedStaticPartLength) {
            result.push(self.decode(bytes, arrayStart + i, nestedName));
          }

          return result;
        }();
      } else if (this.isDynamicType(name)) {
        return function () {
          var dynamicOffset = parseInt('0x' + bytes.substr(offset * 2, 64)); // in bytes

          var length = parseInt('0x' + bytes.substr(dynamicOffset * 2, 64)); // in bytes

          var roundedLength = Math.floor((length + 31) / 32); // in int

          var param = new SolidityParam(bytes.substr(dynamicOffset * 2, (1 + roundedLength) * 64), 0);
          return self._outputFormatter(param, name);
        }();
      }

      var length = this.staticPartLength(name);
      var param = new SolidityParam(bytes.substr(offset * 2, length * 2));
      return this._outputFormatter(param, name);
    };

    module.exports = SolidityType;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/solidity/uint.js":
  /*!*******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/solidity/uint.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibSolidityUintJs(module, exports, __webpack_require__) {
    var f = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/solidity/formatters.js");

    var SolidityType = __webpack_require__(
    /*! ./type */
    "./node_modules/web3-cypher/lib/solidity/type.js");
    /**
     * SolidityTypeUInt is a prootype that represents uint type
     * It matches:
     * uint
     * uint[]
     * uint[4]
     * uint[][]
     * uint[3][]
     * uint[][6][], ...
     * uint32
     * uint64[]
     * uint8[4]
     * uint256[][]
     * uint[3][]
     * uint64[][6][], ...
     */


    var SolidityTypeUInt = function SolidityTypeUInt() {
      this._inputFormatter = f.formatInputInt;
      this._outputFormatter = f.formatOutputUInt;
    };

    SolidityTypeUInt.prototype = new SolidityType({});
    SolidityTypeUInt.prototype.constructor = SolidityTypeUInt;

    SolidityTypeUInt.prototype.isType = function (name) {
      return !!name.match(/^uint([0-9]*)?(\[([0-9]*)\])*$/);
    };

    module.exports = SolidityTypeUInt;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/solidity/ureal.js":
  /*!********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/solidity/ureal.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibSolidityUrealJs(module, exports, __webpack_require__) {
    var f = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/solidity/formatters.js");

    var SolidityType = __webpack_require__(
    /*! ./type */
    "./node_modules/web3-cypher/lib/solidity/type.js");
    /**
     * SolidityTypeUReal is a prootype that represents ureal type
     * It matches:
     * ureal
     * ureal[]
     * ureal[4]
     * ureal[][]
     * ureal[3][]
     * ureal[][6][], ...
     * ureal32
     * ureal64[]
     * ureal8[4]
     * ureal256[][]
     * ureal[3][]
     * ureal64[][6][], ...
     */


    var SolidityTypeUReal = function SolidityTypeUReal() {
      this._inputFormatter = f.formatInputReal;
      this._outputFormatter = f.formatOutputUReal;
    };

    SolidityTypeUReal.prototype = new SolidityType({});
    SolidityTypeUReal.prototype.constructor = SolidityTypeUReal;

    SolidityTypeUReal.prototype.isType = function (name) {
      return !!name.match(/^ureal([0-9]*)?(\[([0-9]*)\])*$/);
    };

    module.exports = SolidityTypeUReal;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/utils/browser-xhr.js":
  /*!***********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/utils/browser-xhr.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibUtilsBrowserXhrJs(module, exports, __webpack_require__) {
    "use strict"; // go env doesn't have and need XMLHttpRequest

    if (typeof XMLHttpRequest === 'undefined') {
      exports.XMLHttpRequest = {};
    } else {
      exports.XMLHttpRequest = XMLHttpRequest; // jshint ignore:line
    }
    /***/

  },

  /***/
  "./node_modules/web3-cypher/lib/utils/config.js":
  /*!******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/utils/config.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibUtilsConfigJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** @file config.js
     * @authors:
     *   Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */

    /**
     * Utils
     * 
     * @module utils
     */

    /**
     * Utility functions
     * 
     * @class [utils] config
     * @constructor
     */
    /// required to define CPH_BIGNUMBER_ROUNDING_MODE
    var BigNumber = __webpack_require__(
    /*! bignumber.js */
    "./node_modules/web3-cypher/node_modules/bignumber.js/bignumber.js");

    var CPH_UNITS = ['wei', 'kwei', 'Mwei', 'Gwei', 'szabo', 'finney', 'femtocpher', 'picocpher', 'nanocpher', 'microcpher', 'millicpher', 'nano', 'micro', 'milli', 'cpher', 'grand', 'Mcpher', 'Gcpher', 'Tcpher', 'Pcpher', 'Ecpher', 'Zcpher', 'Ycpher', 'Ncpher', 'Dcpher', 'Vcpher', 'Ucpher'];
    module.exports = {
      CPH_PADDING: 32,
      CPH_SIGNATURE_LENGTH: 4,
      CPH_UNITS: CPH_UNITS,
      CPH_BIGNUMBER_ROUNDING_MODE: {
        ROUNDING_MODE: BigNumber.ROUND_DOWN
      },
      CPH_POLLING_TIMEOUT: 1000 / 2,
      defaultBlock: 'latest',
      defaultAccount: undefined
    };
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/utils/sha3.js":
  /*!****************************************************!*\
    !*** ./node_modules/web3-cypher/lib/utils/sha3.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibUtilsSha3Js(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** 
     * @file sha3.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var CryptoJS = __webpack_require__(
    /*! crypto-js */
    "./node_modules/crypto-js/index.js");

    var sha3 = __webpack_require__(
    /*! crypto-js/sha3 */
    "./node_modules/crypto-js/sha3.js");

    module.exports = function (value, options) {
      if (options && options.encoding === 'hex') {
        if (value.length > 2 && value.substr(0, 2) === '0x') {
          value = value.substr(2);
        }

        value = CryptoJS.enc.Hex.parse(value);
      }

      return sha3(value, {
        outputLength: 256
      }).toString();
    };
    /***/

  },

  /***/
  "./node_modules/web3-cypher/lib/utils/utils.js":
  /*!*****************************************************!*\
    !*** ./node_modules/web3-cypher/lib/utils/utils.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibUtilsUtilsJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file utils.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */

    /**
     * Utils
     *
     * @module utils
     */

    /**
     * Utility functions
     *
     * @class [utils] utils
     * @constructor
     */
    var BigNumber = __webpack_require__(
    /*! bignumber.js */
    "./node_modules/web3-cypher/node_modules/bignumber.js/bignumber.js");

    var sha3 = __webpack_require__(
    /*! ./sha3.js */
    "./node_modules/web3-cypher/lib/utils/sha3.js");

    var utf8 = __webpack_require__(
    /*! utf8 */
    "./node_modules/web3-cypher/node_modules/utf8/utf8.js");

    var unitMap = {
      'nocpher': '0',
      'wei': '1',
      'kwei': '1000',
      'Kwei': '1000',
      'babbage': '1000',
      'femtocpher': '1000',
      'mwei': '1000000',
      'Mwei': '1000000',
      'lovelace': '1000000',
      'picocpher': '1000000',
      'gwei': '1000000000',
      'Gwei': '1000000000',
      'shannon': '1000000000',
      'nanocpher': '1000000000',
      'nano': '1000000000',
      'szabo': '1000000000000',
      'microcpher': '1000000000000',
      'micro': '1000000000000',
      'finney': '1000000000000000',
      'millicpher': '1000000000000000',
      'milli': '1000000000000000',
      'cpher': '1000000000000000000',
      'kcpher': '1000000000000000000000',
      'grand': '1000000000000000000000',
      'mcpher': '1000000000000000000000000',
      'gcpher': '1000000000000000000000000000',
      'tcpher': '1000000000000000000000000000000'
    };
    /**
     * Should be called to pad string to expected length
     *
     * @method padLeft
     * @param {String} string to be padded
     * @param {Number} characters that result string should have
     * @param {String} sign, by default 0
     * @returns {String} right aligned string
     */

    var padLeft = function padLeft(string, chars, sign) {
      return new Array(chars - string.length + 1).join(sign ? sign : "0") + string;
    };
    /**
     * Should be called to pad string to expected length
     *
     * @method padRight
     * @param {String} string to be padded
     * @param {Number} characters that result string should have
     * @param {String} sign, by default 0
     * @returns {String} right aligned string
     */


    var padRight = function padRight(string, chars, sign) {
      return string + new Array(chars - string.length + 1).join(sign ? sign : "0");
    };
    /**
     * Should be called to get utf8 from it's hex representation
     *
     * @method toUtf8
     * @param {String} string in hex
     * @returns {String} ascii string representation of hex value
     */


    var toUtf8 = function toUtf8(hex) {
      // Find termination
      var str = "";
      var i = 0,
          l = hex.length;

      if (hex.substring(0, 2) === '0x') {
        i = 2;
      }

      for (; i < l; i += 2) {
        var code = parseInt(hex.substr(i, 2), 16);
        if (code === 0) break;
        str += String.fromCharCode(code);
      }

      return utf8.decode(str);
    };
    /**
     * Should be called to get ascii from it's hex representation
     *
     * @method toAscii
     * @param {String} string in hex
     * @returns {String} ascii string representation of hex value
     */


    var toAscii = function toAscii(hex) {
      // Find termination
      var str = "";
      var i = 0,
          l = hex.length;

      if (hex.substring(0, 2) === '0x') {
        i = 2;
      }

      for (; i < l; i += 2) {
        var code = parseInt(hex.substr(i, 2), 16);
        str += String.fromCharCode(code);
      }

      return str;
    };
    /**
     * Should be called to get hex representation (prefixed by 0x) of utf8 string
     *
     * @method fromUtf8
     * @param {String} string
     * @param {Boolean} allowZero to convert code point zero to 00 instead of end of string
     * @returns {String} hex representation of input string
     */


    var fromUtf8 = function fromUtf8(str, allowZero) {
      str = utf8.encode(str);
      var hex = "";

      for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);

        if (code === 0) {
          if (allowZero) {
            hex += '00';
          } else {
            break;
          }
        } else {
          var n = code.toString(16);
          hex += n.length < 2 ? '0' + n : n;
        }
      }

      return "0x" + hex;
    };
    /**
     * Should be called to get hex representation (prefixed by 0x) of ascii string
     *
     * @method fromAscii
     * @param {String} string
     * @param {Number} optional padding
     * @returns {String} hex representation of input string
     */


    var fromAscii = function fromAscii(str) {
      var hex = "";

      for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        var n = code.toString(16);
        hex += n.length < 2 ? '0' + n : n;
      }

      return "0x" + hex;
    };
    /**
     * Should be used to create full function/event name from json abi
     *
     * @method transformToFullName
     * @param {Object} json-abi
     * @return {String} full fnction/event name
     */


    var transformToFullName = function transformToFullName(json) {
      if (json.name.indexOf('(') !== -1) {
        return json.name;
      }

      var typeName = json.inputs.map(function (i) {
        return i.type;
      }).join();
      return json.name + '(' + typeName + ')';
    };
    /**
     * Should be called to get display name of contract function
     *
     * @method extractDisplayName
     * @param {String} name of function/event
     * @returns {String} display name for function/event eg. multiply(uint256) -> multiply
     */


    var extractDisplayName = function extractDisplayName(name) {
      var stBracket = name.indexOf('(');
      var endBracket = name.indexOf(')');
      return stBracket !== -1 && endBracket !== -1 ? name.substr(0, stBracket) : name;
    };
    /**
     * Should be called to get type name of contract function
     *
     * @method extractTypeName
     * @param {String} name of function/event
     * @returns {String} type name for function/event eg. multiply(uint256) -> uint256
     */


    var extractTypeName = function extractTypeName(name) {
      var stBracket = name.indexOf('(');
      var endBracket = name.indexOf(')');
      return stBracket !== -1 && endBracket !== -1 ? name.substr(stBracket + 1, endBracket - stBracket - 1).replace(' ', '') : "";
    };
    /**
     * Converts value to it's decimal representation in string
     *
     * @method toDecimal
     * @param {String|Number|BigNumber}
     * @return {String}
     */


    var toDecimal = function toDecimal(value) {
      return toBigNumber(value).toNumber();
    };
    /**
     * Converts value to it's hex representation
     *
     * @method fromDecimal
     * @param {String|Number|BigNumber}
     * @return {String}
     */


    var fromDecimal = function fromDecimal(value) {
      var number = toBigNumber(value);
      var result = number.toString(16);
      return number.lessThan(0) ? '-0x' + result.substr(1) : '0x' + result;
    };
    /**
     * Auto converts any given value into it's hex representation.
     *
     * And even stringifys objects before.
     *
     * @method toHex
     * @param {String|Number|BigNumber|Object}
     * @return {String}
     */


    var toHex = function toHex(val) {
      /*jshint maxcomplexity: 8 */
      if (isBoolean(val)) return fromDecimal(+val);
      if (isBigNumber(val)) return fromDecimal(val);
      if (typeof val === 'object') return fromUtf8(JSON.stringify(val)); // if its a negative number, pass it through fromDecimal

      if (isString(val)) {
        if (val.indexOf('-0x') === 0) return fromDecimal(val);else if (val.indexOf('0x') === 0) return val;else if (!isFinite(val)) return fromUtf8(val, 1);
      }

      return fromDecimal(val);
    };
    /**
     * Returns value of unit in Wei
     *
     * @method getValueOfUnit
     * @param {String} unit the unit to convert to, default cpher
     * @returns {BigNumber} value of the unit (in Wei)
     * @throws error if the unit is not correct:w
     */


    var getValueOfUnit = function getValueOfUnit(unit) {
      unit = unit ? unit.toLowerCase() : 'cpher';
      var unitValue = unitMap[unit];

      if (unitValue === undefined) {
        throw new Error('This unit doesn\'t exists, please use the one of the following units' + JSON.stringify(unitMap, null, 2));
      }

      return new BigNumber(unitValue, 10);
    };
    /**
     * Takes a number of wei and converts it to any other cpher unit.
     *
     * Possible units are:
     *   SI Short   SI Full        Effigy       Other
     * - kwei       femtoether     babbage
     * - mwei       picoether      lovelace
     * - gwei       nanoether      shannon      nano
     * - --         microether     szabo        micro
     * - --         milliether     finney       milli
     * - cpher      --             --
     * - kether                    --           grand
     * - mether
     * - gether
     * - tether
     *
     * @method fromWei
     * @param {Number|String} number can be a number, number string or a HEX of a decimal
     * @param {String} unit the unit to convert to, default cpher
     * @return {String|Object} When given a BigNumber object it returns one as well, otherwise a number
    */


    var fromWei = function fromWei(number, unit) {
      var returnValue = toBigNumber(number).dividedBy(getValueOfUnit(unit));
      return isBigNumber(number) ? returnValue : returnValue.toString(10);
    };
    /**
     * Takes a number of a unit and converts it to wei.
     *
     * Possible units are:
     *   SI Short   SI Full        Effigy       Other
     * - kwei       femtoether     babbage
     * - mwei       picoether      lovelace
     * - gwei       nanoether      shannon      nano
     * - --         microether     szabo        micro
     * - --         milliether     finney       milli
     * - cpher      --             --
     * - kether                    --           grand
     * - mether
     * - gether
     * - tether
     *
     * @method toWei
     * @param {Number|String|BigNumber} number can be a number, number string or a HEX of a decimal
     * @param {String} unit the unit to convert from, default cpher
     * @return {String|Object} When given a BigNumber object it returns one as well, otherwise a number
    */


    var toWei = function toWei(number, unit) {
      var returnValue = toBigNumber(number).times(getValueOfUnit(unit));
      return isBigNumber(number) ? returnValue : returnValue.toString(10);
    };
    /**
     * Takes an input and transforms it into an bignumber
     *
     * @method toBigNumber
     * @param {Number|String|BigNumber} a number, string, HEX string or BigNumber
     * @return {BigNumber} BigNumber
    */


    var toBigNumber = function toBigNumber(number) {
      /*jshint maxcomplexity:5 */
      number = number || 0;
      if (isBigNumber(number)) return number;

      if (isString(number) && (number.indexOf('0x') === 0 || number.indexOf('-0x') === 0)) {
        return new BigNumber(number.replace('0x', ''), 16);
      }

      return new BigNumber(number.toString(10), 10);
    };
    /**
     * Takes and input transforms it into bignumber and if it is negative value, into two's complement
     *
     * @method toTwosComplement
     * @param {Number|String|BigNumber}
     * @return {BigNumber}
     */


    var toTwosComplement = function toTwosComplement(number) {
      var bigNumber = toBigNumber(number).round();

      if (bigNumber.lessThan(0)) {
        return new BigNumber("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16).plus(bigNumber).plus(1);
      }

      return bigNumber;
    };
    /**
     * Checks if the given string is strictly an address
     *
     * @method isStrictAddress
     * @param {String} address the given HEX adress
     * @return {Boolean}
    */


    var isStrictAddress = function isStrictAddress(address) {
      return /^0x[0-9a-f]{40}$/i.test(address);
    };
    /**
     * Checks if the given string is an address
     *
     * @method isAddress
     * @param {String} address the given HEX adress
     * @return {Boolean}
    */


    var isAddress = function isAddress(address) {
      if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        // check if it has the basic requirements of an address
        return false;
      } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        // If it's all small caps or all all caps, return true
        return true;
      } else {
        // Otherwise check each case
        return isChecksumAddress(address);
      }
    };
    /**
     * Checks if the given string is a checksummed address
     *
     * @method isChecksumAddress
     * @param {String} address the given HEX adress
     * @return {Boolean}
    */


    var isChecksumAddress = function isChecksumAddress(address) {
      // Check each case
      address = address.replace('0x', '');
      var addressHash = sha3(address.toLowerCase());

      for (var i = 0; i < 40; i++) {
        // the nth letter should be uppercase if the nth digit of casemap is 1
        if (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i] || parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i]) {
          return false;
        }
      }

      return true;
    };
    /**
     * Makes a checksum address
     *
     * @method toChecksumAddress
     * @param {String} address the given HEX adress
     * @return {String}
    */


    var toChecksumAddress = function toChecksumAddress(address) {
      if (typeof address === 'undefined') return '';
      address = address.toLowerCase().replace('0x', '');
      var addressHash = sha3(address);
      var checksumAddress = '0x';

      for (var i = 0; i < address.length; i++) {
        // If ith character is 9 to f then make it uppercase
        if (parseInt(addressHash[i], 16) > 7) {
          checksumAddress += address[i].toUpperCase();
        } else {
          checksumAddress += address[i];
        }
      }

      return checksumAddress;
    };
    /**
     * Transforms given string to valid 20 bytes-length addres with 0x prefix
     *
     * @method toAddress
     * @param {String} address
     * @return {String} formatted address
     */


    var toAddress = function toAddress(address) {
      if (isStrictAddress(address)) {
        return address;
      }

      if (/^[0-9a-f]{40}$/.test(address)) {
        return '0x' + address;
      }

      return '0x' + padLeft(toHex(address).substr(2), 40);
    };
    /**
     * Returns true if object is BigNumber, otherwise false
     *
     * @method isBigNumber
     * @param {Object}
     * @return {Boolean}
     */


    var isBigNumber = function isBigNumber(object) {
      return object instanceof BigNumber || object && object.constructor && object.constructor.name === 'BigNumber';
    };
    /**
     * Returns true if object is string, otherwise false
     *
     * @method isString
     * @param {Object}
     * @return {Boolean}
     */


    var isString = function isString(object) {
      return typeof object === 'string' || object && object.constructor && object.constructor.name === 'String';
    };
    /**
     * Returns true if object is function, otherwise false
     *
     * @method isFunction
     * @param {Object}
     * @return {Boolean}
     */


    var isFunction = function isFunction(object) {
      return typeof object === 'function';
    };
    /**
     * Returns true if object is Objet, otherwise false
     *
     * @method isObject
     * @param {Object}
     * @return {Boolean}
     */


    var isObject = function isObject(object) {
      return object !== null && !Array.isArray(object) && typeof object === 'object';
    };
    /**
     * Returns true if object is boolean, otherwise false
     *
     * @method isBoolean
     * @param {Object}
     * @return {Boolean}
     */


    var isBoolean = function isBoolean(object) {
      return typeof object === 'boolean';
    };
    /**
     * Returns true if object is array, otherwise false
     *
     * @method isArray
     * @param {Object}
     * @return {Boolean}
     */


    var isArray = function isArray(object) {
      return Array.isArray(object);
    };
    /**
     * Returns true if given string is valid json object
     *
     * @method isJson
     * @param {String}
     * @return {Boolean}
     */


    var isJson = function isJson(str) {
      try {
        return !!JSON.parse(str);
      } catch (e) {
        return false;
      }
    };
    /**
     * Returns true if given string is a valid Cypherium block header bloom.
     *
     * @method isBloom
     * @param {String} hex encoded bloom filter
     * @return {Boolean}
     */


    var isBloom = function isBloom(bloom) {
      if (!/^(0x)?[0-9a-f]{512}$/i.test(bloom)) {
        return false;
      } else if (/^(0x)?[0-9a-f]{512}$/.test(bloom) || /^(0x)?[0-9A-F]{512}$/.test(bloom)) {
        return true;
      }

      return false;
    };
    /**
     * Returns true if given string is a valid log topic.
     *
     * @method isTopic
     * @param {String} hex encoded topic
     * @return {Boolean}
     */


    var isTopic = function isTopic(topic) {
      if (!/^(0x)?[0-9a-f]{64}$/i.test(topic)) {
        return false;
      } else if (/^(0x)?[0-9a-f]{64}$/.test(topic) || /^(0x)?[0-9A-F]{64}$/.test(topic)) {
        return true;
      }

      return false;
    };

    module.exports = {
      padLeft: padLeft,
      padRight: padRight,
      toHex: toHex,
      toDecimal: toDecimal,
      fromDecimal: fromDecimal,
      toUtf8: toUtf8,
      toAscii: toAscii,
      fromUtf8: fromUtf8,
      fromAscii: fromAscii,
      transformToFullName: transformToFullName,
      extractDisplayName: extractDisplayName,
      extractTypeName: extractTypeName,
      toWei: toWei,
      fromWei: fromWei,
      toBigNumber: toBigNumber,
      toTwosComplement: toTwosComplement,
      toAddress: toAddress,
      isBigNumber: isBigNumber,
      isStrictAddress: isStrictAddress,
      isAddress: isAddress,
      isChecksumAddress: isChecksumAddress,
      toChecksumAddress: toChecksumAddress,
      isFunction: isFunction,
      isString: isString,
      isObject: isObject,
      isBoolean: isBoolean,
      isArray: isArray,
      isJson: isJson,
      isBloom: isBloom,
      isTopic: isTopic
    };
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/version.json":
  /*!***************************************************!*\
    !*** ./node_modules/web3-cypher/lib/version.json ***!
    \***************************************************/

  /*! exports provided: version, default */

  /***/
  function node_modulesWeb3CypherLibVersionJson(module) {
    module.exports = JSON.parse("{\"version\":\"0.20.6\"}");
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3.js":
  /*!**********************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3Js(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file web3.js
     * @authors:
     *   Jeffrey Wilcke <jeff@cphdev.com>
     *   Marek Kotewicz <marek@cphdev.com>
     *   Marian Oancea <marian@cphdev.com>
     *   Fabian Vogelsteller <fabian@cphdev.com>
     *   Gav Wood <g@cphdev.com>
     * @date 2014
     */
    var RequestManager = __webpack_require__(
    /*! ./web3/requestmanager */
    "./node_modules/web3-cypher/lib/web3/requestmanager.js");

    var Iban = __webpack_require__(
    /*! ./web3/iban */
    "./node_modules/web3-cypher/lib/web3/iban.js");

    var Cph = __webpack_require__(
    /*! ./web3/methods/cph */
    "./node_modules/web3-cypher/lib/web3/methods/cph.js");

    var DB = __webpack_require__(
    /*! ./web3/methods/db */
    "./node_modules/web3-cypher/lib/web3/methods/db.js");

    var Shh = __webpack_require__(
    /*! ./web3/methods/shh */
    "./node_modules/web3-cypher/lib/web3/methods/shh.js");

    var Net = __webpack_require__(
    /*! ./web3/methods/net */
    "./node_modules/web3-cypher/lib/web3/methods/net.js");

    var Personal = __webpack_require__(
    /*! ./web3/methods/personal */
    "./node_modules/web3-cypher/lib/web3/methods/personal.js");

    var Swarm = __webpack_require__(
    /*! ./web3/methods/swarm */
    "./node_modules/web3-cypher/lib/web3/methods/swarm.js");

    var Settings = __webpack_require__(
    /*! ./web3/settings */
    "./node_modules/web3-cypher/lib/web3/settings.js");

    var version = __webpack_require__(
    /*! ./version.json */
    "./node_modules/web3-cypher/lib/version.json");

    var utils = __webpack_require__(
    /*! ./utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var sha3 = __webpack_require__(
    /*! ./utils/sha3 */
    "./node_modules/web3-cypher/lib/utils/sha3.js");

    var extend = __webpack_require__(
    /*! ./web3/extend */
    "./node_modules/web3-cypher/lib/web3/extend.js");

    var Batch = __webpack_require__(
    /*! ./web3/batch */
    "./node_modules/web3-cypher/lib/web3/batch.js");

    var Property = __webpack_require__(
    /*! ./web3/property */
    "./node_modules/web3-cypher/lib/web3/property.js");

    var HttpProvider = __webpack_require__(
    /*! ./web3/httpprovider */
    "./node_modules/web3-cypher/lib/web3/httpprovider.js");

    var IpcProvider = __webpack_require__(
    /*! ./web3/ipcprovider */
    "./node_modules/web3-cypher/lib/web3/ipcprovider.js");

    var BigNumber = __webpack_require__(
    /*! bignumber.js */
    "./node_modules/web3-cypher/node_modules/bignumber.js/bignumber.js");

    function Web3(provider) {
      this._requestManager = new RequestManager(provider);
      this.currentProvider = provider;
      this.cph = new Cph(this);
      this.db = new DB(this);
      this.shh = new Shh(this);
      this.net = new Net(this);
      this.personal = new Personal(this);
      this.bzz = new Swarm(this);
      this.settings = new Settings();
      this.version = {
        api: version.version
      };
      this.providers = {
        HttpProvider: HttpProvider,
        IpcProvider: IpcProvider
      };
      this._extend = extend(this);

      this._extend({
        properties: properties()
      });
    } // expose providers on the class


    Web3.providers = {
      HttpProvider: HttpProvider,
      IpcProvider: IpcProvider
    };

    Web3.prototype.setProvider = function (provider) {
      this._requestManager.setProvider(provider);

      this.currentProvider = provider;
    };

    Web3.prototype.reset = function (keepIsSyncing) {
      this._requestManager.reset(keepIsSyncing);

      this.settings = new Settings();
    };

    Web3.prototype.BigNumber = BigNumber;
    Web3.prototype.toHex = utils.toHex;
    Web3.prototype.toAscii = utils.toAscii;
    Web3.prototype.toUtf8 = utils.toUtf8;
    Web3.prototype.fromAscii = utils.fromAscii;
    Web3.prototype.fromUtf8 = utils.fromUtf8;
    Web3.prototype.toDecimal = utils.toDecimal;
    Web3.prototype.fromDecimal = utils.fromDecimal;
    Web3.prototype.toBigNumber = utils.toBigNumber;
    Web3.prototype.toWei = utils.toWei;
    Web3.prototype.fromWei = utils.fromWei;
    Web3.prototype.isAddress = utils.isAddress;
    Web3.prototype.isChecksumAddress = utils.isChecksumAddress;
    Web3.prototype.toChecksumAddress = utils.toChecksumAddress;
    Web3.prototype.isIBAN = utils.isIBAN;
    Web3.prototype.padLeft = utils.padLeft;
    Web3.prototype.padRight = utils.padRight;

    Web3.prototype.sha3 = function (string, options) {
      return '0x' + sha3(string, options);
    };
    /**
     * Transforms direct icap to address
     */


    Web3.prototype.fromICAP = function (icap) {
      var iban = new Iban(icap);
      return iban.address();
    };

    var properties = function properties() {
      return [new Property({
        name: 'version.node',
        getter: 'web3_clientVersion'
      }), new Property({
        name: 'version.network',
        getter: 'net_version',
        inputFormatter: utils.toDecimal
      }), new Property({
        name: 'version.cypherium',
        getter: 'cph_protocolVersion',
        inputFormatter: utils.toDecimal
      }), new Property({
        name: 'version.whisper',
        getter: 'shh_version',
        inputFormatter: utils.toDecimal
      })];
    };

    Web3.prototype.isConnected = function () {
      return this.currentProvider && this.currentProvider.isConnected();
    };

    Web3.prototype.createBatch = function () {
      return new Batch(this);
    };

    module.exports = Web3;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/allevents.js":
  /*!********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/allevents.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3AlleventsJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file allevents.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2014
     */
    var sha3 = __webpack_require__(
    /*! ../utils/sha3 */
    "./node_modules/web3-cypher/lib/utils/sha3.js");

    var SolidityEvent = __webpack_require__(
    /*! ./event */
    "./node_modules/web3-cypher/lib/web3/event.js");

    var formatters = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/web3/formatters.js");

    var utils = __webpack_require__(
    /*! ../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var Filter = __webpack_require__(
    /*! ./filter */
    "./node_modules/web3-cypher/lib/web3/filter.js");

    var watches = __webpack_require__(
    /*! ./methods/watches */
    "./node_modules/web3-cypher/lib/web3/methods/watches.js");

    var AllSolidityEvents = function AllSolidityEvents(requestManager, json, address) {
      this._requestManager = requestManager;
      this._json = json;
      this._address = address;
    };

    AllSolidityEvents.prototype.encode = function (options) {
      options = options || {};
      var result = {};
      ['fromBlock', 'toBlock'].filter(function (f) {
        return options[f] !== undefined;
      }).forEach(function (f) {
        result[f] = formatters.inputBlockNumberFormatter(options[f]);
      });
      result.address = this._address;
      return result;
    };

    AllSolidityEvents.prototype.decode = function (data) {
      data.data = data.data || '';
      var eventTopic = utils.isArray(data.topics) && utils.isString(data.topics[0]) ? data.topics[0].slice(2) : '';

      var match = this._json.filter(function (j) {
        return eventTopic === sha3(utils.transformToFullName(j));
      })[0];

      if (!match) {
        // cannot find matching event?
        return formatters.outputLogFormatter(data);
      }

      var event = new SolidityEvent(this._requestManager, match, this._address);
      return event.decode(data);
    };

    AllSolidityEvents.prototype.execute = function (options, callback) {
      if (utils.isFunction(arguments[arguments.length - 1])) {
        callback = arguments[arguments.length - 1];
        if (arguments.length === 1) options = null;
      }

      var o = this.encode(options);
      var formatter = this.decode.bind(this);
      return new Filter(o, 'cph', this._requestManager, watches.cph(), formatter, callback);
    };

    AllSolidityEvents.prototype.attachToContract = function (contract) {
      var execute = this.execute.bind(this);
      contract.allEvents = execute;
    };

    module.exports = AllSolidityEvents;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/batch.js":
  /*!****************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/batch.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3BatchJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** 
     * @file batch.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var Jsonrpc = __webpack_require__(
    /*! ./jsonrpc */
    "./node_modules/web3-cypher/lib/web3/jsonrpc.js");

    var errors = __webpack_require__(
    /*! ./errors */
    "./node_modules/web3-cypher/lib/web3/errors.js");

    var Batch = function Batch(web3) {
      this.requestManager = web3._requestManager;
      this.requests = [];
    };
    /**
     * Should be called to add create new request to batch request
     *
     * @method add
     * @param {Object} jsonrpc requet object
     */


    Batch.prototype.add = function (request) {
      this.requests.push(request);
    };
    /**
     * Should be called to execute batch request
     *
     * @method execute
     */


    Batch.prototype.execute = function () {
      var requests = this.requests;
      this.requestManager.sendBatch(requests, function (err, results) {
        results = results || [];
        requests.map(function (request, index) {
          return results[index] || {};
        }).forEach(function (result, index) {
          if (requests[index].callback) {
            if (!Jsonrpc.isValidResponse(result)) {
              return requests[index].callback(errors.InvalidResponse(result));
            }

            requests[index].callback(null, requests[index].format ? requests[index].format(result.result) : result.result);
          }
        });
      });
    };

    module.exports = Batch;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/contract.js":
  /*!*******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/contract.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3ContractJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file contract.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2014
     */
    var utils = __webpack_require__(
    /*! ../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var coder = __webpack_require__(
    /*! ../solidity/coder */
    "./node_modules/web3-cypher/lib/solidity/coder.js");

    var SolidityEvent = __webpack_require__(
    /*! ./event */
    "./node_modules/web3-cypher/lib/web3/event.js");

    var SolidityFunction = __webpack_require__(
    /*! ./function */
    "./node_modules/web3-cypher/lib/web3/function.js");

    var AllEvents = __webpack_require__(
    /*! ./allevents */
    "./node_modules/web3-cypher/lib/web3/allevents.js");
    /**
     * Should be called to encode constructor params
     *
     * @method encodeConstructorParams
     * @param {Array} abi
     * @param {Array} constructor params
     */


    var encodeConstructorParams = function encodeConstructorParams(abi, params) {
      return abi.filter(function (json) {
        return json.type === 'constructor' && json.inputs.length === params.length;
      }).map(function (json) {
        return json.inputs.map(function (input) {
          return input.type;
        });
      }).map(function (types) {
        return coder.encodeParams(types, params);
      })[0] || '';
    };
    /**
     * Should be called to add functions to contract object
     *
     * @method addFunctionsToContract
     * @param {Contract} contract
     * @param {Array} abi
     */


    var addFunctionsToContract = function addFunctionsToContract(contract) {
      contract.abi.filter(function (json) {
        return json.type === 'function';
      }).map(function (json) {
        return new SolidityFunction(contract._cph, json, contract.address);
      }).forEach(function (f) {
        f.attachToContract(contract);
      });
    };
    /**
     * Should be called to add events to contract object
     *
     * @method addEventsToContract
     * @param {Contract} contract
     * @param {Array} abi
     */


    var addEventsToContract = function addEventsToContract(contract) {
      var events = contract.abi.filter(function (json) {
        return json.type === 'event';
      });
      var All = new AllEvents(contract._cph._requestManager, events, contract.address);
      All.attachToContract(contract);
      events.map(function (json) {
        return new SolidityEvent(contract._cph._requestManager, json, contract.address);
      }).forEach(function (e) {
        e.attachToContract(contract);
      });
    };
    /**
     * Should be called to check if the contract gets properly deployed on the blockchain.
     *
     * @method checkForContractAddress
     * @param {Object} contract
     * @param {Function} callback
     * @returns {Undefined}
     */


    var checkForContractAddress = function checkForContractAddress(contract, callback) {
      var count = 0,
          callbackFired = false; // wait for receipt

      var filter = contract._cph.filter('latest', function (e) {
        if (!e && !callbackFired) {
          count++; // stop watching after 50 blocks (timeout)

          if (count > 50) {
            filter.stopWatching(function () {});
            callbackFired = true;
            if (callback) callback(new Error('Contract transaction couldn\'t be found after 50 blocks'));else throw new Error('Contract transaction couldn\'t be found after 50 blocks');
          } else {
            contract._cph.getTransactionReceipt(contract.transactionHash, function (e, receipt) {
              if (receipt && receipt.blockHash && !callbackFired) {
                contract._cph.getCode(receipt.contractAddress, function (e, code) {
                  /*jshint maxcomplexity: 6 */
                  if (callbackFired || !code) return;
                  filter.stopWatching(function () {});
                  callbackFired = true;

                  if (code.length > 3) {
                    // console.log('Contract code deployed!');
                    contract.address = receipt.contractAddress; // attach events and methods again after we have

                    addFunctionsToContract(contract);
                    addEventsToContract(contract); // call callback for the second time

                    if (callback) callback(null, contract);
                  } else {
                    if (callback) callback(new Error('The contract code couldn\'t be stored, please check your gas amount.'));else throw new Error('The contract code couldn\'t be stored, please check your gas amount.');
                  }
                });
              }
            });
          }
        }
      });
    };
    /**
     * Should be called to create new ContractFactory instance
     *
     * @method ContractFactory
     * @param {Array} abi
     */


    var ContractFactory = function ContractFactory(cph, abi) {
      this.cph = cph;
      this.abi = abi;
      /**
       * Should be called to create new contract on a blockchain
       *
       * @method new
       * @param {Any} contract constructor param1 (optional)
       * @param {Any} contract constructor param2 (optional)
       * @param {Object} contract transaction object (required)
       * @param {Function} callback
       * @returns {Contract} returns contract instance
       */

      this.new = function () {
        /*jshint maxcomplexity: 7 */
        var contract = new Contract(this.cph, this.abi); // parse arguments

        var options = {}; // required!

        var callback;
        var args = Array.prototype.slice.call(arguments);

        if (utils.isFunction(args[args.length - 1])) {
          callback = args.pop();
        }

        var last = args[args.length - 1];

        if (utils.isObject(last) && !utils.isArray(last)) {
          options = args.pop();
        }

        if (options.value > 0) {
          var constructorAbi = abi.filter(function (json) {
            return json.type === 'constructor' && json.inputs.length === args.length;
          })[0] || {};

          if (!constructorAbi.payable) {
            throw new Error('Cannot send value to non-payable constructor');
          }
        }

        var bytes = encodeConstructorParams(this.abi, args);
        options.data += bytes;

        if (callback) {
          // wait for the contract address and check if the code was deployed
          this.cph.sendTransaction(options, function (err, hash) {
            if (err) {
              callback(err);
            } else {
              // add the transaction hash
              contract.transactionHash = hash; // call callback for the first time

              callback(null, contract);
              checkForContractAddress(contract, callback);
            }
          });
        } else {
          var hash = this.cph.sendTransaction(options); // add the transaction hash

          contract.transactionHash = hash;
          checkForContractAddress(contract);
        }

        return contract;
      };

      this.new.getData = this.getData.bind(this);
    };
    /**
     * Should be called to create new ContractFactory
     *
     * @method contract
     * @param {Array} abi
     * @returns {ContractFactory} new contract factory
     */
    //var contract = function (abi) {
    //return new ContractFactory(abi);
    //};

    /**
     * Should be called to get access to existing contract on a blockchain
     *
     * @method at
     * @param {Address} contract address (required)
     * @param {Function} callback {optional)
     * @returns {Contract} returns contract if no callback was passed,
     * otherwise calls callback function (err, contract)
     */


    ContractFactory.prototype.at = function (address, callback) {
      var contract = new Contract(this.cph, this.abi, address); // this functions are not part of prototype,
      // because we dont want to spoil the interface

      addFunctionsToContract(contract);
      addEventsToContract(contract);

      if (callback) {
        callback(null, contract);
      }

      return contract;
    };
    /**
     * Gets the data, which is data to deploy plus constructor params
     *
     * @method getData
     */


    ContractFactory.prototype.getData = function () {
      var options = {}; // required!

      var args = Array.prototype.slice.call(arguments);
      var last = args[args.length - 1];

      if (utils.isObject(last) && !utils.isArray(last)) {
        options = args.pop();
      }

      var bytes = encodeConstructorParams(this.abi, args);
      options.data += bytes;
      return options.data;
    };
    /**
     * Should be called to create new contract instance
     *
     * @method Contract
     * @param {Array} abi
     * @param {Address} contract address
     */


    var Contract = function Contract(cph, abi, address) {
      this._cph = cph;
      this.transactionHash = null;
      this.address = address;
      this.abi = abi;
    };

    module.exports = ContractFactory;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/errors.js":
  /*!*****************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/errors.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3ErrorsJs(module, exports) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** 
     * @file errors.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    module.exports = {
      InvalidNumberOfSolidityArgs: function InvalidNumberOfSolidityArgs() {
        return new Error('Invalid number of arguments to Solidity function');
      },
      InvalidNumberOfRPCParams: function InvalidNumberOfRPCParams() {
        return new Error('Invalid number of input parameters to RPC method');
      },
      InvalidConnection: function InvalidConnection(host) {
        return new Error('CONNECTION ERROR: Couldn\'t connect to node ' + host + '.');
      },
      InvalidProvider: function InvalidProvider() {
        return new Error('Provider not set or invalid');
      },
      InvalidResponse: function InvalidResponse(result) {
        var message = !!result && !!result.error && !!result.error.message ? result.error.message : 'Invalid JSON RPC response: ' + JSON.stringify(result);
        return new Error(message);
      },
      ConnectionTimeout: function ConnectionTimeout(ms) {
        return new Error('CONNECTION TIMEOUT: timeout of ' + ms + ' ms achived');
      }
    };
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/event.js":
  /*!****************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/event.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3EventJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file event.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2014
     */
    var utils = __webpack_require__(
    /*! ../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var coder = __webpack_require__(
    /*! ../solidity/coder */
    "./node_modules/web3-cypher/lib/solidity/coder.js");

    var formatters = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/web3/formatters.js");

    var sha3 = __webpack_require__(
    /*! ../utils/sha3 */
    "./node_modules/web3-cypher/lib/utils/sha3.js");

    var Filter = __webpack_require__(
    /*! ./filter */
    "./node_modules/web3-cypher/lib/web3/filter.js");

    var watches = __webpack_require__(
    /*! ./methods/watches */
    "./node_modules/web3-cypher/lib/web3/methods/watches.js");
    /**
     * This prototype should be used to create event filters
     */


    var SolidityEvent = function SolidityEvent(requestManager, json, address) {
      this._requestManager = requestManager;
      this._params = json.inputs;
      this._name = utils.transformToFullName(json);
      this._address = address;
      this._anonymous = json.anonymous;
    };
    /**
     * Should be used to get filtered param types
     *
     * @method types
     * @param {Bool} decide if returned typed should be indexed
     * @return {Array} array of types
     */


    SolidityEvent.prototype.types = function (indexed) {
      return this._params.filter(function (i) {
        return i.indexed === indexed;
      }).map(function (i) {
        return i.type;
      });
    };
    /**
     * Should be used to get event display name
     *
     * @method displayName
     * @return {String} event display name
     */


    SolidityEvent.prototype.displayName = function () {
      return utils.extractDisplayName(this._name);
    };
    /**
     * Should be used to get event type name
     *
     * @method typeName
     * @return {String} event type name
     */


    SolidityEvent.prototype.typeName = function () {
      return utils.extractTypeName(this._name);
    };
    /**
     * Should be used to get event signature
     *
     * @method signature
     * @return {String} event signature
     */


    SolidityEvent.prototype.signature = function () {
      return sha3(this._name);
    };
    /**
     * Should be used to encode indexed params and options to one final object
     *
     * @method encode
     * @param {Object} indexed
     * @param {Object} options
     * @return {Object} everything combined together and encoded
     */


    SolidityEvent.prototype.encode = function (indexed, options) {
      indexed = indexed || {};
      options = options || {};
      var result = {};
      ['fromBlock', 'toBlock'].filter(function (f) {
        return options[f] !== undefined;
      }).forEach(function (f) {
        result[f] = formatters.inputBlockNumberFormatter(options[f]);
      });
      result.topics = [];
      result.address = this._address;

      if (!this._anonymous) {
        result.topics.push('0x' + this.signature());
      }

      var indexedTopics = this._params.filter(function (i) {
        return i.indexed === true;
      }).map(function (i) {
        var value = indexed[i.name];

        if (value === undefined || value === null) {
          return null;
        }

        if (utils.isArray(value)) {
          return value.map(function (v) {
            return '0x' + coder.encodeParam(i.type, v);
          });
        }

        return '0x' + coder.encodeParam(i.type, value);
      });

      result.topics = result.topics.concat(indexedTopics);
      return result;
    };
    /**
     * Should be used to decode indexed params and options
     *
     * @method decode
     * @param {Object} data
     * @return {Object} result object with decoded indexed && not indexed params
     */


    SolidityEvent.prototype.decode = function (data) {
      data.data = data.data || '';
      data.topics = data.topics || [];
      var argTopics = this._anonymous ? data.topics : data.topics.slice(1);
      var indexedData = argTopics.map(function (topics) {
        return topics.slice(2);
      }).join("");
      var indexedParams = coder.decodeParams(this.types(true), indexedData);
      var notIndexedData = data.data.slice(2);
      var notIndexedParams = coder.decodeParams(this.types(false), notIndexedData);
      var result = formatters.outputLogFormatter(data);
      result.event = this.displayName();
      result.address = data.address;
      result.args = this._params.reduce(function (acc, current) {
        acc[current.name] = current.indexed ? indexedParams.shift() : notIndexedParams.shift();
        return acc;
      }, {});
      delete result.data;
      delete result.topics;
      return result;
    };
    /**
     * Should be used to create new filter object from event
     *
     * @method execute
     * @param {Object} indexed
     * @param {Object} options
     * @return {Object} filter object
     */


    SolidityEvent.prototype.execute = function (indexed, options, callback) {
      if (utils.isFunction(arguments[arguments.length - 1])) {
        callback = arguments[arguments.length - 1];
        if (arguments.length === 2) options = null;

        if (arguments.length === 1) {
          options = null;
          indexed = {};
        }
      }

      var o = this.encode(indexed, options);
      var formatter = this.decode.bind(this);
      return new Filter(o, 'cph', this._requestManager, watches.cph(), formatter, callback);
    };
    /**
     * Should be used to attach event to contract object
     *
     * @method attachToContract
     * @param {Contract}
     */


    SolidityEvent.prototype.attachToContract = function (contract) {
      var execute = this.execute.bind(this);
      var displayName = this.displayName();

      if (!contract[displayName]) {
        contract[displayName] = execute;
      }

      contract[displayName][this.typeName()] = this.execute.bind(this, contract);
    };

    module.exports = SolidityEvent;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/extend.js":
  /*!*****************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/extend.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3ExtendJs(module, exports, __webpack_require__) {
    var formatters = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/web3/formatters.js");

    var utils = __webpack_require__(
    /*! ./../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var Method = __webpack_require__(
    /*! ./method */
    "./node_modules/web3-cypher/lib/web3/method.js");

    var Property = __webpack_require__(
    /*! ./property */
    "./node_modules/web3-cypher/lib/web3/property.js"); // TODO: refactor, so the input params are not altered.
    // it's necessary to make same 'extension' work with multiple providers


    var extend = function extend(web3) {
      /* jshint maxcomplexity:5 */
      var ex = function ex(extension) {
        var extendedObject;

        if (extension.property) {
          if (!web3[extension.property]) {
            web3[extension.property] = {};
          }

          extendedObject = web3[extension.property];
        } else {
          extendedObject = web3;
        }

        if (extension.methods) {
          extension.methods.forEach(function (method) {
            method.attachToObject(extendedObject);
            method.setRequestManager(web3._requestManager);
          });
        }

        if (extension.properties) {
          extension.properties.forEach(function (property) {
            property.attachToObject(extendedObject);
            property.setRequestManager(web3._requestManager);
          });
        }
      };

      ex.formatters = formatters;
      ex.utils = utils;
      ex.Method = Method;
      ex.Property = Property;
      return ex;
    };

    module.exports = extend;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/filter.js":
  /*!*****************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/filter.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3FilterJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** @file filter.js
     * @authors:
     *   Jeffrey Wilcke <jeff@cphdev.com>
     *   Marek Kotewicz <marek@cphdev.com>
     *   Marian Oancea <marian@cphdev.com>
     *   Fabian Vogelsteller <fabian@cphdev.com>
     *   Gav Wood <g@cphdev.com>
     * @date 2014
     */
    var formatters = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/web3/formatters.js");

    var utils = __webpack_require__(
    /*! ../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");
    /**
    * Converts a given topic to a hex string, but also allows null values.
    *
    * @param {Mixed} value
    * @return {String}
    */


    var toTopic = function toTopic(value) {
      if (value === null || typeof value === 'undefined') return null;
      value = String(value);
      if (value.indexOf('0x') === 0) return value;else return utils.fromUtf8(value);
    }; /// This method should be called on options object, to verify deprecated properties && lazy load dynamic ones
    /// @param should be string or object
    /// @returns options string or object


    var getOptions = function getOptions(options, type) {
      /*jshint maxcomplexity: 6 */
      if (utils.isString(options)) {
        return options;
      }

      options = options || {};

      switch (type) {
        case 'cph':
          // make sure topics, get converted to hex
          options.topics = options.topics || [];
          options.topics = options.topics.map(function (topic) {
            return utils.isArray(topic) ? topic.map(toTopic) : toTopic(topic);
          });
          return {
            topics: options.topics,
            from: options.from,
            to: options.to,
            address: options.address,
            fromBlock: formatters.inputBlockNumberFormatter(options.fromBlock),
            toBlock: formatters.inputBlockNumberFormatter(options.toBlock)
          };

        case 'shh':
          return options;
      }
    };
    /**
    Adds the callback and sets up the methods, to iterate over the results.
    
    @method getLogsAtStart
    @param {Object} self
    @param {function} callback
    */


    var getLogsAtStart = function getLogsAtStart(self, callback) {
      // call getFilterLogs for the first watch callback start
      if (!utils.isString(self.options)) {
        self.get(function (err, messages) {
          // don't send all the responses to all the watches again... just to self one
          if (err) {
            callback(err);
          }

          if (utils.isArray(messages)) {
            messages.forEach(function (message) {
              callback(null, message);
            });
          }
        });
      }
    };
    /**
    Adds the callback and sets up the methods, to iterate over the results.
    
    @method pollFilter
    @param {Object} self
    */


    var pollFilter = function pollFilter(self) {
      var onMessage = function onMessage(error, messages) {
        if (error) {
          return self.callbacks.forEach(function (callback) {
            callback(error);
          });
        }

        if (utils.isArray(messages)) {
          messages.forEach(function (message) {
            message = self.formatter ? self.formatter(message) : message;
            self.callbacks.forEach(function (callback) {
              callback(null, message);
            });
          });
        }
      };

      self.requestManager.startPolling({
        method: self.implementation.poll.call,
        params: [self.filterId]
      }, self.filterId, onMessage, self.stopWatching.bind(self));
    };

    var Filter = function Filter(options, type, requestManager, methods, formatter, callback, filterCreationErrorCallback) {
      var self = this;
      var implementation = {};
      methods.forEach(function (method) {
        method.setRequestManager(requestManager);
        method.attachToObject(implementation);
      });
      this.requestManager = requestManager;
      this.options = getOptions(options, type);
      this.implementation = implementation;
      this.filterId = null;
      this.callbacks = [];
      this.getLogsCallbacks = [];
      this.pollFilters = [];
      this.formatter = formatter;
      this.implementation.newFilter(this.options, function (error, id) {
        if (error) {
          self.callbacks.forEach(function (cb) {
            cb(error);
          });

          if (typeof filterCreationErrorCallback === 'function') {
            filterCreationErrorCallback(error);
          }
        } else {
          self.filterId = id; // check if there are get pending callbacks as a consequence
          // of calling get() with filterId unassigned.

          self.getLogsCallbacks.forEach(function (cb) {
            self.get(cb);
          });
          self.getLogsCallbacks = []; // get filter logs for the already existing watch calls

          self.callbacks.forEach(function (cb) {
            getLogsAtStart(self, cb);
          });
          if (self.callbacks.length > 0) pollFilter(self); // start to watch immediately

          if (typeof callback === 'function') {
            return self.watch(callback);
          }
        }
      });
      return this;
    };

    Filter.prototype.watch = function (callback) {
      this.callbacks.push(callback);

      if (this.filterId) {
        getLogsAtStart(this, callback);
        pollFilter(this);
      }

      return this;
    };

    Filter.prototype.stopWatching = function (callback) {
      this.requestManager.stopPolling(this.filterId);
      this.callbacks = []; // remove filter async

      if (callback) {
        this.implementation.uninstallFilter(this.filterId, callback);
      } else {
        return this.implementation.uninstallFilter(this.filterId);
      }
    };

    Filter.prototype.get = function (callback) {
      var self = this;

      if (utils.isFunction(callback)) {
        if (this.filterId === null) {
          // If filterId is not set yet, call it back
          // when newFilter() assigns it.
          this.getLogsCallbacks.push(callback);
        } else {
          this.implementation.getLogs(this.filterId, function (err, res) {
            if (err) {
              callback(err);
            } else {
              callback(null, res.map(function (log) {
                return self.formatter ? self.formatter(log) : log;
              }));
            }
          });
        }
      } else {
        if (this.filterId === null) {
          throw new Error('Filter ID Error: filter().get() can\'t be chained synchronous, please provide a callback for the get() method.');
        }

        var logs = this.implementation.getLogs(this.filterId);
        return logs.map(function (log) {
          return self.formatter ? self.formatter(log) : log;
        });
      }

      return this;
    };

    module.exports = Filter;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/formatters.js":
  /*!*********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/formatters.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3FormattersJs(module, exports, __webpack_require__) {
    "use strict";
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file formatters.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @author Fabian Vogelsteller <fabian@cphdev.com>
     * @date 2015
     */

    var utils = __webpack_require__(
    /*! ../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var config = __webpack_require__(
    /*! ../utils/config */
    "./node_modules/web3-cypher/lib/utils/config.js");

    var Iban = __webpack_require__(
    /*! ./iban */
    "./node_modules/web3-cypher/lib/web3/iban.js");
    /**
     * Should the format output to a big number
     *
     * @method outputBigNumberFormatter
     * @param {String|Number|BigNumber}
     * @returns {BigNumber} object
     */


    var outputBigNumberFormatter = function outputBigNumberFormatter(number) {
      return utils.toBigNumber(number);
    };

    var isPredefinedBlockNumber = function isPredefinedBlockNumber(blockNumber) {
      return blockNumber === 'latest' || blockNumber === 'pending' || blockNumber === 'earliest';
    };

    var inputDefaultBlockNumberFormatter = function inputDefaultBlockNumberFormatter(blockNumber) {
      if (blockNumber === undefined) {
        return config.defaultBlock;
      }

      return inputBlockNumberFormatter(blockNumber);
    };

    var inputBlockNumberFormatter = function inputBlockNumberFormatter(blockNumber) {
      if (blockNumber === undefined) {
        return undefined;
      } else if (isPredefinedBlockNumber(blockNumber)) {
        return blockNumber;
      }

      return utils.toHex(blockNumber);
    };
    /**
     * Formats the input of a transaction and converts all values to HEX
     *
     * @method inputCallFormatter
     * @param {Object} transaction options
     * @returns object
    */


    var inputCallFormatter = function inputCallFormatter(options) {
      options.from = options.from || config.defaultAccount;

      if (options.from) {
        options.from = inputAddressFormatter(options.from);
      }

      if (options.to) {
        // it might be contract creation
        options.to = inputAddressFormatter(options.to);
      }

      ['gasPrice', 'gas', 'value', 'nonce'].filter(function (key) {
        return options[key] !== undefined;
      }).forEach(function (key) {
        options[key] = utils.fromDecimal(options[key]);
      });
      return options;
    };
    /**
     * Formats the input of a transaction and converts all values to HEX
     *
     * @method inputTransactionFormatter
     * @param {Object} transaction options
     * @returns object
    */


    var inputTransactionFormatter = function inputTransactionFormatter(options) {
      options.from = options.from || config.defaultAccount;
      options.from = inputAddressFormatter(options.from);

      if (options.to) {
        // it might be contract creation
        options.to = inputAddressFormatter(options.to);
      }

      ['gasPrice', 'gas', 'value', 'nonce'].filter(function (key) {
        return options[key] !== undefined;
      }).forEach(function (key) {
        options[key] = utils.fromDecimal(options[key]);
      });
      return options;
    };
    /**
     * Formats the output of a transaction to its proper values
     *
     * @method outputTransactionFormatter
     * @param {Object} tx
     * @returns {Object}
    */


    var outputTransactionFormatter = function outputTransactionFormatter(tx) {
      if (tx.blockNumber !== null) tx.blockNumber = utils.toDecimal(tx.blockNumber);
      if (tx.transactionIndex !== null) tx.transactionIndex = utils.toDecimal(tx.transactionIndex);
      tx.nonce = utils.toDecimal(tx.nonce);
      tx.gas = utils.toDecimal(tx.gas);
      tx.gasPrice = utils.toBigNumber(tx.gasPrice);
      tx.value = utils.toBigNumber(tx.value);
      return tx;
    };
    /**
     * Formats the output of a transaction receipt to its proper values
     *
     * @method outputTransactionReceiptFormatter
     * @param {Object} receipt
     * @returns {Object}
    */


    var outputTransactionReceiptFormatter = function outputTransactionReceiptFormatter(receipt) {
      if (receipt.blockNumber !== null) receipt.blockNumber = utils.toDecimal(receipt.blockNumber);
      if (receipt.transactionIndex !== null) receipt.transactionIndex = utils.toDecimal(receipt.transactionIndex);
      receipt.cumulativeGasUsed = utils.toDecimal(receipt.cumulativeGasUsed);
      receipt.gasUsed = utils.toDecimal(receipt.gasUsed);

      if (utils.isArray(receipt.logs)) {
        receipt.logs = receipt.logs.map(function (log) {
          return outputLogFormatter(log);
        });
      }

      return receipt;
    };
    /**
     * Formats the output of a block to its proper values
     *
     * @method outputKeyBlockFormatter
     * @param {Object} Key
     * @returns {Object}
     */


    var outputKeyBlockFormatter = function outputKeyBlockFormatter(block) {
      // transform to number
      block.size = utils.toDecimal(block.size);
      block.timestamp = utils.toDecimal(block.timestamp);
      if (block.number !== null) block.number = utils.toDecimal(block.number);

      if (utils.isArray(block.transactions)) {
        block.transactions.forEach(function (item) {
          if (!utils.isString(item)) return outputTransactionFormatter(item);
        });
      }

      return block;
    };
    /**
     * Formats the output of a block to its proper values
     *
     * @method outputBlockFormatter
     * @param {Object} block
     * @returns {Object}
    */


    var outputBlockFormatter = function outputBlockFormatter(block) {
      // transform to number
      block.gasLimit = utils.toDecimal(block.gasLimit);
      block.gasUsed = utils.toDecimal(block.gasUsed);
      block.size = utils.toDecimal(block.size);
      block.timestamp = utils.toDecimal(block.timestamp);
      if (block.number !== null) block.number = utils.toDecimal(block.number);

      if (utils.isArray(block.transactions)) {
        block.transactions.forEach(function (item) {
          if (!utils.isString(item)) return outputTransactionFormatter(item);
        });
      }

      return block;
    };
    /**
     * Formats the output of a block to its proper values
     *
     * @method outputKeyBlockFormatter
     * @param {Object} Key
     * @returns {Object}
     */


    var outputKeyBlockFormatter = function outputKeyBlockFormatter(block) {
      // transform to number
      block.size = utils.toDecimal(block.size);
      if (block.number !== null) block.number = utils.toDecimal(block.number);

      if (utils.isArray(block.transactions)) {
        block.transactions.forEach(function (item) {
          if (!utils.isString(item)) return outputTransactionFormatter(item);
        });
      }

      return block;
    };
    /**
     * Formats the output of a log
     *
     * @method outputLogFormatter
     * @param {Object} log object
     * @returns {Object} log
    */


    var outputLogFormatter = function outputLogFormatter(log) {
      if (log.blockNumber) log.blockNumber = utils.toDecimal(log.blockNumber);
      if (log.transactionIndex) log.transactionIndex = utils.toDecimal(log.transactionIndex);
      if (log.logIndex) log.logIndex = utils.toDecimal(log.logIndex);
      return log;
    };
    /**
     * Formats the input of a whisper post and converts all values to HEX
     *
     * @method inputPostFormatter
     * @param {Object} transaction object
     * @returns {Object}
    */


    var inputPostFormatter = function inputPostFormatter(post) {
      // post.payload = utils.toHex(post.payload);
      post.ttl = utils.fromDecimal(post.ttl);
      post.workToProve = utils.fromDecimal(post.workToProve);
      post.priority = utils.fromDecimal(post.priority); // fallback

      if (!utils.isArray(post.topics)) {
        post.topics = post.topics ? [post.topics] : [];
      } // format the following options


      post.topics = post.topics.map(function (topic) {
        // convert only if not hex
        return topic.indexOf('0x') === 0 ? topic : utils.fromUtf8(topic);
      });
      return post;
    };
    /**
     * Formats the output of a received post message
     *
     * @method outputPostFormatter
     * @param {Object}
     * @returns {Object}
     */


    var outputPostFormatter = function outputPostFormatter(post) {
      post.expiry = utils.toDecimal(post.expiry);
      post.sent = utils.toDecimal(post.sent);
      post.ttl = utils.toDecimal(post.ttl);
      post.workProved = utils.toDecimal(post.workProved); // post.payloadRaw = post.payload;
      // post.payload = utils.toAscii(post.payload);
      // if (utils.isJson(post.payload)) {
      //     post.payload = JSON.parse(post.payload);
      // }
      // format the following options

      if (!post.topics) {
        post.topics = [];
      }

      post.topics = post.topics.map(function (topic) {
        return utils.toAscii(topic);
      });
      return post;
    };

    var inputAddressFormatter = function inputAddressFormatter(address) {
      var iban = new Iban(address);

      if (iban.isValid() && iban.isDirect()) {
        return '0x' + iban.address();
      } else if (utils.isStrictAddress(address)) {
        return address;
      } else if (utils.isAddress(address)) {
        return '0x' + address;
      }

      throw new Error('invalid address');
    };

    var outputSyncingFormatter = function outputSyncingFormatter(result) {
      if (!result) {
        return result;
      }

      result.startingBlock = utils.toDecimal(result.startingBlock);
      result.currentBlock = utils.toDecimal(result.currentBlock);
      result.highestBlock = utils.toDecimal(result.highestBlock);

      if (result.knownStates) {
        result.knownStates = utils.toDecimal(result.knownStates);
        result.pulledStates = utils.toDecimal(result.pulledStates);
      }

      return result;
    };

    module.exports = {
      inputDefaultBlockNumberFormatter: inputDefaultBlockNumberFormatter,
      inputBlockNumberFormatter: inputBlockNumberFormatter,
      inputCallFormatter: inputCallFormatter,
      inputTransactionFormatter: inputTransactionFormatter,
      inputAddressFormatter: inputAddressFormatter,
      inputPostFormatter: inputPostFormatter,
      outputBigNumberFormatter: outputBigNumberFormatter,
      outputTransactionFormatter: outputTransactionFormatter,
      outputTransactionReceiptFormatter: outputTransactionReceiptFormatter,
      outputBlockFormatter: outputBlockFormatter,
      outputKeyBlockFormatter: outputKeyBlockFormatter,
      outputLogFormatter: outputLogFormatter,
      outputPostFormatter: outputPostFormatter,
      outputSyncingFormatter: outputSyncingFormatter
    };
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/function.js":
  /*!*******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/function.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3FunctionJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file function.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var coder = __webpack_require__(
    /*! ../solidity/coder */
    "./node_modules/web3-cypher/lib/solidity/coder.js");

    var utils = __webpack_require__(
    /*! ../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var errors = __webpack_require__(
    /*! ./errors */
    "./node_modules/web3-cypher/lib/web3/errors.js");

    var formatters = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/web3/formatters.js");

    var sha3 = __webpack_require__(
    /*! ../utils/sha3 */
    "./node_modules/web3-cypher/lib/utils/sha3.js");
    /**
     * This prototype should be used to call/sendTransaction to solidity functions
     */


    var SolidityFunction = function SolidityFunction(cph, json, address) {
      this._cph = cph;
      this._inputTypes = json.inputs.map(function (i) {
        return i.type;
      });
      this._outputTypes = json.outputs.map(function (i) {
        return i.type;
      });
      this._constant = json.constant;
      this._payable = json.payable;
      this._name = utils.transformToFullName(json);
      this._address = address;
    };

    SolidityFunction.prototype.extractCallback = function (args) {
      if (utils.isFunction(args[args.length - 1])) {
        return args.pop(); // modify the args array!
      }
    };

    SolidityFunction.prototype.extractDefaultBlock = function (args) {
      if (args.length > this._inputTypes.length && !utils.isObject(args[args.length - 1])) {
        return formatters.inputDefaultBlockNumberFormatter(args.pop()); // modify the args array!
      }
    };
    /**
     * Should be called to check if the number of arguments is correct
     *
     * @method validateArgs
     * @param {Array} arguments
     * @throws {Error} if it is not
     */


    SolidityFunction.prototype.validateArgs = function (args) {
      var inputArgs = args.filter(function (a) {
        // filter the options object but not arguments that are arrays
        return !(utils.isObject(a) === true && utils.isArray(a) === false && utils.isBigNumber(a) === false);
      });

      if (inputArgs.length !== this._inputTypes.length) {
        throw errors.InvalidNumberOfSolidityArgs();
      }
    };
    /**
     * Should be used to create payload from arguments
     *
     * @method toPayload
     * @param {Array} solidity function params
     * @param {Object} optional payload options
     */


    SolidityFunction.prototype.toPayload = function (args) {
      var options = {};

      if (args.length > this._inputTypes.length && utils.isObject(args[args.length - 1])) {
        options = args[args.length - 1];
      }

      this.validateArgs(args);
      options.to = this._address;
      options.data = '0x' + this.signature() + coder.encodeParams(this._inputTypes, args) + coder.encodeParam("bytes32", "@" + this._name);
      return options;
    };
    /**
     * Should be used to get function signature
     *
     * @method signature
     * @return {String} function signature
     */


    SolidityFunction.prototype.signature = function () {
      return sha3(this._name).slice(0, 8);
    };

    SolidityFunction.prototype.unpackOutput = function (output) {
      if (!output) {
        return;
      }

      output = output.length >= 2 ? output.slice(2) : output;
      var result = coder.decodeParams(this._outputTypes, output);
      return result.length === 1 ? result[0] : result;
    };
    /**
     * Calls a contract function.
     *
     * @method call
     * @param {...Object} Contract function arguments
     * @param {function} If the last argument is a function, the contract function
     *   call will be asynchronous, and the callback will be passed the
     *   error and result.
     * @return {String} output bytes
     */


    SolidityFunction.prototype.call = function () {
      var args = Array.prototype.slice.call(arguments).filter(function (a) {
        return a !== undefined;
      });
      var callback = this.extractCallback(args);
      var defaultBlock = this.extractDefaultBlock(args);
      var payload = this.toPayload(args);

      if (!callback) {
        var output = this._cph.call(payload, defaultBlock);

        return this.unpackOutput(output);
      }

      var self = this;

      this._cph.call(payload, defaultBlock, function (error, output) {
        if (error) return callback(error, null);
        var unpacked = null;

        try {
          unpacked = self.unpackOutput(output);
        } catch (e) {
          error = e;
        }

        callback(error, unpacked);
      });
    };
    /**
     * Should be used to sendTransaction to solidity function
     *
     * @method sendTransaction
     */


    SolidityFunction.prototype.sendTransaction = function () {
      var args = Array.prototype.slice.call(arguments).filter(function (a) {
        return a !== undefined;
      });
      var callback = this.extractCallback(args);
      var payload = this.toPayload(args);

      if (payload.value > 0 && !this._payable) {
        throw new Error('Cannot send value to non-payable function');
      }

      if (!callback) {
        return this._cph.sendTransaction(payload);
      }

      this._cph.sendTransaction(payload, callback);
    };
    /**
     * Should be used to estimateGas of solidity function
     *
     * @method estimateGas
     */


    SolidityFunction.prototype.estimateGas = function () {
      var args = Array.prototype.slice.call(arguments);
      var callback = this.extractCallback(args);
      var payload = this.toPayload(args);

      if (!callback) {
        return this._cph.estimateGas(payload);
      }

      this._cph.estimateGas(payload, callback);
    };
    /**
     * Return the encoded data of the call
     *
     * @method getData
     * @return {String} the encoded data
     */


    SolidityFunction.prototype.getData = function () {
      var args = Array.prototype.slice.call(arguments);
      var payload = this.toPayload(args);
      return payload.data;
    };
    /**
     * Should be used to get function display name
     *
     * @method displayName
     * @return {String} display name of the function
     */


    SolidityFunction.prototype.displayName = function () {
      return utils.extractDisplayName(this._name);
    };
    /**
     * Should be used to get function type name
     *
     * @method typeName
     * @return {String} type name of the function
     */


    SolidityFunction.prototype.typeName = function () {
      return utils.extractTypeName(this._name);
    };
    /**
     * Should be called to get rpc requests from solidity function
     *
     * @method request
     * @returns {Object}
     */


    SolidityFunction.prototype.request = function () {
      var args = Array.prototype.slice.call(arguments);
      var callback = this.extractCallback(args);
      var payload = this.toPayload(args);
      var format = this.unpackOutput.bind(this);
      return {
        method: this._constant ? 'cph_call' : 'cph_sendTransaction',
        callback: callback,
        params: [payload],
        format: format
      };
    };
    /**
     * Should be called to execute function
     *
     * @method execute
     */


    SolidityFunction.prototype.execute = function () {
      var transaction = !this._constant; // send transaction

      if (transaction) {
        return this.sendTransaction.apply(this, Array.prototype.slice.call(arguments));
      } // call


      return this.call.apply(this, Array.prototype.slice.call(arguments));
    };
    /**
     * Should be called to attach function to contract
     *
     * @method attachToContract
     * @param {Contract}
     */


    SolidityFunction.prototype.attachToContract = function (contract) {
      var execute = this.execute.bind(this);
      execute.request = this.request.bind(this);
      execute.call = this.call.bind(this);
      execute.sendTransaction = this.sendTransaction.bind(this);
      execute.estimateGas = this.estimateGas.bind(this);
      execute.getData = this.getData.bind(this);
      var displayName = this.displayName();

      if (!contract[displayName]) {
        contract[displayName] = execute;
      }

      contract[displayName][this.typeName()] = execute; // circular!!!!
    };

    module.exports = SolidityFunction;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/httpprovider.js":
  /*!***********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/httpprovider.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3HttpproviderJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (Buffer) {
      /*
      This file is part of web3.js.
      web3.js is free software: you can redistribute it and/or modify
      it under the terms of the GNU Lesser General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
      web3.js is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU Lesser General Public License for more details.
      You should have received a copy of the GNU Lesser General Public License
      along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
      */

      /** @file httpprovider.js
       * @authors:
       *   Marek Kotewicz <marek@cphdev.com>
       *   Marian Oancea <marian@cphdev.com>
       *   Fabian Vogelsteller <fabian@cphdev.com>
       * @date 2015
       */
      var errors = __webpack_require__(
      /*! ./errors */
      "./node_modules/web3-cypher/lib/web3/errors.js"); // workaround to use httpprovider in different envs
      // browser


      if (typeof window !== 'undefined' && window.XMLHttpRequest) {
        XMLHttpRequest = window.XMLHttpRequest; // jshint ignore: line
        // node
      } else {
        XMLHttpRequest = __webpack_require__(
        /*! xmlhttprequest */
        "./node_modules/web3-cypher/lib/utils/browser-xhr.js").XMLHttpRequest; // jshint ignore: line
      }

      var XHR2 = __webpack_require__(
      /*! xhr2 */
      "./node_modules/xhr2/lib/browser.js"); // jshint ignore: line

      /**
       * HttpProvider should be used to send rpc calls over http
       */


      var HttpProvider = function HttpProvider(host, timeout, user, password, headers) {
        this.host = host || 'http://localhost:8545';
        this.timeout = timeout || 0;
        this.user = user;
        this.password = password;
        this.headers = headers;
      };
      /**
       * Should be called to prepare new XMLHttpRequest
       *
       * @method prepareRequest
       * @param {Boolean} true if request should be async
       * @return {XMLHttpRequest} object
       */


      HttpProvider.prototype.prepareRequest = function (async) {
        var request;

        if (async) {
          request = new XHR2();
          request.timeout = this.timeout;
        } else {
          request = new XMLHttpRequest();
        }

        request.open('POST', this.host, async);

        if (this.user && this.password) {
          var auth = 'Basic ' + new Buffer(this.user + ':' + this.password).toString('base64');
          request.setRequestHeader('Authorization', auth);
        }

        request.setRequestHeader('Content-Type', 'application/json');

        if (this.headers) {
          this.headers.forEach(function (header) {
            request.setRequestHeader(header.name, header.value);
          });
        }

        return request;
      };
      /**
       * Should be called to make sync request
       *
       * @method send
       * @param {Object} payload
       * @return {Object} result
       */


      HttpProvider.prototype.send = function (payload) {
        var request = this.prepareRequest(false);

        try {
          request.send(JSON.stringify(payload));
        } catch (error) {
          throw errors.InvalidConnection(this.host);
        }

        var result = request.responseText;

        try {
          result = JSON.parse(result);
        } catch (e) {
          throw errors.InvalidResponse(request.responseText);
        }

        return result;
      };
      /**
       * Should be used to make async request
       *
       * @method sendAsync
       * @param {Object} payload
       * @param {Function} callback triggered on end with (err, result)
       */


      HttpProvider.prototype.sendAsync = function (payload, callback) {
        var request = this.prepareRequest(true);

        request.onreadystatechange = function () {
          if (request.readyState === 4 && request.timeout !== 1) {
            var result = request.responseText;
            var error = null;

            try {
              result = JSON.parse(result);
            } catch (e) {
              error = errors.InvalidResponse(request.responseText);
            }

            callback(error, result);
          }
        };

        request.ontimeout = function () {
          callback(errors.ConnectionTimeout(this.timeout));
        };

        try {
          request.send(JSON.stringify(payload));
        } catch (error) {
          callback(errors.InvalidConnection(this.host));
        }
      };
      /**
       * Synchronously tries to make Http request
       *
       * @method isConnected
       * @return {Boolean} returns true if request haven't failed. Otherwise false
       */


      HttpProvider.prototype.isConnected = function () {
        try {
          this.send({
            id: 9999999999,
            jsonrpc: '2.0',
            method: 'net_listening',
            params: []
          });
          return true;
        } catch (e) {
          return false;
        }
      };

      module.exports = HttpProvider;
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../../../buffer/index.js */
    "./node_modules/buffer/index.js").Buffer);
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/iban.js":
  /*!***************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/iban.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3IbanJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** 
     * @file iban.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var BigNumber = __webpack_require__(
    /*! bignumber.js */
    "./node_modules/web3-cypher/node_modules/bignumber.js/bignumber.js");

    var padLeft = function padLeft(string, bytes) {
      var result = string;

      while (result.length < bytes * 2) {
        result = '0' + result;
      }

      return result;
    };
    /**
     * Prepare an IBAN for mod 97 computation by moving the first 4 chars to the end and transforming the letters to
     * numbers (A = 10, B = 11, ..., Z = 35), as specified in ISO13616.
     *
     * @method iso13616Prepare
     * @param {String} iban the IBAN
     * @returns {String} the prepared IBAN
     */


    var iso13616Prepare = function iso13616Prepare(iban) {
      var A = 'A'.charCodeAt(0);
      var Z = 'Z'.charCodeAt(0);
      iban = iban.toUpperCase();
      iban = iban.substr(4) + iban.substr(0, 4);
      return iban.split('').map(function (n) {
        var code = n.charCodeAt(0);

        if (code >= A && code <= Z) {
          // A = 10, B = 11, ... Z = 35
          return code - A + 10;
        } else {
          return n;
        }
      }).join('');
    };
    /**
     * Calculates the MOD 97 10 of the passed IBAN as specified in ISO7064.
     *
     * @method mod9710
     * @param {String} iban
     * @returns {Number}
     */


    var mod9710 = function mod9710(iban) {
      var remainder = iban,
          block;

      while (remainder.length > 2) {
        block = remainder.slice(0, 9);
        remainder = parseInt(block, 10) % 97 + remainder.slice(block.length);
      }

      return parseInt(remainder, 10) % 97;
    };
    /**
     * This prototype should be used to create iban object from iban correct string
     *
     * @param {String} iban
     */


    var Iban = function Iban(iban) {
      this._iban = iban;
    };
    /**
     * This method should be used to create iban object from cypherium address
     *
     * @method fromAddress
     * @param {String} address
     * @return {Iban} the IBAN object
     */


    Iban.fromAddress = function (address) {
      var asBn = new BigNumber(address, 16);
      var base36 = asBn.toString(36);
      var padded = padLeft(base36, 15);
      return Iban.fromBban(padded.toUpperCase());
    };
    /**
     * Convert the passed BBAN to an IBAN for this country specification.
     * Please note that <i>"generation of the IBAN shall be the exclusive responsibility of the bank/branch servicing the account"</i>.
     * This method implements the preferred algorithm described in http://en.wikipedia.org/wiki/International_Bank_Account_Number#Generating_IBAN_check_digits
     *
     * @method fromBban
     * @param {String} bban the BBAN to convert to IBAN
     * @returns {Iban} the IBAN object
     */


    Iban.fromBban = function (bban) {
      var countryCode = 'XE';
      var remainder = mod9710(iso13616Prepare(countryCode + '00' + bban));
      var checkDigit = ('0' + (98 - remainder)).slice(-2);
      return new Iban(countryCode + checkDigit + bban);
    };
    /**
     * Should be used to create IBAN object for given institution and identifier
     *
     * @method createIndirect
     * @param {Object} options, required options are "institution" and "identifier"
     * @return {Iban} the IBAN object
     */


    Iban.createIndirect = function (options) {
      return Iban.fromBban('CPH' + options.institution + options.identifier);
    };
    /**
     * Thos method should be used to check if given string is valid iban object
     *
     * @method isValid
     * @param {String} iban string
     * @return {Boolean} true if it is valid IBAN
     */


    Iban.isValid = function (iban) {
      var i = new Iban(iban);
      return i.isValid();
    };
    /**
     * Should be called to check if iban is correct
     *
     * @method isValid
     * @returns {Boolean} true if it is, otherwise false
     */


    Iban.prototype.isValid = function () {
      return /^XE[0-9]{2}(CPH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(this._iban) && mod9710(iso13616Prepare(this._iban)) === 1;
    };
    /**
     * Should be called to check if iban number is direct
     *
     * @method isDirect
     * @returns {Boolean} true if it is, otherwise false
     */


    Iban.prototype.isDirect = function () {
      return this._iban.length === 34 || this._iban.length === 35;
    };
    /**
     * Should be called to check if iban number if indirect
     *
     * @method isIndirect
     * @returns {Boolean} true if it is, otherwise false
     */


    Iban.prototype.isIndirect = function () {
      return this._iban.length === 20;
    };
    /**
     * Should be called to get iban checksum
     * Uses the mod-97-10 checksumming protocol (ISO/IEC 7064:2003)
     *
     * @method checksum
     * @returns {String} checksum
     */


    Iban.prototype.checksum = function () {
      return this._iban.substr(2, 2);
    };
    /**
     * Should be called to get institution identifier
     * eg. XREG
     *
     * @method institution
     * @returns {String} institution identifier
     */


    Iban.prototype.institution = function () {
      return this.isIndirect() ? this._iban.substr(7, 4) : '';
    };
    /**
     * Should be called to get client identifier within institution
     * eg. GAVOFYORK
     *
     * @method client
     * @returns {String} client identifier
     */


    Iban.prototype.client = function () {
      return this.isIndirect() ? this._iban.substr(11) : '';
    };
    /**
     * Should be called to get client direct address
     *
     * @method address
     * @returns {String} client direct address
     */


    Iban.prototype.address = function () {
      if (this.isDirect()) {
        var base36 = this._iban.substr(4);

        var asBn = new BigNumber(base36, 36);
        return padLeft(asBn.toString(16), 20);
      }

      return '';
    };

    Iban.prototype.toString = function () {
      return this._iban;
    };

    module.exports = Iban;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/ipcprovider.js":
  /*!**********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/ipcprovider.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3IpcproviderJs(module, exports, __webpack_require__) {
    "use strict";
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** @file ipcprovider.js
     * @authors:
     *   Fabian Vogelsteller <fabian@cphdev.com>
     * @date 2015
     */

    var utils = __webpack_require__(
    /*! ../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var errors = __webpack_require__(
    /*! ./errors */
    "./node_modules/web3-cypher/lib/web3/errors.js");

    var IpcProvider = function IpcProvider(path, net) {
      var _this = this;

      this.responseCallbacks = {};
      this.path = path;
      this.connection = net.connect({
        path: this.path
      });
      this.connection.on('error', function (e) {
        console.error('IPC Connection Error', e);

        _this._timeout();
      });
      this.connection.on('end', function () {
        _this._timeout();
      }); // LISTEN FOR CONNECTION RESPONSES

      this.connection.on('data', function (data) {
        /*jshint maxcomplexity: 6 */
        _this._parseResponse(data.toString()).forEach(function (result) {
          var id = null; // get the id which matches the returned id

          if (utils.isArray(result)) {
            result.forEach(function (load) {
              if (_this.responseCallbacks[load.id]) id = load.id;
            });
          } else {
            id = result.id;
          } // fire the callback


          if (_this.responseCallbacks[id]) {
            _this.responseCallbacks[id](null, result);

            delete _this.responseCallbacks[id];
          }
        });
      });
    };
    /**
    Will parse the response and make an array out of it.
    
    @method _parseResponse
    @param {String} data
    */


    IpcProvider.prototype._parseResponse = function (data) {
      var _this = this,
          returnValues = []; // DE-CHUNKER


      var dechunkedData = data.replace(/\}[\n\r]?\{/g, '}|--|{') // }{
      .replace(/\}\][\n\r]?\[\{/g, '}]|--|[{') // }][{
      .replace(/\}[\n\r]?\[\{/g, '}|--|[{') // }[{
      .replace(/\}\][\n\r]?\{/g, '}]|--|{') // }]{
      .split('|--|');
      dechunkedData.forEach(function (data) {
        // prepend the last chunk
        if (_this.lastChunk) data = _this.lastChunk + data;
        var result = null;

        try {
          result = JSON.parse(data);
        } catch (e) {
          _this.lastChunk = data; // start timeout to cancel all requests

          clearTimeout(_this.lastChunkTimeout);
          _this.lastChunkTimeout = setTimeout(function () {
            _this._timeout();

            throw errors.InvalidResponse(data);
          }, 1000 * 15);
          return;
        } // cancel timeout and set chunk to null


        clearTimeout(_this.lastChunkTimeout);
        _this.lastChunk = null;
        if (result) returnValues.push(result);
      });
      return returnValues;
    };
    /**
    Get the adds a callback to the responseCallbacks object,
    which will be called if a response matching the response Id will arrive.
    
    @method _addResponseCallback
    */


    IpcProvider.prototype._addResponseCallback = function (payload, callback) {
      var id = payload.id || payload[0].id;
      var method = payload.method || payload[0].method;
      this.responseCallbacks[id] = callback;
      this.responseCallbacks[id].method = method;
    };
    /**
    Timeout all requests when the end/error event is fired
    
    @method _timeout
    */


    IpcProvider.prototype._timeout = function () {
      for (var key in this.responseCallbacks) {
        if (this.responseCallbacks.hasOwnProperty(key)) {
          this.responseCallbacks[key](errors.InvalidConnection('on IPC'));
          delete this.responseCallbacks[key];
        }
      }
    };
    /**
    Check if the current connection is still valid.
    
    @method isConnected
    */


    IpcProvider.prototype.isConnected = function () {
      var _this = this; // try reconnect, when connection is gone


      if (!_this.connection.writable) _this.connection.connect({
        path: _this.path
      });
      return !!this.connection.writable;
    };

    IpcProvider.prototype.send = function (payload) {
      if (this.connection.writeSync) {
        var result; // try reconnect, when connection is gone

        if (!this.connection.writable) this.connection.connect({
          path: this.path
        });
        var data = this.connection.writeSync(JSON.stringify(payload));

        try {
          result = JSON.parse(data);
        } catch (e) {
          throw errors.InvalidResponse(data);
        }

        return result;
      } else {
        throw new Error('You tried to send "' + payload.method + '" synchronously. Synchronous requests are not supported by the IPC provider.');
      }
    };

    IpcProvider.prototype.sendAsync = function (payload, callback) {
      // try reconnect, when connection is gone
      if (!this.connection.writable) this.connection.connect({
        path: this.path
      });
      this.connection.write(JSON.stringify(payload));

      this._addResponseCallback(payload, callback);
    };

    module.exports = IpcProvider;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/jsonrpc.js":
  /*!******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/jsonrpc.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3JsonrpcJs(module, exports) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** @file jsonrpc.js
     * @authors:
     *   Marek Kotewicz <marek@cphdev.com>
     *   Aaron Kumavis <aaron@kumavis.me>
     * @date 2015
     */
    // Initialize Jsonrpc as a simple object with utility functions.
    var Jsonrpc = {
      messageId: 0
    };
    /**
     * Should be called to valid json create payload object
     *
     * @method toPayload
     * @param {Function} method of jsonrpc call, required
     * @param {Array} params, an array of method params, optional
     * @returns {Object} valid jsonrpc payload object
     */

    Jsonrpc.toPayload = function (method, params) {
      if (!method) console.error('jsonrpc method should be specified!'); // advance message ID

      Jsonrpc.messageId++;
      return {
        jsonrpc: '2.0',
        id: Jsonrpc.messageId,
        method: method,
        params: params || []
      };
    };
    /**
     * Should be called to check if jsonrpc response is valid
     *
     * @method isValidResponse
     * @param {Object}
     * @returns {Boolean} true if response is valid, otherwise false
     */


    Jsonrpc.isValidResponse = function (response) {
      return Array.isArray(response) ? response.every(validateSingleMessage) : validateSingleMessage(response);

      function validateSingleMessage(message) {
        return !!message && !message.error && message.jsonrpc === '2.0' && typeof message.id === 'number' && message.result !== undefined; // only undefined is not valid json object
      }
    };
    /**
     * Should be called to create batch payload object
     *
     * @method toBatchPayload
     * @param {Array} messages, an array of objects with method (required) and params (optional) fields
     * @returns {Array} batch payload
     */


    Jsonrpc.toBatchPayload = function (messages) {
      return messages.map(function (message) {
        return Jsonrpc.toPayload(message.method, message.params);
      });
    };

    module.exports = Jsonrpc;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/method.js":
  /*!*****************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/method.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3MethodJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file method.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var utils = __webpack_require__(
    /*! ../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var errors = __webpack_require__(
    /*! ./errors */
    "./node_modules/web3-cypher/lib/web3/errors.js");

    var Method = function Method(options) {
      this.name = options.name;
      this.call = options.call;
      this.params = options.params || 0;
      this.inputFormatter = options.inputFormatter;
      this.outputFormatter = options.outputFormatter;
      this.requestManager = null;
    };

    Method.prototype.setRequestManager = function (rm) {
      this.requestManager = rm;
    };
    /**
     * Should be used to determine name of the jsonrpc method based on arguments
     *
     * @method getCall
     * @param {Array} arguments
     * @return {String} name of jsonrpc method
     */


    Method.prototype.getCall = function (args) {
      return utils.isFunction(this.call) ? this.call(args) : this.call;
    };
    /**
     * Should be used to extract callback from array of arguments. Modifies input param
     *
     * @method extractCallback
     * @param {Array} arguments
     * @return {Function|Null} callback, if exists
     */


    Method.prototype.extractCallback = function (args) {
      if (utils.isFunction(args[args.length - 1])) {
        return args.pop(); // modify the args array!
      }
    };
    /**
     * Should be called to check if the number of arguments is correct
     * 
     * @method validateArgs
     * @param {Array} arguments
     * @throws {Error} if it is not
     */


    Method.prototype.validateArgs = function (args) {
      if (args.length !== this.params) {
        throw errors.InvalidNumberOfRPCParams();
      }
    };
    /**
     * Should be called to format input args of method
     * 
     * @method formatInput
     * @param {Array}
     * @return {Array}
     */


    Method.prototype.formatInput = function (args) {
      if (!this.inputFormatter) {
        return args;
      }

      return this.inputFormatter.map(function (formatter, index) {
        return formatter ? formatter(args[index]) : args[index];
      });
    };
    /**
     * Should be called to format output(result) of method
     *
     * @method formatOutput
     * @param {Object}
     * @return {Object}
     */


    Method.prototype.formatOutput = function (result) {
      return this.outputFormatter && result ? this.outputFormatter(result) : result;
    };
    /**
     * Should create payload from given input args
     *
     * @method toPayload
     * @param {Array} args
     * @return {Object}
     */


    Method.prototype.toPayload = function (args) {
      var call = this.getCall(args);
      var callback = this.extractCallback(args);
      var params = this.formatInput(args);
      this.validateArgs(params);
      return {
        method: call,
        params: params,
        callback: callback
      };
    };

    Method.prototype.attachToObject = function (obj) {
      var func = this.buildCall();
      func.call = this.call; // TODO!!! that's ugly. filter.js uses it

      var name = this.name.split('.');

      if (name.length > 1) {
        obj[name[0]] = obj[name[0]] || {};
        obj[name[0]][name[1]] = func;
      } else {
        obj[name[0]] = func;
      }
    };

    Method.prototype.buildCall = function () {
      var method = this;

      var send = function send() {
        var payload = method.toPayload(Array.prototype.slice.call(arguments));

        if (payload.callback) {
          return method.requestManager.sendAsync(payload, function (err, result) {
            payload.callback(err, method.formatOutput(result));
          });
        }

        return method.formatOutput(method.requestManager.send(payload));
      };

      send.request = this.request.bind(this);
      return send;
    };
    /**
     * Should be called to create pure JSONRPC request which can be used in batch request
     *
     * @method request
     * @param {...} params
     * @return {Object} jsonrpc request
     */


    Method.prototype.request = function () {
      var payload = this.toPayload(Array.prototype.slice.call(arguments));
      payload.format = this.formatOutput.bind(this);
      return payload;
    };

    module.exports = Method;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/methods/cph.js":
  /*!**********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/methods/cph.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3MethodsCphJs(module, exports, __webpack_require__) {
    "use strict";
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file cph.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @author Fabian Vogelsteller <fabian@cphdev.com>
     * @date 2015
     */

    var formatters = __webpack_require__(
    /*! ../formatters */
    "./node_modules/web3-cypher/lib/web3/formatters.js");

    var utils = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var Method = __webpack_require__(
    /*! ../method */
    "./node_modules/web3-cypher/lib/web3/method.js");

    var Property = __webpack_require__(
    /*! ../property */
    "./node_modules/web3-cypher/lib/web3/property.js");

    var c = __webpack_require__(
    /*! ../../utils/config */
    "./node_modules/web3-cypher/lib/utils/config.js");

    var Contract = __webpack_require__(
    /*! ../contract */
    "./node_modules/web3-cypher/lib/web3/contract.js");

    var watches = __webpack_require__(
    /*! ./watches */
    "./node_modules/web3-cypher/lib/web3/methods/watches.js");

    var Filter = __webpack_require__(
    /*! ../filter */
    "./node_modules/web3-cypher/lib/web3/filter.js");

    var IsSyncing = __webpack_require__(
    /*! ../syncing */
    "./node_modules/web3-cypher/lib/web3/syncing.js");

    var namereg = __webpack_require__(
    /*! ../namereg */
    "./node_modules/web3-cypher/lib/web3/namereg.js");

    var Iban = __webpack_require__(
    /*! ../iban */
    "./node_modules/web3-cypher/lib/web3/iban.js");

    var transfer = __webpack_require__(
    /*! ../transfer */
    "./node_modules/web3-cypher/lib/web3/transfer.js");

    var blockCall = function blockCall(args) {
      return utils.isString(args[0]) && args[0].indexOf('0x') === 0 ? "cph_getTxBlockByHash" : "cph_getTxBlockByNumber";
    };

    var transactionFromBlockCall = function transactionFromBlockCall(args) {
      return utils.isString(args[0]) && args[0].indexOf('0x') === 0 ? 'cph_getTransactionByBlockHashAndIndex' : 'cph_getTransactionByBlockNumberAndIndex';
    };

    var uncleCall = function uncleCall(args) {
      return utils.isString(args[0]) && args[0].indexOf('0x') === 0 ? 'cph_getUncleByBlockHashAndIndex' : 'cph_getUncleByBlockNumberAndIndex';
    };

    var getBlockTransactionCountCall = function getBlockTransactionCountCall(args) {
      return utils.isString(args[0]) && args[0].indexOf('0x') === 0 ? 'cph_getBlockTransactionCountByHash' : 'cph_getBlockTransactionCountByNumber';
    };

    var uncleCountCall = function uncleCountCall(args) {
      return utils.isString(args[0]) && args[0].indexOf('0x') === 0 ? 'cph_getUncleCountByBlockHash' : 'cph_getUncleCountByBlockNumber';
    };

    function Cph(web3) {
      this._requestManager = web3._requestManager;
      var self = this;
      methods().forEach(function (method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
      });
      properties().forEach(function (p) {
        p.attachToObject(self);
        p.setRequestManager(self._requestManager);
      });
      this.iban = Iban;
      this.sendIBANTransaction = transfer.bind(null, this);
    }

    Object.defineProperty(Cph.prototype, 'defaultBlock', {
      get: function get() {
        return c.defaultBlock;
      },
      set: function set(val) {
        c.defaultBlock = val;
        return val;
      }
    });
    Object.defineProperty(Cph.prototype, 'defaultAccount', {
      get: function get() {
        return c.defaultAccount;
      },
      set: function set(val) {
        c.defaultAccount = val;
        return val;
      }
    });

    var methods = function methods() {
      var committeeMembers = new Method({
        name: 'committeeMembers',
        call: 'cph_committeeMembers',
        params: 1,
        inputFormatter: [formatters.inputBlockNumberFormatter]
      });
      var getBalance = new Method({
        name: 'getBalance',
        call: 'cph_getBalance',
        params: 2,
        inputFormatter: [formatters.inputAddressFormatter, formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: formatters.outputBigNumberFormatter
      });
      var getStorageAt = new Method({
        name: 'getStorageAt',
        call: 'cph_getStorageAt',
        params: 3,
        inputFormatter: [null, utils.toHex, formatters.inputDefaultBlockNumberFormatter]
      });
      var getCode = new Method({
        name: 'getCode',
        call: 'cph_getCode',
        params: 2,
        inputFormatter: [formatters.inputAddressFormatter, formatters.inputDefaultBlockNumberFormatter]
      });
      var getBlock = new Method({
        name: 'getTxBlock',
        call: blockCall,
        params: 2,
        inputFormatter: [formatters.inputBlockNumberFormatter, function (val) {
          return !!val;
        }],
        outputFormatter: formatters.outputBlockFormatter
      });
      var getKeyBlockByNumber = new Method({
        name: 'getKeyBlockByNumber',
        call: 'cph_getKeyBlockByNumber',
        params: 1,
        inputFormatter: [formatters.inputBlockNumberFormatter],
        outputFormatter: formatters.outputKeyBlockFormatter
      });
      var getTxBlockByNumber = new Method({
        name: 'getTxBlockByNumber',
        call: 'cph_getTxBlockByNumber',
        params: 3,
        inputFormatter: [formatters.inputBlockNumberFormatter, null, null],
        outputFormatter: formatters.outputBlockFormatter
      });
      var getUncle = new Method({
        name: 'getUncle',
        call: uncleCall,
        params: 2,
        inputFormatter: [formatters.inputBlockNumberFormatter, utils.toHex],
        outputFormatter: formatters.outputBlockFormatter
      });
      var getCompilers = new Method({
        name: 'getCompilers',
        call: 'cph_getCompilers',
        params: 0
      });
      var getBlockTransactionCount = new Method({
        name: 'getBlockTransactionCount',
        call: getBlockTransactionCountCall,
        params: 1,
        inputFormatter: [formatters.inputBlockNumberFormatter],
        outputFormatter: utils.toDecimal
      });
      var getBlockUncleCount = new Method({
        name: 'getBlockUncleCount',
        call: uncleCountCall,
        params: 1,
        inputFormatter: [formatters.inputBlockNumberFormatter],
        outputFormatter: utils.toDecimal
      });
      var getTransaction = new Method({
        name: 'getTransaction',
        call: 'cph_getTransactionByHash',
        params: 1,
        outputFormatter: formatters.outputTransactionFormatter
      });
      var getTransactionFromBlock = new Method({
        name: 'getTransactionFromBlock',
        call: transactionFromBlockCall,
        params: 2,
        inputFormatter: [formatters.inputBlockNumberFormatter, utils.toHex],
        outputFormatter: formatters.outputTransactionFormatter
      });
      var getTransactionReceipt = new Method({
        name: 'getTransactionReceipt',
        call: 'cph_getTransactionReceipt',
        params: 1,
        outputFormatter: formatters.outputTransactionReceiptFormatter
      });
      var getTransactionCount = new Method({
        name: 'getTransactionCount',
        call: 'cph_getTransactionCount',
        params: 2,
        inputFormatter: [null, formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: utils.toDecimal
      });
      var sendRawTransaction = new Method({
        name: 'sendRawTransaction',
        call: 'cph_sendRawTransaction',
        params: 1,
        inputFormatter: [null]
      });
      var sendTransaction = new Method({
        name: 'sendTransaction',
        call: 'cph_sendTransaction',
        params: 1,
        inputFormatter: [formatters.inputTransactionFormatter]
      });
      var batchTransaction = new Method({
        name: 'batchTransaction',
        call: 'cph_batchTransaction',
        params: 2,
        inputFormatter: [formatters.inputTransactionFormatter, utils.toDecimal]
      });
      var autoTransaction = new Method({
        name: 'autoTransaction',
        call: 'cph_autoTransaction',
        params: 2,
        inputFormatter: [utils.toDecimal, utils.toDecimal]
      });
      var signTransaction = new Method({
        name: 'signTransaction',
        call: 'cph_signTransaction',
        params: 1,
        inputFormatter: [formatters.inputTransactionFormatter]
      });
      var sign = new Method({
        name: 'sign',
        call: 'cph_sign',
        params: 2,
        inputFormatter: [formatters.inputAddressFormatter, null]
      });
      var call = new Method({
        name: 'call',
        call: 'cph_call',
        params: 2,
        inputFormatter: [formatters.inputCallFormatter, formatters.inputDefaultBlockNumberFormatter]
      });
      var estimateGas = new Method({
        name: 'estimateGas',
        call: 'cph_estimateGas',
        params: 1,
        inputFormatter: [formatters.inputCallFormatter],
        outputFormatter: utils.toDecimal
      });
      var compileSolidity = new Method({
        name: 'compile.solidity',
        call: 'cph_compileSolidity',
        params: 1
      });
      var compileLLL = new Method({
        name: 'compile.lll',
        call: 'cph_compileLLL',
        params: 1
      });
      var compileSerpent = new Method({
        name: 'compile.serpent',
        call: 'cph_compileSerpent',
        params: 1
      });
      var submitWork = new Method({
        name: 'submitWork',
        call: 'cph_submitWork',
        params: 3
      });
      var getWork = new Method({
        name: 'getWork',
        call: 'cph_getWork',
        params: 0
      });
      return [committeeMembers, getBalance, getStorageAt, getCode, getBlock, getKeyBlockByNumber, getTxBlockByNumber, getUncle, getCompilers, getBlockTransactionCount, getBlockUncleCount, getTransaction, getTransactionFromBlock, getTransactionReceipt, getTransactionCount, call, estimateGas, sendRawTransaction, signTransaction, sendTransaction, batchTransaction, autoTransaction, sign, compileSolidity, compileLLL, compileSerpent, submitWork, getWork];
    };

    var properties = function properties() {
      return [new Property({
        name: 'coinbase',
        getter: 'cph_coinbase'
      }), new Property({
        name: 'mining',
        getter: 'cph_mining'
      }), new Property({
        name: 'hashrate',
        getter: 'cph_hashrate',
        outputFormatter: utils.toDecimal
      }), new Property({
        name: 'syncing',
        getter: 'cph_syncing',
        outputFormatter: formatters.outputSyncingFormatter
      }), new Property({
        name: 'gasPrice',
        getter: 'cph_gasPrice',
        outputFormatter: formatters.outputBigNumberFormatter
      }), new Property({
        name: 'accounts',
        getter: 'cph_accounts'
      }), new Property({
        name: 'txBlockNumber',
        getter: 'cph_txBlockNumber',
        outputFormatter: utils.toDecimal
      }), new Property({
        name: 'keyBlockNumber',
        getter: 'cph_keyBlockNumber',
        outputFormatter: utils.toDecimal
      }), new Property({
        name: 'protocolVersion',
        getter: 'cph_protocolVersion'
      })];
    };

    Cph.prototype.contract = function (abi) {
      var factory = new Contract(this, abi);
      return factory;
    };

    Cph.prototype.filter = function (options, callback, filterCreationErrorCallback) {
      return new Filter(options, 'cph', this._requestManager, watches.cph(), formatters.outputLogFormatter, callback, filterCreationErrorCallback);
    };

    Cph.prototype.namereg = function () {
      return this.contract(namereg.global.abi).at(namereg.global.address);
    };

    Cph.prototype.icapNamereg = function () {
      return this.contract(namereg.icap.abi).at(namereg.icap.address);
    };

    Cph.prototype.isSyncing = function (callback) {
      return new IsSyncing(this._requestManager, callback);
    };

    module.exports = Cph;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/methods/db.js":
  /*!*********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/methods/db.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3MethodsDbJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** @file db.js
     * @authors:
     *   Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var Method = __webpack_require__(
    /*! ../method */
    "./node_modules/web3-cypher/lib/web3/method.js");

    var DB = function DB(web3) {
      this._requestManager = web3._requestManager;
      var self = this;
      methods().forEach(function (method) {
        method.attachToObject(self);
        method.setRequestManager(web3._requestManager);
      });
    };

    var methods = function methods() {
      var putString = new Method({
        name: 'putString',
        call: 'db_putString',
        params: 3
      });
      var getString = new Method({
        name: 'getString',
        call: 'db_getString',
        params: 2
      });
      var putHex = new Method({
        name: 'putHex',
        call: 'db_putHex',
        params: 3
      });
      var getHex = new Method({
        name: 'getHex',
        call: 'db_getHex',
        params: 2
      });
      return [putString, getString, putHex, getHex];
    };

    module.exports = DB;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/methods/net.js":
  /*!**********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/methods/net.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3MethodsNetJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** @file cph.js
     * @authors:
     *   Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var utils = __webpack_require__(
    /*! ../../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var Property = __webpack_require__(
    /*! ../property */
    "./node_modules/web3-cypher/lib/web3/property.js");

    var Net = function Net(web3) {
      this._requestManager = web3._requestManager;
      var self = this;
      properties().forEach(function (p) {
        p.attachToObject(self);
        p.setRequestManager(web3._requestManager);
      });
    }; /// @returns an array of objects describing web3.cph api properties


    var properties = function properties() {
      return [new Property({
        name: 'listening',
        getter: 'net_listening'
      }), new Property({
        name: 'peerCount',
        getter: 'net_peerCount',
        outputFormatter: utils.toDecimal
      })];
    };

    module.exports = Net;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/methods/personal.js":
  /*!***************************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/methods/personal.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3MethodsPersonalJs(module, exports, __webpack_require__) {
    "use strict";
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file cph.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @author Fabian Vogelsteller <fabian@cphdev.com>
     * @date 2015
     */

    var Method = __webpack_require__(
    /*! ../method */
    "./node_modules/web3-cypher/lib/web3/method.js");

    var Property = __webpack_require__(
    /*! ../property */
    "./node_modules/web3-cypher/lib/web3/property.js");

    var formatters = __webpack_require__(
    /*! ../formatters */
    "./node_modules/web3-cypher/lib/web3/formatters.js");

    function Personal(web3) {
      this._requestManager = web3._requestManager;
      var self = this;
      methods().forEach(function (method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
      });
      properties().forEach(function (p) {
        p.attachToObject(self);
        p.setRequestManager(self._requestManager);
      });
    }

    var methods = function methods() {
      var newAccount = new Method({
        name: 'newAccount',
        call: 'personal_newAccount',
        params: 1,
        inputFormatter: [null]
      });
      var importRawKey = new Method({
        name: 'importRawKey',
        call: 'personal_importRawKey',
        params: 2
      });
      var sign = new Method({
        name: 'sign',
        call: 'personal_sign',
        params: 3,
        inputFormatter: [null, formatters.inputAddressFormatter, null]
      });
      var ecRecover = new Method({
        name: 'ecRecover',
        call: 'personal_ecRecover',
        params: 2
      });
      var unlockAll = new Method({
        name: 'unlockAll',
        call: 'personal_unlockAll',
        params: 1,
        inputFormatter: [null]
      });
      var unlockAccount = new Method({
        name: 'unlockAccount',
        call: 'personal_unlockAccount',
        params: 3,
        inputFormatter: [formatters.inputAddressFormatter, null, null]
      });
      var sendTransaction = new Method({
        name: 'sendTransaction',
        call: 'personal_sendTransaction',
        params: 2,
        inputFormatter: [formatters.inputTransactionFormatter, null]
      });
      var lockAccount = new Method({
        name: 'lockAccount',
        call: 'personal_lockAccount',
        params: 1,
        inputFormatter: [formatters.inputAddressFormatter]
      });
      return [newAccount, importRawKey, unlockAll, unlockAccount, ecRecover, sign, sendTransaction, lockAccount];
    };

    var properties = function properties() {
      return [new Property({
        name: 'listAccounts',
        getter: 'personal_listAccounts'
      })];
    };

    module.exports = Personal;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/methods/shh.js":
  /*!**********************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/methods/shh.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3MethodsShhJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** @file shh.js
     * @authors:
     *   Fabian Vogelsteller <fabian@cypherium.org>
     *   Marek Kotewicz <marek@ethcore.io>
     * @date 2017
     */
    var Method = __webpack_require__(
    /*! ../method */
    "./node_modules/web3-cypher/lib/web3/method.js");

    var Filter = __webpack_require__(
    /*! ../filter */
    "./node_modules/web3-cypher/lib/web3/filter.js");

    var watches = __webpack_require__(
    /*! ./watches */
    "./node_modules/web3-cypher/lib/web3/methods/watches.js");

    var Shh = function Shh(web3) {
      this._requestManager = web3._requestManager;
      var self = this;
      methods().forEach(function (method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
      });
    };

    Shh.prototype.newMessageFilter = function (options, callback, filterCreationErrorCallback) {
      return new Filter(options, 'shh', this._requestManager, watches.shh(), null, callback, filterCreationErrorCallback);
    };

    var methods = function methods() {
      return [new Method({
        name: 'version',
        call: 'shh_version',
        params: 0
      }), new Method({
        name: 'info',
        call: 'shh_info',
        params: 0
      }), new Method({
        name: 'setMaxMessageSize',
        call: 'shh_setMaxMessageSize',
        params: 1
      }), new Method({
        name: 'setMinPoW',
        call: 'shh_setMinPoW',
        params: 1
      }), new Method({
        name: 'markTrustedPeer',
        call: 'shh_markTrustedPeer',
        params: 1
      }), new Method({
        name: 'newKeyPair',
        call: 'shh_newKeyPair',
        params: 0
      }), new Method({
        name: 'addPrivateKey',
        call: 'shh_addPrivateKey',
        params: 1
      }), new Method({
        name: 'deleteKeyPair',
        call: 'shh_deleteKeyPair',
        params: 1
      }), new Method({
        name: 'hasKeyPair',
        call: 'shh_hasKeyPair',
        params: 1
      }), new Method({
        name: 'getPublicKey',
        call: 'shh_getPublicKey',
        params: 1
      }), new Method({
        name: 'getPrivateKey',
        call: 'shh_getPrivateKey',
        params: 1
      }), new Method({
        name: 'newSymKey',
        call: 'shh_newSymKey',
        params: 0
      }), new Method({
        name: 'addSymKey',
        call: 'shh_addSymKey',
        params: 1
      }), new Method({
        name: 'generateSymKeyFromPassword',
        call: 'shh_generateSymKeyFromPassword',
        params: 1
      }), new Method({
        name: 'hasSymKey',
        call: 'shh_hasSymKey',
        params: 1
      }), new Method({
        name: 'getSymKey',
        call: 'shh_getSymKey',
        params: 1
      }), new Method({
        name: 'deleteSymKey',
        call: 'shh_deleteSymKey',
        params: 1
      }), // subscribe and unsubscribe missing
      new Method({
        name: 'post',
        call: 'shh_post',
        params: 1,
        inputFormatter: [null]
      })];
    };

    module.exports = Shh;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/methods/swarm.js":
  /*!************************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/methods/swarm.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3MethodsSwarmJs(module, exports, __webpack_require__) {
    "use strict";
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file bzz.js
     * @author Alex Beregszaszi <alex@rtfs.hu>
     * @date 2016
     *
     * Reference: https://github.com/cypherium/go-cypherium/blob/swarm/internal/web3ext/web3ext.go#L33
     */

    var Method = __webpack_require__(
    /*! ../method */
    "./node_modules/web3-cypher/lib/web3/method.js");

    var Property = __webpack_require__(
    /*! ../property */
    "./node_modules/web3-cypher/lib/web3/property.js");

    function Swarm(web3) {
      this._requestManager = web3._requestManager;
      var self = this;
      methods().forEach(function (method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
      });
      properties().forEach(function (p) {
        p.attachToObject(self);
        p.setRequestManager(self._requestManager);
      });
    }

    var methods = function methods() {
      var blockNetworkRead = new Method({
        name: 'blockNetworkRead',
        call: 'bzz_blockNetworkRead',
        params: 1,
        inputFormatter: [null]
      });
      var syncEnabled = new Method({
        name: 'syncEnabled',
        call: 'bzz_syncEnabled',
        params: 1,
        inputFormatter: [null]
      });
      var swapEnabled = new Method({
        name: 'swapEnabled',
        call: 'bzz_swapEnabled',
        params: 1,
        inputFormatter: [null]
      });
      var download = new Method({
        name: 'download',
        call: 'bzz_download',
        params: 2,
        inputFormatter: [null, null]
      });
      var upload = new Method({
        name: 'upload',
        call: 'bzz_upload',
        params: 2,
        inputFormatter: [null, null]
      });
      var retrieve = new Method({
        name: 'retrieve',
        call: 'bzz_retrieve',
        params: 1,
        inputFormatter: [null]
      });
      var store = new Method({
        name: 'store',
        call: 'bzz_store',
        params: 2,
        inputFormatter: [null, null]
      });
      var get = new Method({
        name: 'get',
        call: 'bzz_get',
        params: 1,
        inputFormatter: [null]
      });
      var put = new Method({
        name: 'put',
        call: 'bzz_put',
        params: 2,
        inputFormatter: [null, null]
      });
      var modify = new Method({
        name: 'modify',
        call: 'bzz_modify',
        params: 4,
        inputFormatter: [null, null, null, null]
      });
      return [blockNetworkRead, syncEnabled, swapEnabled, download, upload, retrieve, store, get, put, modify];
    };

    var properties = function properties() {
      return [new Property({
        name: 'hive',
        getter: 'bzz_hive'
      }), new Property({
        name: 'info',
        getter: 'bzz_info'
      })];
    };

    module.exports = Swarm;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/methods/watches.js":
  /*!**************************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/methods/watches.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3MethodsWatchesJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** @file watches.js
     * @authors:
     *   Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var Method = __webpack_require__(
    /*! ../method */
    "./node_modules/web3-cypher/lib/web3/method.js"); /// @returns an array of objects describing web3.cph.filter api methods


    var cph = function cph() {
      var newFilterCall = function newFilterCall(args) {
        var type = args[0];

        switch (type) {
          case 'latest':
            args.shift();
            this.params = 0;
            return 'cph_newBlockFilter';

          case 'pending':
            args.shift();
            this.params = 0;
            return 'cph_newPendingTransactionFilter';

          default:
            return 'cph_newFilter';
        }
      };

      var newFilter = new Method({
        name: 'newFilter',
        call: newFilterCall,
        params: 1
      });
      var uninstallFilter = new Method({
        name: 'uninstallFilter',
        call: 'cph_uninstallFilter',
        params: 1
      });
      var getLogs = new Method({
        name: 'getLogs',
        call: 'cph_getFilterLogs',
        params: 1
      });
      var poll = new Method({
        name: 'poll',
        call: 'cph_getFilterChanges',
        params: 1
      });
      return [newFilter, uninstallFilter, getLogs, poll];
    }; /// @returns an array of objects describing web3.shh.watch api methods


    var shh = function shh() {
      return [new Method({
        name: 'newFilter',
        call: 'shh_newMessageFilter',
        params: 1
      }), new Method({
        name: 'uninstallFilter',
        call: 'shh_deleteMessageFilter',
        params: 1
      }), new Method({
        name: 'getLogs',
        call: 'shh_getFilterMessages',
        params: 1
      }), new Method({
        name: 'poll',
        call: 'shh_getFilterMessages',
        params: 1
      })];
    };

    module.exports = {
      cph: cph,
      shh: shh
    };
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/namereg.js":
  /*!******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/namereg.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3NameregJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** 
     * @file namereg.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var globalRegistrarAbi = __webpack_require__(
    /*! ../contracts/GlobalRegistrar.json */
    "./node_modules/web3-cypher/lib/contracts/GlobalRegistrar.json");

    var icapRegistrarAbi = __webpack_require__(
    /*! ../contracts/ICAPRegistrar.json */
    "./node_modules/web3-cypher/lib/contracts/ICAPRegistrar.json");

    var globalNameregAddress = '0xc6d9d2cd449a754c494264e1809c50e34d64562b';
    var icapNameregAddress = '0xa1a111bc074c9cfa781f0c38e63bd51c91b8af00';
    module.exports = {
      global: {
        abi: globalRegistrarAbi,
        address: globalNameregAddress
      },
      icap: {
        abi: icapRegistrarAbi,
        address: icapNameregAddress
      }
    };
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/property.js":
  /*!*******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/property.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3PropertyJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /**
     * @file property.js
     * @author Fabian Vogelsteller <fabian@frozeman.de>
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var utils = __webpack_require__(
    /*! ../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var Property = function Property(options) {
      this.name = options.name;
      this.getter = options.getter;
      this.setter = options.setter;
      this.outputFormatter = options.outputFormatter;
      this.inputFormatter = options.inputFormatter;
      this.requestManager = null;
    };

    Property.prototype.setRequestManager = function (rm) {
      this.requestManager = rm;
    };
    /**
     * Should be called to format input args of method
     *
     * @method formatInput
     * @param {Array}
     * @return {Array}
     */


    Property.prototype.formatInput = function (arg) {
      return this.inputFormatter ? this.inputFormatter(arg) : arg;
    };
    /**
     * Should be called to format output(result) of method
     *
     * @method formatOutput
     * @param {Object}
     * @return {Object}
     */


    Property.prototype.formatOutput = function (result) {
      return this.outputFormatter && result !== null && result !== undefined ? this.outputFormatter(result) : result;
    };
    /**
     * Should be used to extract callback from array of arguments. Modifies input param
     *
     * @method extractCallback
     * @param {Array} arguments
     * @return {Function|Null} callback, if exists
     */


    Property.prototype.extractCallback = function (args) {
      if (utils.isFunction(args[args.length - 1])) {
        return args.pop(); // modify the args array!
      }
    };
    /**
     * Should attach function to method
     *
     * @method attachToObject
     * @param {Object}
     * @param {Function}
     */


    Property.prototype.attachToObject = function (obj) {
      var proto = {
        get: this.buildGet(),
        enumerable: true
      };
      var names = this.name.split('.');
      var name = names[0];

      if (names.length > 1) {
        obj[names[0]] = obj[names[0]] || {};
        obj = obj[names[0]];
        name = names[1];
      }

      Object.defineProperty(obj, name, proto);
      obj[asyncGetterName(name)] = this.buildAsyncGet();
    };

    var asyncGetterName = function asyncGetterName(name) {
      return 'get' + name.charAt(0).toUpperCase() + name.slice(1);
    };

    Property.prototype.buildGet = function () {
      var property = this;
      return function get() {
        return property.formatOutput(property.requestManager.send({
          method: property.getter
        }));
      };
    };

    Property.prototype.buildAsyncGet = function () {
      var property = this;

      var get = function get(callback) {
        property.requestManager.sendAsync({
          method: property.getter
        }, function (err, result) {
          callback(err, property.formatOutput(result));
        });
      };

      get.request = this.request.bind(this);
      return get;
    };
    /**
     * Should be called to create pure JSONRPC request which can be used in batch request
     *
     * @method request
     * @param {...} params
     * @return {Object} jsonrpc request
     */


    Property.prototype.request = function () {
      var payload = {
        method: this.getter,
        params: [],
        callback: this.extractCallback(Array.prototype.slice.call(arguments))
      };
      payload.format = this.formatOutput.bind(this);
      return payload;
    };

    module.exports = Property;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/requestmanager.js":
  /*!*************************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/requestmanager.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3RequestmanagerJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** 
     * @file requestmanager.js
     * @author Jeffrey Wilcke <jeff@cphdev.com>
     * @author Marek Kotewicz <marek@cphdev.com>
     * @author Marian Oancea <marian@cphdev.com>
     * @author Fabian Vogelsteller <fabian@cphdev.com>
     * @author Gav Wood <g@cphdev.com>
     * @date 2014
     */
    var Jsonrpc = __webpack_require__(
    /*! ./jsonrpc */
    "./node_modules/web3-cypher/lib/web3/jsonrpc.js");

    var utils = __webpack_require__(
    /*! ../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var c = __webpack_require__(
    /*! ../utils/config */
    "./node_modules/web3-cypher/lib/utils/config.js");

    var errors = __webpack_require__(
    /*! ./errors */
    "./node_modules/web3-cypher/lib/web3/errors.js");
    /**
     * It's responsible for passing messages to providers
     * It's also responsible for polling the cypherium node for incoming messages
     * Default poll timeout is 1 second
     * Singleton
     */


    var RequestManager = function RequestManager(provider) {
      this.provider = provider;
      this.polls = {};
      this.timeout = null;
    };
    /**
     * Should be used to synchronously send request
     *
     * @method send
     * @param {Object} data
     * @return {Object}
     */


    RequestManager.prototype.send = function (data) {
      if (!this.provider) {
        console.error(errors.InvalidProvider());
        return null;
      }

      var payload = Jsonrpc.toPayload(data.method, data.params);
      var result = this.provider.send(payload);

      if (!Jsonrpc.isValidResponse(result)) {
        throw errors.InvalidResponse(result);
      }

      return result.result;
    };
    /**
     * Should be used to asynchronously send request
     *
     * @method sendAsync
     * @param {Object} data
     * @param {Function} callback
     */


    RequestManager.prototype.sendAsync = function (data, callback) {
      if (!this.provider) {
        return callback(errors.InvalidProvider());
      }

      var payload = Jsonrpc.toPayload(data.method, data.params);
      this.provider.sendAsync(payload, function (err, result) {
        if (err) {
          return callback(err);
        }

        if (!Jsonrpc.isValidResponse(result)) {
          return callback(errors.InvalidResponse(result));
        }

        callback(null, result.result);
      });
    };
    /**
     * Should be called to asynchronously send batch request
     *
     * @method sendBatch
     * @param {Array} batch data
     * @param {Function} callback
     */


    RequestManager.prototype.sendBatch = function (data, callback) {
      if (!this.provider) {
        return callback(errors.InvalidProvider());
      }

      var payload = Jsonrpc.toBatchPayload(data);
      this.provider.sendAsync(payload, function (err, results) {
        if (err) {
          return callback(err);
        }

        if (!utils.isArray(results)) {
          return callback(errors.InvalidResponse(results));
        }

        callback(err, results);
      });
    };
    /**
     * Should be used to set provider of request manager
     *
     * @method setProvider
     * @param {Object}
     */


    RequestManager.prototype.setProvider = function (p) {
      this.provider = p;
    };
    /**
     * Should be used to start polling
     *
     * @method startPolling
     * @param {Object} data
     * @param {Number} pollId
     * @param {Function} callback
     * @param {Function} uninstall
     *
     * @todo cleanup number of params
     */


    RequestManager.prototype.startPolling = function (data, pollId, callback, uninstall) {
      this.polls[pollId] = {
        data: data,
        id: pollId,
        callback: callback,
        uninstall: uninstall
      }; // start polling

      if (!this.timeout) {
        this.poll();
      }
    };
    /**
     * Should be used to stop polling for filter with given id
     *
     * @method stopPolling
     * @param {Number} pollId
     */


    RequestManager.prototype.stopPolling = function (pollId) {
      delete this.polls[pollId]; // stop polling

      if (Object.keys(this.polls).length === 0 && this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    };
    /**
     * Should be called to reset the polling mechanism of the request manager
     *
     * @method reset
     */


    RequestManager.prototype.reset = function (keepIsSyncing) {
      /*jshint maxcomplexity:5 */
      for (var key in this.polls) {
        // remove all polls, except sync polls,
        // they need to be removed manually by calling syncing.stopWatching()
        if (!keepIsSyncing || key.indexOf('syncPoll_') === -1) {
          this.polls[key].uninstall();
          delete this.polls[key];
        }
      } // stop polling


      if (Object.keys(this.polls).length === 0 && this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    };
    /**
     * Should be called to poll for changes on filter with given id
     *
     * @method poll
     */


    RequestManager.prototype.poll = function () {
      /*jshint maxcomplexity: 6 */
      this.timeout = setTimeout(this.poll.bind(this), c.CPH_POLLING_TIMEOUT);

      if (Object.keys(this.polls).length === 0) {
        return;
      }

      if (!this.provider) {
        console.error(errors.InvalidProvider());
        return;
      }

      var pollsData = [];
      var pollsIds = [];

      for (var key in this.polls) {
        pollsData.push(this.polls[key].data);
        pollsIds.push(key);
      }

      if (pollsData.length === 0) {
        return;
      }

      var payload = Jsonrpc.toBatchPayload(pollsData); // map the request id to they poll id

      var pollsIdMap = {};
      payload.forEach(function (load, index) {
        pollsIdMap[load.id] = pollsIds[index];
      });
      var self = this;
      this.provider.sendAsync(payload, function (error, results) {
        // TODO: console log?
        if (error) {
          return;
        }

        if (!utils.isArray(results)) {
          throw errors.InvalidResponse(results);
        }

        results.map(function (result) {
          var id = pollsIdMap[result.id]; // make sure the filter is still installed after arrival of the request

          if (self.polls[id]) {
            result.callback = self.polls[id].callback;
            return result;
          } else return false;
        }).filter(function (result) {
          return !!result;
        }).filter(function (result) {
          var valid = Jsonrpc.isValidResponse(result);

          if (!valid) {
            result.callback(errors.InvalidResponse(result));
          }

          return valid;
        }).forEach(function (result) {
          result.callback(null, result.result);
        });
      });
    };

    module.exports = RequestManager;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/settings.js":
  /*!*******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/settings.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3SettingsJs(module, exports) {
    var Settings = function Settings() {
      this.defaultBlock = 'latest';
      this.defaultAccount = undefined;
    };

    module.exports = Settings;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/syncing.js":
  /*!******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/syncing.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3SyncingJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** @file syncing.js
     * @authors:
     *   Fabian Vogelsteller <fabian@cphdev.com>
     * @date 2015
     */
    var formatters = __webpack_require__(
    /*! ./formatters */
    "./node_modules/web3-cypher/lib/web3/formatters.js");

    var utils = __webpack_require__(
    /*! ../utils/utils */
    "./node_modules/web3-cypher/lib/utils/utils.js");

    var count = 1;
    /**
    Adds the callback and sets up the methods, to iterate over the results.
    
    @method pollSyncing
    @param {Object} self
    */

    var pollSyncing = function pollSyncing(self) {
      var onMessage = function onMessage(error, sync) {
        if (error) {
          return self.callbacks.forEach(function (callback) {
            callback(error);
          });
        }

        if (utils.isObject(sync) && sync.startingBlock) sync = formatters.outputSyncingFormatter(sync);
        self.callbacks.forEach(function (callback) {
          if (self.lastSyncState !== sync) {
            // call the callback with true first so the app can stop anything, before receiving the sync data
            if (!self.lastSyncState && utils.isObject(sync)) callback(null, true); // call on the next CPU cycle, so the actions of the sync stop can be processes first

            setTimeout(function () {
              callback(null, sync);
            }, 0);
            self.lastSyncState = sync;
          }
        });
      };

      self.requestManager.startPolling({
        method: 'cph_syncing',
        params: []
      }, self.pollId, onMessage, self.stopWatching.bind(self));
    };

    var IsSyncing = function IsSyncing(requestManager, callback) {
      this.requestManager = requestManager;
      this.pollId = 'syncPoll_' + count++;
      this.callbacks = [];
      this.addCallback(callback);
      this.lastSyncState = false;
      pollSyncing(this);
      return this;
    };

    IsSyncing.prototype.addCallback = function (callback) {
      if (callback) this.callbacks.push(callback);
      return this;
    };

    IsSyncing.prototype.stopWatching = function () {
      this.requestManager.stopPolling(this.pollId);
      this.callbacks = [];
    };

    module.exports = IsSyncing;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/lib/web3/transfer.js":
  /*!*******************************************************!*\
    !*** ./node_modules/web3-cypher/lib/web3/transfer.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherLibWeb3TransferJs(module, exports, __webpack_require__) {
    /*
        This file is part of web3.js.
    
        web3.js is free software: you can redistribute it and/or modify
        it under the terms of the GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        web3.js is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU Lesser General Public License for more details.
    
        You should have received a copy of the GNU Lesser General Public License
        along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
    */

    /** 
     * @file transfer.js
     * @author Marek Kotewicz <marek@cphdev.com>
     * @date 2015
     */
    var Iban = __webpack_require__(
    /*! ./iban */
    "./node_modules/web3-cypher/lib/web3/iban.js");

    var exchangeAbi = __webpack_require__(
    /*! ../contracts/SmartExchange.json */
    "./node_modules/web3-cypher/lib/contracts/SmartExchange.json");
    /**
     * Should be used to make Iban transfer
     *
     * @method transfer
     * @param {String} from
     * @param {String} to iban
     * @param {Value} value to be tranfered
     * @param {Function} callback, callback
     */


    var transfer = function transfer(cph, from, to, value, callback) {
      var iban = new Iban(to);

      if (!iban.isValid()) {
        throw new Error('invalid iban address');
      }

      if (iban.isDirect()) {
        return transferToAddress(cph, from, iban.address(), value, callback);
      }

      if (!callback) {
        var address = cph.icapNamereg().addr(iban.institution());
        return deposit(cph, from, address, value, iban.client());
      }

      cph.icapNamereg().addr(iban.institution(), function (err, address) {
        return deposit(cph, from, address, value, iban.client(), callback);
      });
    };
    /**
     * Should be used to transfer funds to certain address
     *
     * @method transferToAddress
     * @param {String} from
     * @param {String} to
     * @param {Value} value to be tranfered
     * @param {Function} callback, callback
     */


    var transferToAddress = function transferToAddress(cph, from, to, value, callback) {
      return cph.sendTransaction({
        address: to,
        from: from,
        value: value
      }, callback);
    };
    /**
     * Should be used to deposit funds to generic Exchange contract (must implement deposit(bytes32) method!)
     *
     * @method deposit
     * @param {String} from
     * @param {String} to
     * @param {Value} value to be transfered
     * @param {String} client unique identifier
     * @param {Function} callback, callback
     */


    var deposit = function deposit(cph, from, to, value, client, callback) {
      var abi = exchangeAbi;
      return cph.contract(abi).at(to).deposit(client, {
        from: from,
        value: value
      }, callback);
    };

    module.exports = transfer;
    /***/
  },

  /***/
  "./node_modules/web3-cypher/node_modules/bignumber.js/bignumber.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/web3-cypher/node_modules/bignumber.js/bignumber.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherNode_modulesBignumberJsBignumberJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    /*! bignumber.js v2.0.7 https://github.com/MikeMcl/bignumber.js/LICENCE */


    ;

    (function (global) {
      'use strict';
      /*
        bignumber.js v2.0.7
        A JavaScript library for arbitrary-precision arithmetic.
        https://github.com/MikeMcl/bignumber.js
        Copyright (c) 2015 Michael Mclaughlin <M8ch88l@gmail.com>
        MIT Expat Licence
      */

      var BigNumber,
          crypto,
          parseNumeric,
          isNumeric = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          mathceil = Math.ceil,
          mathfloor = Math.floor,
          notBool = ' not a boolean or binary digit',
          roundingMode = 'rounding mode',
          tooManyDigits = 'number type has more than 15 significant digits',
          ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_',
          BASE = 1e14,
          LOG_BASE = 14,
          MAX_SAFE_INTEGER = 0x1fffffffffffff,
          // 2^53 - 1
      // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
      POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
          SQRT_BASE = 1e7,

      /*
       * The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
       * the arguments to toExponential, toFixed, toFormat, and toPrecision, beyond which an
       * exception is thrown (if ERRORS is true).
       */
      MAX = 1E9; // 0 to MAX_INT32

      /*
       * Create and return a BigNumber constructor.
       */

      function another(configObj) {
        var div,
            // id tracks the caller function, so its name can be included in error messages.
        id = 0,
            P = BigNumber.prototype,
            ONE = new BigNumber(1),

        /********************************* EDITABLE DEFAULTS **********************************/

        /*
         * The default values below must be integers within the inclusive ranges stated.
         * The values can also be changed at run-time using BigNumber.config.
         */
        // The maximum number of decimal places for operations involving division.
        DECIMAL_PLACES = 20,
            // 0 to MAX

        /*
         * The rounding mode used when rounding to the above decimal places, and when using
         * toExponential, toFixed, toFormat and toPrecision, and round (default value).
         * UP         0 Away from zero.
         * DOWN       1 Towards zero.
         * CEIL       2 Towards +Infinity.
         * FLOOR      3 Towards -Infinity.
         * HALF_UP    4 Towards nearest neighbour. If equidistant, up.
         * HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
         * HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
         * HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
         * HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
         */
        ROUNDING_MODE = 4,
            // 0 to 8
        // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
        // The exponent value at and beneath which toString returns exponential notation.
        // Number type: -7
        TO_EXP_NEG = -7,
            // 0 to -MAX
        // The exponent value at and above which toString returns exponential notation.
        // Number type: 21
        TO_EXP_POS = 21,
            // 0 to MAX
        // RANGE : [MIN_EXP, MAX_EXP]
        // The minimum exponent value, beneath which underflow to zero occurs.
        // Number type: -324  (5e-324)
        MIN_EXP = -1e7,
            // -1 to -MAX
        // The maximum exponent value, above which overflow to Infinity occurs.
        // Number type:  308  (1.7976931348623157e+308)
        // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
        MAX_EXP = 1e7,
            // 1 to MAX
        // Whether BigNumber Errors are ever thrown.
        ERRORS = true,
            // true or false
        // Change to intValidatorNoErrors if ERRORS is false.
        isValidInt = intValidatorWithErrors,
            // intValidatorWithErrors/intValidatorNoErrors
        // Whether to use cryptographically-secure random number generation, if available.
        CRYPTO = false,
            // true or false

        /*
         * The modulo mode used when calculating the modulus: a mod n.
         * The quotient (q = a / n) is calculated according to the corresponding rounding mode.
         * The remainder (r) is calculated as: r = a - n * q.
         *
         * UP        0 The remainder is positive if the dividend is negative, else is negative.
         * DOWN      1 The remainder has the same sign as the dividend.
         *             This modulo mode is commonly known as 'truncated division' and is
         *             equivalent to (a % n) in JavaScript.
         * FLOOR     3 The remainder has the same sign as the divisor (Python %).
         * HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
         * EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
         *             The remainder is always positive.
         *
         * The truncated division, floored division, Euclidian division and IEEE 754 remainder
         * modes are commonly used for the modulus operation.
         * Although the other rounding modes can also be used, they may not give useful results.
         */
        MODULO_MODE = 1,
            // 0 to 9
        // The maximum number of significant digits of the result of the toPower operation.
        // If POW_PRECISION is 0, there will be unlimited significant digits.
        POW_PRECISION = 100,
            // 0 to MAX
        // The format specification used by the BigNumber.prototype.toFormat method.
        FORMAT = {
          decimalSeparator: '.',
          groupSeparator: ',',
          groupSize: 3,
          secondaryGroupSize: 0,
          fractionGroupSeparator: '\xA0',
          // non-breaking space
          fractionGroupSize: 0
        };
        /******************************************************************************************/
        // CONSTRUCTOR

        /*
         * The BigNumber constructor and exported function.
         * Create and return a new instance of a BigNumber object.
         *
         * n {number|string|BigNumber} A numeric value.
         * [b] {number} The base of n. Integer, 2 to 64 inclusive.
         */

        function BigNumber(n, b) {
          var c,
              e,
              i,
              num,
              len,
              str,
              x = this; // Enable constructor usage without new.

          if (!(x instanceof BigNumber)) {
            // 'BigNumber() constructor call without new: {n}'
            if (ERRORS) raise(26, 'constructor call without new', n);
            return new BigNumber(n, b);
          } // 'new BigNumber() base not an integer: {b}'
          // 'new BigNumber() base out of range: {b}'


          if (b == null || !isValidInt(b, 2, 64, id, 'base')) {
            // Duplicate.
            if (n instanceof BigNumber) {
              x.s = n.s;
              x.e = n.e;
              x.c = (n = n.c) ? n.slice() : n;
              id = 0;
              return;
            }

            if ((num = typeof n == 'number') && n * 0 == 0) {
              x.s = 1 / n < 0 ? (n = -n, -1) : 1; // Fast path for integers.

              if (n === ~~n) {
                for (e = 0, i = n; i >= 10; i /= 10, e++) {
                  ;
                }

                x.e = e;
                x.c = [n];
                id = 0;
                return;
              }

              str = n + '';
            } else {
              if (!isNumeric.test(str = n + '')) return parseNumeric(x, str, num);
              x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
            }
          } else {
            b = b | 0;
            str = n + ''; // Ensure return value is rounded to DECIMAL_PLACES as with other bases.
            // Allow exponential notation to be used with base 10 argument.

            if (b == 10) {
              x = new BigNumber(n instanceof BigNumber ? n : str);
              return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
            } // Avoid potential interpretation of Infinity and NaN as base 44+ values.
            // Any number in exponential form will fail due to the [Ee][+-].


            if ((num = typeof n == 'number') && n * 0 != 0 || !new RegExp('^-?' + (c = '[' + ALPHABET.slice(0, b) + ']+') + '(?:\\.' + c + ')?$', b < 37 ? 'i' : '').test(str)) {
              return parseNumeric(x, str, num, b);
            }

            if (num) {
              x.s = 1 / n < 0 ? (str = str.slice(1), -1) : 1;

              if (ERRORS && str.replace(/^0\.0*|\./, '').length > 15) {
                // 'new BigNumber() number type has more than 15 significant digits: {n}'
                raise(id, tooManyDigits, n);
              } // Prevent later check for length on converted number.


              num = false;
            } else {
              x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
            }

            str = convertBase(str, 10, b, x.s);
          } // Decimal point?


          if ((e = str.indexOf('.')) > -1) str = str.replace('.', ''); // Exponential form?

          if ((i = str.search(/e/i)) > 0) {
            // Determine exponent.
            if (e < 0) e = i;
            e += +str.slice(i + 1);
            str = str.substring(0, i);
          } else if (e < 0) {
            // Integer.
            e = str.length;
          } // Determine leading zeros.


          for (i = 0; str.charCodeAt(i) === 48; i++) {
            ;
          } // Determine trailing zeros.


          for (len = str.length; str.charCodeAt(--len) === 48;) {
            ;
          }

          str = str.slice(i, len + 1);

          if (str) {
            len = str.length; // Disallow numbers with over 15 significant digits if number type.
            // 'new BigNumber() number type has more than 15 significant digits: {n}'

            if (num && ERRORS && len > 15) raise(id, tooManyDigits, x.s * n);
            e = e - i - 1; // Overflow?

            if (e > MAX_EXP) {
              // Infinity.
              x.c = x.e = null; // Underflow?
            } else if (e < MIN_EXP) {
              // Zero.
              x.c = [x.e = 0];
            } else {
              x.e = e;
              x.c = []; // Transform base
              // e is the base 10 exponent.
              // i is where to slice str to get the first element of the coefficient array.

              i = (e + 1) % LOG_BASE;
              if (e < 0) i += LOG_BASE;

              if (i < len) {
                if (i) x.c.push(+str.slice(0, i));

                for (len -= LOG_BASE; i < len;) {
                  x.c.push(+str.slice(i, i += LOG_BASE));
                }

                str = str.slice(i);
                i = LOG_BASE - str.length;
              } else {
                i -= len;
              }

              for (; i--; str += '0') {
                ;
              }

              x.c.push(+str);
            }
          } else {
            // Zero.
            x.c = [x.e = 0];
          }

          id = 0;
        } // CONSTRUCTOR PROPERTIES


        BigNumber.another = another;
        BigNumber.ROUND_UP = 0;
        BigNumber.ROUND_DOWN = 1;
        BigNumber.ROUND_CEIL = 2;
        BigNumber.ROUND_FLOOR = 3;
        BigNumber.ROUND_HALF_UP = 4;
        BigNumber.ROUND_HALF_DOWN = 5;
        BigNumber.ROUND_HALF_EVEN = 6;
        BigNumber.ROUND_HALF_CEIL = 7;
        BigNumber.ROUND_HALF_FLOOR = 8;
        BigNumber.EUCLID = 9;
        /*
         * Configure infrequently-changing library-wide settings.
         *
         * Accept an object or an argument list, with one or many of the following properties or
         * parameters respectively:
         *
         *   DECIMAL_PLACES  {number}  Integer, 0 to MAX inclusive
         *   ROUNDING_MODE   {number}  Integer, 0 to 8 inclusive
         *   EXPONENTIAL_AT  {number|number[]}  Integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to 0 incl., 0 to MAX incl.]
         *   RANGE           {number|number[]}  Non-zero integer, -MAX to MAX inclusive or
         *                                      [integer -MAX to -1 incl., integer 1 to MAX incl.]
         *   ERRORS          {boolean|number}   true, false, 1 or 0
         *   CRYPTO          {boolean|number}   true, false, 1 or 0
         *   MODULO_MODE     {number}           0 to 9 inclusive
         *   POW_PRECISION   {number}           0 to MAX inclusive
         *   FORMAT          {object}           See BigNumber.prototype.toFormat
         *      decimalSeparator       {string}
         *      groupSeparator         {string}
         *      groupSize              {number}
         *      secondaryGroupSize     {number}
         *      fractionGroupSeparator {string}
         *      fractionGroupSize      {number}
         *
         * (The values assigned to the above FORMAT object properties are not checked for validity.)
         *
         * E.g.
         * BigNumber.config(20, 4) is equivalent to
         * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
         *
         * Ignore properties/parameters set to null or undefined.
         * Return an object with the properties current values.
         */

        BigNumber.config = function () {
          var v,
              p,
              i = 0,
              r = {},
              a = arguments,
              o = a[0],
              has = o && typeof o == 'object' ? function () {
            if (o.hasOwnProperty(p)) return (v = o[p]) != null;
          } : function () {
            if (a.length > i) return (v = a[i++]) != null;
          }; // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
          // 'config() DECIMAL_PLACES not an integer: {v}'
          // 'config() DECIMAL_PLACES out of range: {v}'

          if (has(p = 'DECIMAL_PLACES') && isValidInt(v, 0, MAX, 2, p)) {
            DECIMAL_PLACES = v | 0;
          }

          r[p] = DECIMAL_PLACES; // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
          // 'config() ROUNDING_MODE not an integer: {v}'
          // 'config() ROUNDING_MODE out of range: {v}'

          if (has(p = 'ROUNDING_MODE') && isValidInt(v, 0, 8, 2, p)) {
            ROUNDING_MODE = v | 0;
          }

          r[p] = ROUNDING_MODE; // EXPONENTIAL_AT {number|number[]}
          // Integer, -MAX to MAX inclusive or [integer -MAX to 0 inclusive, 0 to MAX inclusive].
          // 'config() EXPONENTIAL_AT not an integer: {v}'
          // 'config() EXPONENTIAL_AT out of range: {v}'

          if (has(p = 'EXPONENTIAL_AT')) {
            if (isArray(v)) {
              if (isValidInt(v[0], -MAX, 0, 2, p) && isValidInt(v[1], 0, MAX, 2, p)) {
                TO_EXP_NEG = v[0] | 0;
                TO_EXP_POS = v[1] | 0;
              }
            } else if (isValidInt(v, -MAX, MAX, 2, p)) {
              TO_EXP_NEG = -(TO_EXP_POS = (v < 0 ? -v : v) | 0);
            }
          }

          r[p] = [TO_EXP_NEG, TO_EXP_POS]; // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
          // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
          // 'config() RANGE not an integer: {v}'
          // 'config() RANGE cannot be zero: {v}'
          // 'config() RANGE out of range: {v}'

          if (has(p = 'RANGE')) {
            if (isArray(v)) {
              if (isValidInt(v[0], -MAX, -1, 2, p) && isValidInt(v[1], 1, MAX, 2, p)) {
                MIN_EXP = v[0] | 0;
                MAX_EXP = v[1] | 0;
              }
            } else if (isValidInt(v, -MAX, MAX, 2, p)) {
              if (v | 0) MIN_EXP = -(MAX_EXP = (v < 0 ? -v : v) | 0);else if (ERRORS) raise(2, p + ' cannot be zero', v);
            }
          }

          r[p] = [MIN_EXP, MAX_EXP]; // ERRORS {boolean|number} true, false, 1 or 0.
          // 'config() ERRORS not a boolean or binary digit: {v}'

          if (has(p = 'ERRORS')) {
            if (v === !!v || v === 1 || v === 0) {
              id = 0;
              isValidInt = (ERRORS = !!v) ? intValidatorWithErrors : intValidatorNoErrors;
            } else if (ERRORS) {
              raise(2, p + notBool, v);
            }
          }

          r[p] = ERRORS; // CRYPTO {boolean|number} true, false, 1 or 0.
          // 'config() CRYPTO not a boolean or binary digit: {v}'
          // 'config() crypto unavailable: {crypto}'

          if (has(p = 'CRYPTO')) {
            if (v === !!v || v === 1 || v === 0) {
              CRYPTO = !!(v && crypto && typeof crypto == 'object');
              if (v && !CRYPTO && ERRORS) raise(2, 'crypto unavailable', crypto);
            } else if (ERRORS) {
              raise(2, p + notBool, v);
            }
          }

          r[p] = CRYPTO; // MODULO_MODE {number} Integer, 0 to 9 inclusive.
          // 'config() MODULO_MODE not an integer: {v}'
          // 'config() MODULO_MODE out of range: {v}'

          if (has(p = 'MODULO_MODE') && isValidInt(v, 0, 9, 2, p)) {
            MODULO_MODE = v | 0;
          }

          r[p] = MODULO_MODE; // POW_PRECISION {number} Integer, 0 to MAX inclusive.
          // 'config() POW_PRECISION not an integer: {v}'
          // 'config() POW_PRECISION out of range: {v}'

          if (has(p = 'POW_PRECISION') && isValidInt(v, 0, MAX, 2, p)) {
            POW_PRECISION = v | 0;
          }

          r[p] = POW_PRECISION; // FORMAT {object}
          // 'config() FORMAT not an object: {v}'

          if (has(p = 'FORMAT')) {
            if (typeof v == 'object') {
              FORMAT = v;
            } else if (ERRORS) {
              raise(2, p + ' not an object', v);
            }
          }

          r[p] = FORMAT;
          return r;
        };
        /*
         * Return a new BigNumber whose value is the maximum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */


        BigNumber.max = function () {
          return maxOrMin(arguments, P.lt);
        };
        /*
         * Return a new BigNumber whose value is the minimum of the arguments.
         *
         * arguments {number|string|BigNumber}
         */


        BigNumber.min = function () {
          return maxOrMin(arguments, P.gt);
        };
        /*
         * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
         * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
         * zeros are produced).
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         *
         * 'random() decimal places not an integer: {dp}'
         * 'random() decimal places out of range: {dp}'
         * 'random() crypto unavailable: {crypto}'
         */


        BigNumber.random = function () {
          var pow2_53 = 0x20000000000000; // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
          // Check if Math.random() produces more than 32 bits of randomness.
          // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
          // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.

          var random53bitInt = Math.random() * pow2_53 & 0x1fffff ? function () {
            return mathfloor(Math.random() * pow2_53);
          } : function () {
            return (Math.random() * 0x40000000 | 0) * 0x800000 + (Math.random() * 0x800000 | 0);
          };
          return function (dp) {
            var a,
                b,
                e,
                k,
                v,
                i = 0,
                c = [],
                rand = new BigNumber(ONE);
            dp = dp == null || !isValidInt(dp, 0, MAX, 14) ? DECIMAL_PLACES : dp | 0;
            k = mathceil(dp / LOG_BASE);

            if (CRYPTO) {
              // Browsers supporting crypto.getRandomValues.
              if (crypto && crypto.getRandomValues) {
                a = crypto.getRandomValues(new Uint32Array(k *= 2));

                for (; i < k;) {
                  // 53 bits:
                  // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                  // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                  // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                  //                                     11111 11111111 11111111
                  // 0x20000 is 2^21.
                  v = a[i] * 0x20000 + (a[i + 1] >>> 11); // Rejection sampling:
                  // 0 <= v < 9007199254740992
                  // Probability that v >= 9e15, is
                  // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251

                  if (v >= 9e15) {
                    b = crypto.getRandomValues(new Uint32Array(2));
                    a[i] = b[0];
                    a[i + 1] = b[1];
                  } else {
                    // 0 <= v <= 8999999999999999
                    // 0 <= (v % 1e14) <= 99999999999999
                    c.push(v % 1e14);
                    i += 2;
                  }
                }

                i = k / 2; // Node.js supporting crypto.randomBytes.
              } else if (crypto && crypto.randomBytes) {
                // buffer
                a = crypto.randomBytes(k *= 7);

                for (; i < k;) {
                  // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                  // 0x100000000 is 2^32, 0x1000000 is 2^24
                  // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                  // 0 <= v < 9007199254740992
                  v = (a[i] & 31) * 0x1000000000000 + a[i + 1] * 0x10000000000 + a[i + 2] * 0x100000000 + a[i + 3] * 0x1000000 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

                  if (v >= 9e15) {
                    crypto.randomBytes(7).copy(a, i);
                  } else {
                    // 0 <= (v % 1e14) <= 99999999999999
                    c.push(v % 1e14);
                    i += 7;
                  }
                }

                i = k / 7;
              } else if (ERRORS) {
                raise(14, 'crypto unavailable', crypto);
              }
            } // Use Math.random: CRYPTO is false or crypto is unavailable and ERRORS is false.


            if (!i) {
              for (; i < k;) {
                v = random53bitInt();
                if (v < 9e15) c[i++] = v % 1e14;
              }
            }

            k = c[--i];
            dp %= LOG_BASE; // Convert trailing digits to zeros according to dp.

            if (k && dp) {
              v = POWS_TEN[LOG_BASE - dp];
              c[i] = mathfloor(k / v) * v;
            } // Remove trailing elements which are zero.


            for (; c[i] === 0; c.pop(), i--) {
              ;
            } // Zero?


            if (i < 0) {
              c = [e = 0];
            } else {
              // Remove leading elements which are zero and adjust exponent accordingly.
              for (e = -1; c[0] === 0; c.shift(), e -= LOG_BASE) {
                ;
              } // Count the digits of the first element of c to determine leading zeros, and...


              for (i = 1, v = c[0]; v >= 10; v /= 10, i++) {
                ;
              } // adjust the exponent accordingly.


              if (i < LOG_BASE) e -= LOG_BASE - i;
            }

            rand.e = e;
            rand.c = c;
            return rand;
          };
        }(); // PRIVATE FUNCTIONS
        // Convert a numeric string of baseIn to a numeric string of baseOut.


        function convertBase(str, baseOut, baseIn, sign) {
          var d,
              e,
              k,
              r,
              x,
              xc,
              y,
              i = str.indexOf('.'),
              dp = DECIMAL_PLACES,
              rm = ROUNDING_MODE;
          if (baseIn < 37) str = str.toLowerCase(); // Non-integer.

          if (i >= 0) {
            k = POW_PRECISION; // Unlimited precision.

            POW_PRECISION = 0;
            str = str.replace('.', '');
            y = new BigNumber(baseIn);
            x = y.pow(str.length - i);
            POW_PRECISION = k; // Convert str as if an integer, then restore the fraction part by dividing the
            // result by its base raised to a power.

            y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e), 10, baseOut);
            y.e = y.c.length;
          } // Convert the number as integer.


          xc = toBaseOut(str, baseIn, baseOut);
          e = k = xc.length; // Remove trailing zeros.

          for (; xc[--k] == 0; xc.pop()) {
            ;
          }

          if (!xc[0]) return '0';

          if (i < 0) {
            --e;
          } else {
            x.c = xc;
            x.e = e; // sign is needed for correct rounding.

            x.s = sign;
            x = div(x, y, dp, rm, baseOut);
            xc = x.c;
            r = x.r;
            e = x.e;
          }

          d = e + dp + 1; // The rounding digit, i.e. the digit to the right of the digit that may be rounded up.

          i = xc[d];
          k = baseOut / 2;
          r = r || d < 0 || xc[d + 1] != null;
          r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));

          if (d < 1 || !xc[0]) {
            // 1^-dp or 0.
            str = r ? toFixedPoint('1', -dp) : '0';
          } else {
            xc.length = d;

            if (r) {
              // Rounding up may mean the previous digit has to be rounded up and so on.
              for (--baseOut; ++xc[--d] > baseOut;) {
                xc[d] = 0;

                if (!d) {
                  ++e;
                  xc.unshift(1);
                }
              }
            } // Determine trailing zeros.


            for (k = xc.length; !xc[--k];) {
              ;
            } // E.g. [4, 11, 15] becomes 4bf.


            for (i = 0, str = ''; i <= k; str += ALPHABET.charAt(xc[i++])) {
              ;
            }

            str = toFixedPoint(str, e);
          } // The caller will add the sign.


          return str;
        } // Perform division in the specified base. Called by div and convertBase.


        div = function () {
          // Assume non-zero x and k.
          function multiply(x, k, base) {
            var m,
                temp,
                xlo,
                xhi,
                carry = 0,
                i = x.length,
                klo = k % SQRT_BASE,
                khi = k / SQRT_BASE | 0;

            for (x = x.slice(); i--;) {
              xlo = x[i] % SQRT_BASE;
              xhi = x[i] / SQRT_BASE | 0;
              m = khi * xlo + xhi * klo;
              temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
              carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
              x[i] = temp % base;
            }

            if (carry) x.unshift(carry);
            return x;
          }

          function compare(a, b, aL, bL) {
            var i, cmp;

            if (aL != bL) {
              cmp = aL > bL ? 1 : -1;
            } else {
              for (i = cmp = 0; i < aL; i++) {
                if (a[i] != b[i]) {
                  cmp = a[i] > b[i] ? 1 : -1;
                  break;
                }
              }
            }

            return cmp;
          }

          function subtract(a, b, aL, base) {
            var i = 0; // Subtract b from a.

            for (; aL--;) {
              a[aL] -= i;
              i = a[aL] < b[aL] ? 1 : 0;
              a[aL] = i * base + a[aL] - b[aL];
            } // Remove leading zeros.


            for (; !a[0] && a.length > 1; a.shift()) {
              ;
            }
          } // x: dividend, y: divisor.


          return function (x, y, dp, rm, base) {
            var cmp,
                e,
                i,
                more,
                n,
                prod,
                prodL,
                q,
                qc,
                rem,
                remL,
                rem0,
                xi,
                xL,
                yc0,
                yL,
                yz,
                s = x.s == y.s ? 1 : -1,
                xc = x.c,
                yc = y.c; // Either NaN, Infinity or 0?

            if (!xc || !xc[0] || !yc || !yc[0]) {
              return new BigNumber( // Return NaN if either NaN, or both Infinity or 0.
              !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
              xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
            }

            q = new BigNumber(s);
            qc = q.c = [];
            e = x.e - y.e;
            s = dp + e + 1;

            if (!base) {
              base = BASE;
              e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
              s = s / LOG_BASE | 0;
            } // Result exponent may be one less then the current value of e.
            // The coefficients of the BigNumbers from convertBase may have trailing zeros.


            for (i = 0; yc[i] == (xc[i] || 0); i++) {
              ;
            }

            if (yc[i] > (xc[i] || 0)) e--;

            if (s < 0) {
              qc.push(1);
              more = true;
            } else {
              xL = xc.length;
              yL = yc.length;
              i = 0;
              s += 2; // Normalise xc and yc so highest order digit of yc is >= base / 2.

              n = mathfloor(base / (yc[0] + 1)); // Not necessary, but to handle odd bases where yc[0] == ( base / 2 ) - 1.
              // if ( n > 1 || n++ == 1 && yc[0] < base / 2 ) {

              if (n > 1) {
                yc = multiply(yc, n, base);
                xc = multiply(xc, n, base);
                yL = yc.length;
                xL = xc.length;
              }

              xi = yL;
              rem = xc.slice(0, yL);
              remL = rem.length; // Add zeros to make remainder as long as divisor.

              for (; remL < yL; rem[remL++] = 0) {
                ;
              }

              yz = yc.slice();
              yz.unshift(0);
              yc0 = yc[0];
              if (yc[1] >= base / 2) yc0++; // Not necessary, but to prevent trial digit n > base, when using base 3.
              // else if ( base == 3 && yc0 == 1 ) yc0 = 1 + 1e-15;

              do {
                n = 0; // Compare divisor and remainder.

                cmp = compare(yc, rem, yL, remL); // If divisor < remainder.

                if (cmp < 0) {
                  // Calculate trial digit, n.
                  rem0 = rem[0];
                  if (yL != remL) rem0 = rem0 * base + (rem[1] || 0); // n is how many times the divisor goes into the current remainder.

                  n = mathfloor(rem0 / yc0); //  Algorithm:
                  //  1. product = divisor * trial digit (n)
                  //  2. if product > remainder: product -= divisor, n--
                  //  3. remainder -= product
                  //  4. if product was < remainder at 2:
                  //    5. compare new remainder and divisor
                  //    6. If remainder > divisor: remainder -= divisor, n++

                  if (n > 1) {
                    // n may be > base only when base is 3.
                    if (n >= base) n = base - 1; // product = divisor * trial digit.

                    prod = multiply(yc, n, base);
                    prodL = prod.length;
                    remL = rem.length; // Compare product and remainder.
                    // If product > remainder.
                    // Trial digit n too high.
                    // n is 1 too high about 5% of the time, and is not known to have
                    // ever been more than 1 too high.

                    while (compare(prod, rem, prodL, remL) == 1) {
                      n--; // Subtract divisor from product.

                      subtract(prod, yL < prodL ? yz : yc, prodL, base);
                      prodL = prod.length;
                      cmp = 1;
                    }
                  } else {
                    // n is 0 or 1, cmp is -1.
                    // If n is 0, there is no need to compare yc and rem again below,
                    // so change cmp to 1 to avoid it.
                    // If n is 1, leave cmp as -1, so yc and rem are compared again.
                    if (n == 0) {
                      // divisor < remainder, so n must be at least 1.
                      cmp = n = 1;
                    } // product = divisor


                    prod = yc.slice();
                    prodL = prod.length;
                  }

                  if (prodL < remL) prod.unshift(0); // Subtract product from remainder.

                  subtract(rem, prod, remL, base);
                  remL = rem.length; // If product was < remainder.

                  if (cmp == -1) {
                    // Compare divisor and new remainder.
                    // If divisor < new remainder, subtract divisor from remainder.
                    // Trial digit n too low.
                    // n is 1 too low about 5% of the time, and very rarely 2 too low.
                    while (compare(yc, rem, yL, remL) < 1) {
                      n++; // Subtract divisor from remainder.

                      subtract(rem, yL < remL ? yz : yc, remL, base);
                      remL = rem.length;
                    }
                  }
                } else if (cmp === 0) {
                  n++;
                  rem = [0];
                } // else cmp === 1 and n will be 0
                // Add the next digit, n, to the result array.


                qc[i++] = n; // Update the remainder.

                if (rem[0]) {
                  rem[remL++] = xc[xi] || 0;
                } else {
                  rem = [xc[xi]];
                  remL = 1;
                }
              } while ((xi++ < xL || rem[0] != null) && s--);

              more = rem[0] != null; // Leading zero?

              if (!qc[0]) qc.shift();
            }

            if (base == BASE) {
              // To calculate q.e, first get the number of digits of qc[0].
              for (i = 1, s = qc[0]; s >= 10; s /= 10, i++) {
                ;
              }

              round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more); // Caller is convertBase.
            } else {
              q.e = e;
              q.r = +more;
            }

            return q;
          };
        }();
        /*
         * Return a string representing the value of BigNumber n in fixed-point or exponential
         * notation rounded to the specified decimal places or significant digits.
         *
         * n is a BigNumber.
         * i is the index of the last digit required (i.e. the digit that may be rounded up).
         * rm is the rounding mode.
         * caller is caller id: toExponential 19, toFixed 20, toFormat 21, toPrecision 24.
         */


        function format(n, i, rm, caller) {
          var c0, e, ne, len, str;
          rm = rm != null && isValidInt(rm, 0, 8, caller, roundingMode) ? rm | 0 : ROUNDING_MODE;
          if (!n.c) return n.toString();
          c0 = n.c[0];
          ne = n.e;

          if (i == null) {
            str = coeffToString(n.c);
            str = caller == 19 || caller == 24 && ne <= TO_EXP_NEG ? toExponential(str, ne) : toFixedPoint(str, ne);
          } else {
            n = round(new BigNumber(n), i, rm); // n.e may have changed if the value was rounded up.

            e = n.e;
            str = coeffToString(n.c);
            len = str.length; // toPrecision returns exponential notation if the number of significant digits
            // specified is less than the number of digits necessary to represent the integer
            // part of the value in fixed-point notation.
            // Exponential notation.

            if (caller == 19 || caller == 24 && (i <= e || e <= TO_EXP_NEG)) {
              // Append zeros?
              for (; len < i; str += '0', len++) {
                ;
              }

              str = toExponential(str, e); // Fixed-point notation.
            } else {
              i -= ne;
              str = toFixedPoint(str, e); // Append zeros?

              if (e + 1 > len) {
                if (--i > 0) for (str += '.'; i--; str += '0') {
                  ;
                }
              } else {
                i += e - len;

                if (i > 0) {
                  if (e + 1 == len) str += '.';

                  for (; i--; str += '0') {
                    ;
                  }
                }
              }
            }
          }

          return n.s < 0 && c0 ? '-' + str : str;
        } // Handle BigNumber.max and BigNumber.min.


        function maxOrMin(args, method) {
          var m,
              n,
              i = 0;
          if (isArray(args[0])) args = args[0];
          m = new BigNumber(args[0]);

          for (; ++i < args.length;) {
            n = new BigNumber(args[i]); // If any number is NaN, return NaN.

            if (!n.s) {
              m = n;
              break;
            } else if (method.call(m, n)) {
              m = n;
            }
          }

          return m;
        }
        /*
         * Return true if n is an integer in range, otherwise throw.
         * Use for argument validation when ERRORS is true.
         */


        function intValidatorWithErrors(n, min, max, caller, name) {
          if (n < min || n > max || n != truncate(n)) {
            raise(caller, (name || 'decimal places') + (n < min || n > max ? ' out of range' : ' not an integer'), n);
          }

          return true;
        }
        /*
         * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
         * Called by minus, plus and times.
         */


        function normalise(n, c, e) {
          var i = 1,
              j = c.length; // Remove trailing zeros.

          for (; !c[--j]; c.pop()) {
            ;
          } // Calculate the base 10 exponent. First get the number of digits of c[0].


          for (j = c[0]; j >= 10; j /= 10, i++) {
            ;
          } // Overflow?


          if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
            // Infinity.
            n.c = n.e = null; // Underflow?
          } else if (e < MIN_EXP) {
            // Zero.
            n.c = [n.e = 0];
          } else {
            n.e = e;
            n.c = c;
          }

          return n;
        } // Handle values that fail the validity test in BigNumber.


        parseNumeric = function () {
          var basePrefix = /^(-?)0([xbo])/i,
              dotAfter = /^([^.]+)\.$/,
              dotBefore = /^\.([^.]+)$/,
              isInfinityOrNaN = /^-?(Infinity|NaN)$/,
              whitespaceOrPlus = /^\s*\+|^\s+|\s+$/g;
          return function (x, str, num, b) {
            var base,
                s = num ? str : str.replace(whitespaceOrPlus, ''); // No exception on ±Infinity or NaN.

            if (isInfinityOrNaN.test(s)) {
              x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
            } else {
              if (!num) {
                // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                s = s.replace(basePrefix, function (m, p1, p2) {
                  base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                  return !b || b == base ? p1 : m;
                });

                if (b) {
                  base = b; // E.g. '1.' to '1', '.1' to '0.1'

                  s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
                }

                if (str != s) return new BigNumber(s, base);
              } // 'new BigNumber() not a number: {n}'
              // 'new BigNumber() not a base {b} number: {n}'


              if (ERRORS) raise(id, 'not a' + (b ? ' base ' + b : '') + ' number', str);
              x.s = null;
            }

            x.c = x.e = null;
            id = 0;
          };
        }(); // Throw a BigNumber Error.


        function raise(caller, msg, val) {
          var error = new Error(['new BigNumber', // 0
          'cmp', // 1
          'config', // 2
          'div', // 3
          'divToInt', // 4
          'eq', // 5
          'gt', // 6
          'gte', // 7
          'lt', // 8
          'lte', // 9
          'minus', // 10
          'mod', // 11
          'plus', // 12
          'precision', // 13
          'random', // 14
          'round', // 15
          'shift', // 16
          'times', // 17
          'toDigits', // 18
          'toExponential', // 19
          'toFixed', // 20
          'toFormat', // 21
          'toFraction', // 22
          'pow', // 23
          'toPrecision', // 24
          'toString', // 25
          'BigNumber' // 26
          ][caller] + '() ' + msg + ': ' + val);
          error.name = 'BigNumber Error';
          id = 0;
          throw error;
        }
        /*
         * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
         * If r is truthy, it is known that there are more digits after the rounding digit.
         */


        function round(x, sd, rm, r) {
          var d,
              i,
              j,
              k,
              n,
              ni,
              rd,
              xc = x.c,
              pows10 = POWS_TEN; // if x is not Infinity or NaN...

          if (xc) {
            // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
            // n is a base 1e14 number, the value of the element of array x.c containing rd.
            // ni is the index of n within x.c.
            // d is the number of digits of n.
            // i is the index of rd within n including leading zeros.
            // j is the actual index of rd within n (if < 0, rd is a leading zero).
            out: {
              // Get the number of digits of the first element of xc.
              for (d = 1, k = xc[0]; k >= 10; k /= 10, d++) {
                ;
              }

              i = sd - d; // If the rounding digit is in the first element of xc...

              if (i < 0) {
                i += LOG_BASE;
                j = sd;
                n = xc[ni = 0]; // Get the rounding digit at index j of n.

                rd = n / pows10[d - j - 1] % 10 | 0;
              } else {
                ni = mathceil((i + 1) / LOG_BASE);

                if (ni >= xc.length) {
                  if (r) {
                    // Needed by sqrt.
                    for (; xc.length <= ni; xc.push(0)) {
                      ;
                    }

                    n = rd = 0;
                    d = 1;
                    i %= LOG_BASE;
                    j = i - LOG_BASE + 1;
                  } else {
                    break out;
                  }
                } else {
                  n = k = xc[ni]; // Get the number of digits of n.

                  for (d = 1; k >= 10; k /= 10, d++) {
                    ;
                  } // Get the index of rd within n.


                  i %= LOG_BASE; // Get the index of rd within n, adjusted for leading zeros.
                  // The number of leading zeros of n is given by LOG_BASE - d.

                  j = i - LOG_BASE + d; // Get the rounding digit at index j of n.

                  rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
                }
              }

              r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
              // The expression  n % pows10[ d - j - 1 ]  returns all digits of n to the right
              // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
              xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
              r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
              (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));

              if (sd < 1 || !xc[0]) {
                xc.length = 0;

                if (r) {
                  // Convert sd to decimal places.
                  sd -= x.e + 1; // 1, 0.1, 0.01, 0.001, 0.0001 etc.

                  xc[0] = pows10[sd % LOG_BASE];
                  x.e = -sd || 0;
                } else {
                  // Zero.
                  xc[0] = x.e = 0;
                }

                return x;
              } // Remove excess digits.


              if (i == 0) {
                xc.length = ni;
                k = 1;
                ni--;
              } else {
                xc.length = ni + 1;
                k = pows10[LOG_BASE - i]; // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                // j > 0 means i > number of leading zeros of n.

                xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
              } // Round up?


              if (r) {
                for (;;) {
                  // If the digit to be rounded up is in the first element of xc...
                  if (ni == 0) {
                    // i will be the length of xc[0] before k is added.
                    for (i = 1, j = xc[0]; j >= 10; j /= 10, i++) {
                      ;
                    }

                    j = xc[0] += k;

                    for (k = 1; j >= 10; j /= 10, k++) {
                      ;
                    } // if i != k the length has increased.


                    if (i != k) {
                      x.e++;
                      if (xc[0] == BASE) xc[0] = 1;
                    }

                    break;
                  } else {
                    xc[ni] += k;
                    if (xc[ni] != BASE) break;
                    xc[ni--] = 0;
                    k = 1;
                  }
                }
              } // Remove trailing zeros.


              for (i = xc.length; xc[--i] === 0; xc.pop()) {
                ;
              }
            } // Overflow? Infinity.


            if (x.e > MAX_EXP) {
              x.c = x.e = null; // Underflow? Zero.
            } else if (x.e < MIN_EXP) {
              x.c = [x.e = 0];
            }
          }

          return x;
        } // PROTOTYPE/INSTANCE METHODS

        /*
         * Return a new BigNumber whose value is the absolute value of this BigNumber.
         */


        P.absoluteValue = P.abs = function () {
          var x = new BigNumber(this);
          if (x.s < 0) x.s = 1;
          return x;
        };
        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of Infinity.
         */


        P.ceil = function () {
          return round(new BigNumber(this), this.e + 1, 2);
        };
        /*
         * Return
         * 1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
         * 0 if they have the same value,
         * or null if the value of either is NaN.
         */


        P.comparedTo = P.cmp = function (y, b) {
          id = 1;
          return compare(this, new BigNumber(y, b));
        };
        /*
         * Return the number of decimal places of the value of this BigNumber, or null if the value
         * of this BigNumber is ±Infinity or NaN.
         */


        P.decimalPlaces = P.dp = function () {
          var n,
              v,
              c = this.c;
          if (!c) return null;
          n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE; // Subtract the number of trailing zeros of the last number.

          if (v = c[v]) for (; v % 10 == 0; v /= 10, n--) {
            ;
          }
          if (n < 0) n = 0;
          return n;
        };
        /*
         *  n / 0 = I
         *  n / N = N
         *  n / I = 0
         *  0 / n = 0
         *  0 / 0 = N
         *  0 / N = N
         *  0 / I = 0
         *  N / n = N
         *  N / 0 = N
         *  N / N = N
         *  N / I = N
         *  I / n = I
         *  I / 0 = I
         *  I / N = N
         *  I / I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
         * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */


        P.dividedBy = P.div = function (y, b) {
          id = 3;
          return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
        };
        /*
         * Return a new BigNumber whose value is the integer part of dividing the value of this
         * BigNumber by the value of BigNumber(y, b).
         */


        P.dividedToIntegerBy = P.divToInt = function (y, b) {
          id = 4;
          return div(this, new BigNumber(y, b), 0, 1);
        };
        /*
         * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
         * otherwise returns false.
         */


        P.equals = P.eq = function (y, b) {
          id = 5;
          return compare(this, new BigNumber(y, b)) === 0;
        };
        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a whole
         * number in the direction of -Infinity.
         */


        P.floor = function () {
          return round(new BigNumber(this), this.e + 1, 3);
        };
        /*
         * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
         * otherwise returns false.
         */


        P.greaterThan = P.gt = function (y, b) {
          id = 6;
          return compare(this, new BigNumber(y, b)) > 0;
        };
        /*
         * Return true if the value of this BigNumber is greater than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */


        P.greaterThanOrEqualTo = P.gte = function (y, b) {
          id = 7;
          return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
        };
        /*
         * Return true if the value of this BigNumber is a finite number, otherwise returns false.
         */


        P.isFinite = function () {
          return !!this.c;
        };
        /*
         * Return true if the value of this BigNumber is an integer, otherwise return false.
         */


        P.isInteger = P.isInt = function () {
          return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
        };
        /*
         * Return true if the value of this BigNumber is NaN, otherwise returns false.
         */


        P.isNaN = function () {
          return !this.s;
        };
        /*
         * Return true if the value of this BigNumber is negative, otherwise returns false.
         */


        P.isNegative = P.isNeg = function () {
          return this.s < 0;
        };
        /*
         * Return true if the value of this BigNumber is 0 or -0, otherwise returns false.
         */


        P.isZero = function () {
          return !!this.c && this.c[0] == 0;
        };
        /*
         * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
         * otherwise returns false.
         */


        P.lessThan = P.lt = function (y, b) {
          id = 8;
          return compare(this, new BigNumber(y, b)) < 0;
        };
        /*
         * Return true if the value of this BigNumber is less than or equal to the value of
         * BigNumber(y, b), otherwise returns false.
         */


        P.lessThanOrEqualTo = P.lte = function (y, b) {
          id = 9;
          return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
        };
        /*
         *  n - 0 = n
         *  n - N = N
         *  n - I = -I
         *  0 - n = -n
         *  0 - 0 = 0
         *  0 - N = N
         *  0 - I = -I
         *  N - n = N
         *  N - 0 = N
         *  N - N = N
         *  N - I = N
         *  I - n = I
         *  I - 0 = I
         *  I - N = N
         *  I - I = N
         *
         * Return a new BigNumber whose value is the value of this BigNumber minus the value of
         * BigNumber(y, b).
         */


        P.minus = P.sub = function (y, b) {
          var i,
              j,
              t,
              xLTy,
              x = this,
              a = x.s;
          id = 10;
          y = new BigNumber(y, b);
          b = y.s; // Either NaN?

          if (!a || !b) return new BigNumber(NaN); // Signs differ?

          if (a != b) {
            y.s = -b;
            return x.plus(y);
          }

          var xe = x.e / LOG_BASE,
              ye = y.e / LOG_BASE,
              xc = x.c,
              yc = y.c;

          if (!xe || !ye) {
            // Either Infinity?
            if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN); // Either zero?

            if (!xc[0] || !yc[0]) {
              // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
              return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x : // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
              ROUNDING_MODE == 3 ? -0 : 0);
            }
          }

          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice(); // Determine which is the bigger number.

          if (a = xe - ye) {
            if (xLTy = a < 0) {
              a = -a;
              t = xc;
            } else {
              ye = xe;
              t = yc;
            }

            t.reverse(); // Prepend zeros to equalise exponents.

            for (b = a; b--; t.push(0)) {
              ;
            }

            t.reverse();
          } else {
            // Exponents equal. Check digit by digit.
            j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

            for (a = b = 0; b < j; b++) {
              if (xc[b] != yc[b]) {
                xLTy = xc[b] < yc[b];
                break;
              }
            }
          } // x < y? Point xc to the array of the bigger number.


          if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;
          b = (j = yc.length) - (i = xc.length); // Append zeros to xc if shorter.
          // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.

          if (b > 0) for (; b--; xc[i++] = 0) {
            ;
          }
          b = BASE - 1; // Subtract yc from xc.

          for (; j > a;) {
            if (xc[--j] < yc[j]) {
              for (i = j; i && !xc[--i]; xc[i] = b) {
                ;
              }

              --xc[i];
              xc[j] += BASE;
            }

            xc[j] -= yc[j];
          } // Remove leading zeros and adjust exponent accordingly.


          for (; xc[0] == 0; xc.shift(), --ye) {
            ;
          } // Zero?


          if (!xc[0]) {
            // Following IEEE 754 (2008) 6.3,
            // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
            y.s = ROUNDING_MODE == 3 ? -1 : 1;
            y.c = [y.e = 0];
            return y;
          } // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
          // for finite x and y.


          return normalise(y, xc, ye);
        };
        /*
         *   n % 0 =  N
         *   n % N =  N
         *   n % I =  n
         *   0 % n =  0
         *  -0 % n = -0
         *   0 % 0 =  N
         *   0 % N =  N
         *   0 % I =  0
         *   N % n =  N
         *   N % 0 =  N
         *   N % N =  N
         *   N % I =  N
         *   I % n =  N
         *   I % 0 =  N
         *   I % N =  N
         *   I % I =  N
         *
         * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
         * BigNumber(y, b). The result depends on the value of MODULO_MODE.
         */


        P.modulo = P.mod = function (y, b) {
          var q,
              s,
              x = this;
          id = 11;
          y = new BigNumber(y, b); // Return NaN if x is Infinity or NaN, or y is NaN or zero.

          if (!x.c || !y.s || y.c && !y.c[0]) {
            return new BigNumber(NaN); // Return x if y is Infinity or x is zero.
          } else if (!y.c || x.c && !x.c[0]) {
            return new BigNumber(x);
          }

          if (MODULO_MODE == 9) {
            // Euclidian division: q = sign(y) * floor(x / abs(y))
            // r = x - qy    where  0 <= r < abs(y)
            s = y.s;
            y.s = 1;
            q = div(x, y, 0, 3);
            y.s = s;
            q.s *= s;
          } else {
            q = div(x, y, 0, MODULO_MODE);
          }

          return x.minus(q.times(y));
        };
        /*
         * Return a new BigNumber whose value is the value of this BigNumber negated,
         * i.e. multiplied by -1.
         */


        P.negated = P.neg = function () {
          var x = new BigNumber(this);
          x.s = -x.s || null;
          return x;
        };
        /*
         *  n + 0 = n
         *  n + N = N
         *  n + I = I
         *  0 + n = n
         *  0 + 0 = 0
         *  0 + N = N
         *  0 + I = I
         *  N + n = N
         *  N + 0 = N
         *  N + N = N
         *  N + I = N
         *  I + n = I
         *  I + 0 = I
         *  I + N = N
         *  I + I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber plus the value of
         * BigNumber(y, b).
         */


        P.plus = P.add = function (y, b) {
          var t,
              x = this,
              a = x.s;
          id = 12;
          y = new BigNumber(y, b);
          b = y.s; // Either NaN?

          if (!a || !b) return new BigNumber(NaN); // Signs differ?

          if (a != b) {
            y.s = -b;
            return x.minus(y);
          }

          var xe = x.e / LOG_BASE,
              ye = y.e / LOG_BASE,
              xc = x.c,
              yc = y.c;

          if (!xe || !ye) {
            // Return ±Infinity if either ±Infinity.
            if (!xc || !yc) return new BigNumber(a / 0); // Either zero?
            // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.

            if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
          }

          xe = bitFloor(xe);
          ye = bitFloor(ye);
          xc = xc.slice(); // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.

          if (a = xe - ye) {
            if (a > 0) {
              ye = xe;
              t = yc;
            } else {
              a = -a;
              t = xc;
            }

            t.reverse();

            for (; a--; t.push(0)) {
              ;
            }

            t.reverse();
          }

          a = xc.length;
          b = yc.length; // Point xc to the longer array, and b to the shorter length.

          if (a - b < 0) t = yc, yc = xc, xc = t, b = a; // Only start adding at yc.length - 1 as the further digits of xc can be ignored.

          for (a = 0; b;) {
            a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
            xc[b] %= BASE;
          }

          if (a) {
            xc.unshift(a);
            ++ye;
          } // No need to check for zero, as +x + +y != 0 && -x + -y != 0
          // ye = MAX_EXP + 1 possible


          return normalise(y, xc, ye);
        };
        /*
         * Return the number of significant digits of the value of this BigNumber.
         *
         * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
         */


        P.precision = P.sd = function (z) {
          var n,
              v,
              x = this,
              c = x.c; // 'precision() argument not a boolean or binary digit: {z}'

          if (z != null && z !== !!z && z !== 1 && z !== 0) {
            if (ERRORS) raise(13, 'argument' + notBool, z);
            if (z != !!z) z = null;
          }

          if (!c) return null;
          v = c.length - 1;
          n = v * LOG_BASE + 1;

          if (v = c[v]) {
            // Subtract the number of trailing zeros of the last element.
            for (; v % 10 == 0; v /= 10, n--) {
              ;
            } // Add the number of digits of the first element.


            for (v = c[0]; v >= 10; v /= 10, n++) {
              ;
            }
          }

          if (z && x.e + 1 > n) n = x.e + 1;
          return n;
        };
        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * dp decimal places using rounding mode rm, or to 0 and ROUNDING_MODE respectively if
         * omitted.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'round() decimal places out of range: {dp}'
         * 'round() decimal places not an integer: {dp}'
         * 'round() rounding mode not an integer: {rm}'
         * 'round() rounding mode out of range: {rm}'
         */


        P.round = function (dp, rm) {
          var n = new BigNumber(this);

          if (dp == null || isValidInt(dp, 0, MAX, 15)) {
            round(n, ~~dp + this.e + 1, rm == null || !isValidInt(rm, 0, 8, 15, roundingMode) ? ROUNDING_MODE : rm | 0);
          }

          return n;
        };
        /*
         * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
         * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
         *
         * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
         *
         * If k is out of range and ERRORS is false, the result will be ±0 if k < 0, or ±Infinity
         * otherwise.
         *
         * 'shift() argument not an integer: {k}'
         * 'shift() argument out of range: {k}'
         */


        P.shift = function (k) {
          var n = this;
          return isValidInt(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 16, 'argument') // k < 1e+21, or truncate(k) will produce exponential notation.
          ? n.times('1e' + truncate(k)) : new BigNumber(n.c && n.c[0] && (k < -MAX_SAFE_INTEGER || k > MAX_SAFE_INTEGER) ? n.s * (k < 0 ? 0 : 1 / 0) : n);
        };
        /*
         *  sqrt(-n) =  N
         *  sqrt( N) =  N
         *  sqrt(-I) =  N
         *  sqrt( I) =  I
         *  sqrt( 0) =  0
         *  sqrt(-0) = -0
         *
         * Return a new BigNumber whose value is the square root of the value of this BigNumber,
         * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
         */


        P.squareRoot = P.sqrt = function () {
          var m,
              n,
              r,
              rep,
              t,
              x = this,
              c = x.c,
              s = x.s,
              e = x.e,
              dp = DECIMAL_PLACES + 4,
              half = new BigNumber('0.5'); // Negative/NaN/Infinity/zero?

          if (s !== 1 || !c || !c[0]) {
            return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
          } // Initial estimate.


          s = Math.sqrt(+x); // Math.sqrt underflow/overflow?
          // Pass x to Math.sqrt as integer, then adjust the exponent of the result.

          if (s == 0 || s == 1 / 0) {
            n = coeffToString(c);
            if ((n.length + e) % 2 == 0) n += '0';
            s = Math.sqrt(n);
            e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

            if (s == 1 / 0) {
              n = '1e' + e;
            } else {
              n = s.toExponential();
              n = n.slice(0, n.indexOf('e') + 1) + e;
            }

            r = new BigNumber(n);
          } else {
            r = new BigNumber(s + '');
          } // Check for zero.
          // r could be zero if MIN_EXP is changed after the this value was created.
          // This would cause a division by zero (x/t) and hence Infinity below, which would cause
          // coeffToString to throw.


          if (r.c[0]) {
            e = r.e;
            s = e + dp;
            if (s < 3) s = 0; // Newton-Raphson iteration.

            for (;;) {
              t = r;
              r = half.times(t.plus(div(x, t, dp, 1)));

              if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                // The exponent of r may here be one less than the final result exponent,
                // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                // are indexed correctly.
                if (r.e < e) --s;
                n = n.slice(s - 3, s + 1); // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                // iteration.

                if (n == '9999' || !rep && n == '4999') {
                  // On the first iteration only, check to see if rounding up gives the
                  // exact result as the nines may infinitely repeat.
                  if (!rep) {
                    round(t, t.e + DECIMAL_PLACES + 2, 0);

                    if (t.times(t).eq(x)) {
                      r = t;
                      break;
                    }
                  }

                  dp += 4;
                  s += 4;
                  rep = 1;
                } else {
                  // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                  // result. If not, then there are further digits and m will be truthy.
                  if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
                    // Truncate to the first rounding digit.
                    round(r, r.e + DECIMAL_PLACES + 2, 1);
                    m = !r.times(r).eq(x);
                  }

                  break;
                }
              }
            }
          }

          return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
        };
        /*
         *  n * 0 = 0
         *  n * N = N
         *  n * I = I
         *  0 * n = 0
         *  0 * 0 = 0
         *  0 * N = N
         *  0 * I = N
         *  N * n = N
         *  N * 0 = N
         *  N * N = N
         *  N * I = N
         *  I * n = I
         *  I * 0 = N
         *  I * N = N
         *  I * I = I
         *
         * Return a new BigNumber whose value is the value of this BigNumber times the value of
         * BigNumber(y, b).
         */


        P.times = P.mul = function (y, b) {
          var c,
              e,
              i,
              j,
              k,
              m,
              xcL,
              xlo,
              xhi,
              ycL,
              ylo,
              yhi,
              zc,
              base,
              sqrtBase,
              x = this,
              xc = x.c,
              yc = (id = 17, y = new BigNumber(y, b)).c; // Either NaN, ±Infinity or ±0?

          if (!xc || !yc || !xc[0] || !yc[0]) {
            // Return NaN if either is NaN, or one is 0 and the other is Infinity.
            if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
              y.c = y.e = y.s = null;
            } else {
              y.s *= x.s; // Return ±Infinity if either is ±Infinity.

              if (!xc || !yc) {
                y.c = y.e = null; // Return ±0 if either is ±0.
              } else {
                y.c = [0];
                y.e = 0;
              }
            }

            return y;
          }

          e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
          y.s *= x.s;
          xcL = xc.length;
          ycL = yc.length; // Ensure xc points to longer array and xcL to its length.

          if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i; // Initialise the result array with zeros.

          for (i = xcL + ycL, zc = []; i--; zc.push(0)) {
            ;
          }

          base = BASE;
          sqrtBase = SQRT_BASE;

          for (i = ycL; --i >= 0;) {
            c = 0;
            ylo = yc[i] % sqrtBase;
            yhi = yc[i] / sqrtBase | 0;

            for (k = xcL, j = i + k; j > i;) {
              xlo = xc[--k] % sqrtBase;
              xhi = xc[k] / sqrtBase | 0;
              m = yhi * xlo + xhi * ylo;
              xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
              c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
              zc[j--] = xlo % base;
            }

            zc[j] = c;
          }

          if (c) {
            ++e;
          } else {
            zc.shift();
          }

          return normalise(y, zc, e);
        };
        /*
         * Return a new BigNumber whose value is the value of this BigNumber rounded to a maximum of
         * sd significant digits using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toDigits() precision out of range: {sd}'
         * 'toDigits() precision not an integer: {sd}'
         * 'toDigits() rounding mode not an integer: {rm}'
         * 'toDigits() rounding mode out of range: {rm}'
         */


        P.toDigits = function (sd, rm) {
          var n = new BigNumber(this);
          sd = sd == null || !isValidInt(sd, 1, MAX, 18, 'precision') ? null : sd | 0;
          rm = rm == null || !isValidInt(rm, 0, 8, 18, roundingMode) ? ROUNDING_MODE : rm | 0;
          return sd ? round(n, sd, rm) : n;
        };
        /*
         * Return a string representing the value of this BigNumber in exponential notation and
         * rounded using ROUNDING_MODE to dp fixed decimal places.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toExponential() decimal places not an integer: {dp}'
         * 'toExponential() decimal places out of range: {dp}'
         * 'toExponential() rounding mode not an integer: {rm}'
         * 'toExponential() rounding mode out of range: {rm}'
         */


        P.toExponential = function (dp, rm) {
          return format(this, dp != null && isValidInt(dp, 0, MAX, 19) ? ~~dp + 1 : null, rm, 19);
        };
        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounding
         * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
         *
         * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
         * but e.g. (-0.00001).toFixed(0) is '-0'.
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFixed() decimal places not an integer: {dp}'
         * 'toFixed() decimal places out of range: {dp}'
         * 'toFixed() rounding mode not an integer: {rm}'
         * 'toFixed() rounding mode out of range: {rm}'
         */


        P.toFixed = function (dp, rm) {
          return format(this, dp != null && isValidInt(dp, 0, MAX, 20) ? ~~dp + this.e + 1 : null, rm, 20);
        };
        /*
         * Return a string representing the value of this BigNumber in fixed-point notation rounded
         * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
         * of the FORMAT object (see BigNumber.config).
         *
         * FORMAT = {
         *      decimalSeparator : '.',
         *      groupSeparator : ',',
         *      groupSize : 3,
         *      secondaryGroupSize : 0,
         *      fractionGroupSeparator : '\xA0',    // non-breaking space
         *      fractionGroupSize : 0
         * };
         *
         * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toFormat() decimal places not an integer: {dp}'
         * 'toFormat() decimal places out of range: {dp}'
         * 'toFormat() rounding mode not an integer: {rm}'
         * 'toFormat() rounding mode out of range: {rm}'
         */


        P.toFormat = function (dp, rm) {
          var str = format(this, dp != null && isValidInt(dp, 0, MAX, 21) ? ~~dp + this.e + 1 : null, rm, 21);

          if (this.c) {
            var i,
                arr = str.split('.'),
                g1 = +FORMAT.groupSize,
                g2 = +FORMAT.secondaryGroupSize,
                groupSeparator = FORMAT.groupSeparator,
                intPart = arr[0],
                fractionPart = arr[1],
                isNeg = this.s < 0,
                intDigits = isNeg ? intPart.slice(1) : intPart,
                len = intDigits.length;
            if (g2) i = g1, g1 = g2, g2 = i, len -= i;

            if (g1 > 0 && len > 0) {
              i = len % g1 || g1;
              intPart = intDigits.substr(0, i);

              for (; i < len; i += g1) {
                intPart += groupSeparator + intDigits.substr(i, g1);
              }

              if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
              if (isNeg) intPart = '-' + intPart;
            }

            str = fractionPart ? intPart + FORMAT.decimalSeparator + ((g2 = +FORMAT.fractionGroupSize) ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'), '$&' + FORMAT.fractionGroupSeparator) : fractionPart) : intPart;
          }

          return str;
        };
        /*
         * Return a string array representing the value of this BigNumber as a simple fraction with
         * an integer numerator and an integer denominator. The denominator will be a positive
         * non-zero value less than or equal to the specified maximum denominator. If a maximum
         * denominator is not specified, the denominator will be the lowest value necessary to
         * represent the number exactly.
         *
         * [md] {number|string|BigNumber} Integer >= 1 and < Infinity. The maximum denominator.
         *
         * 'toFraction() max denominator not an integer: {md}'
         * 'toFraction() max denominator out of range: {md}'
         */


        P.toFraction = function (md) {
          var arr,
              d0,
              d2,
              e,
              exp,
              n,
              n0,
              q,
              s,
              k = ERRORS,
              x = this,
              xc = x.c,
              d = new BigNumber(ONE),
              n1 = d0 = new BigNumber(ONE),
              d1 = n0 = new BigNumber(ONE);

          if (md != null) {
            ERRORS = false;
            n = new BigNumber(md);
            ERRORS = k;

            if (!(k = n.isInt()) || n.lt(ONE)) {
              if (ERRORS) {
                raise(22, 'max denominator ' + (k ? 'out of range' : 'not an integer'), md);
              } // ERRORS is false:
              // If md is a finite non-integer >= 1, round it to an integer and use it.


              md = !k && n.c && round(n, n.e + 1, 1).gte(ONE) ? n : null;
            }
          }

          if (!xc) return x.toString();
          s = coeffToString(xc); // Determine initial denominator.
          // d is a power of 10 and the minimum max denominator that specifies the value exactly.

          e = d.e = s.length - x.e - 1;
          d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
          md = !md || n.cmp(d) > 0 ? e > 0 ? d : n1 : n;
          exp = MAX_EXP;
          MAX_EXP = 1 / 0;
          n = new BigNumber(s); // n0 = d1 = 0

          n0.c[0] = 0;

          for (;;) {
            q = div(n, d, 0, 1);
            d2 = d0.plus(q.times(d1));
            if (d2.cmp(md) == 1) break;
            d0 = d1;
            d1 = d2;
            n1 = n0.plus(q.times(d2 = n1));
            n0 = d2;
            d = n.minus(q.times(d2 = d));
            n = d2;
          }

          d2 = div(md.minus(d0), d1, 0, 1);
          n0 = n0.plus(d2.times(n1));
          d0 = d0.plus(d2.times(d1));
          n0.s = n1.s = x.s;
          e *= 2; // Determine which fraction is closer to x, n0/d0 or n1/d1

          arr = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().cmp(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1.toString(), d1.toString()] : [n0.toString(), d0.toString()];
          MAX_EXP = exp;
          return arr;
        };
        /*
         * Return the value of this BigNumber converted to a number primitive.
         */


        P.toNumber = function () {
          var x = this; // Ensure zero has correct sign.

          return +x || (x.s ? x.s * 0 : NaN);
        };
        /*
         * Return a BigNumber whose value is the value of this BigNumber raised to the power n.
         * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
         * If POW_PRECISION is not 0, round to POW_PRECISION using ROUNDING_MODE.
         *
         * n {number} Integer, -9007199254740992 to 9007199254740992 inclusive.
         * (Performs 54 loop iterations for n of 9007199254740992.)
         *
         * 'pow() exponent not an integer: {n}'
         * 'pow() exponent out of range: {n}'
         */


        P.toPower = P.pow = function (n) {
          var k,
              y,
              i = mathfloor(n < 0 ? -n : +n),
              x = this; // Pass ±Infinity to Math.pow if exponent is out of range.

          if (!isValidInt(n, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER, 23, 'exponent') && (!isFinite(n) || i > MAX_SAFE_INTEGER && (n /= 0) || parseFloat(n) != n && !(n = NaN))) {
            return new BigNumber(Math.pow(+x, n));
          } // Truncating each coefficient array to a length of k after each multiplication equates
          // to truncating significant digits to POW_PRECISION + [28, 41], i.e. there will be a
          // minimum of 28 guard digits retained. (Using + 1.5 would give [9, 21] guard digits.)


          k = POW_PRECISION ? mathceil(POW_PRECISION / LOG_BASE + 2) : 0;
          y = new BigNumber(ONE);

          for (;;) {
            if (i % 2) {
              y = y.times(x);
              if (!y.c) break;
              if (k && y.c.length > k) y.c.length = k;
            }

            i = mathfloor(i / 2);
            if (!i) break;
            x = x.times(x);
            if (k && x.c && x.c.length > k) x.c.length = k;
          }

          if (n < 0) y = ONE.div(y);
          return k ? round(y, POW_PRECISION, ROUNDING_MODE) : y;
        };
        /*
         * Return a string representing the value of this BigNumber rounded to sd significant digits
         * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
         * necessary to represent the integer part of the value in fixed-point notation, then use
         * exponential notation.
         *
         * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
         * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
         *
         * 'toPrecision() precision not an integer: {sd}'
         * 'toPrecision() precision out of range: {sd}'
         * 'toPrecision() rounding mode not an integer: {rm}'
         * 'toPrecision() rounding mode out of range: {rm}'
         */


        P.toPrecision = function (sd, rm) {
          return format(this, sd != null && isValidInt(sd, 1, MAX, 24, 'precision') ? sd | 0 : null, rm, 24);
        };
        /*
         * Return a string representing the value of this BigNumber in base b, or base 10 if b is
         * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
         * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
         * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
         * TO_EXP_NEG, return exponential notation.
         *
         * [b] {number} Integer, 2 to 64 inclusive.
         *
         * 'toString() base not an integer: {b}'
         * 'toString() base out of range: {b}'
         */


        P.toString = function (b) {
          var str,
              n = this,
              s = n.s,
              e = n.e; // Infinity or NaN?

          if (e === null) {
            if (s) {
              str = 'Infinity';
              if (s < 0) str = '-' + str;
            } else {
              str = 'NaN';
            }
          } else {
            str = coeffToString(n.c);

            if (b == null || !isValidInt(b, 2, 64, 25, 'base')) {
              str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e);
            } else {
              str = convertBase(toFixedPoint(str, e), b | 0, 10, s);
            }

            if (s < 0 && n.c[0]) str = '-' + str;
          }

          return str;
        };
        /*
         * Return a new BigNumber whose value is the value of this BigNumber truncated to a whole
         * number.
         */


        P.truncated = P.trunc = function () {
          return round(new BigNumber(this), this.e + 1, 1);
        };
        /*
         * Return as toString, but do not accept a base argument.
         */


        P.valueOf = P.toJSON = function () {
          return this.toString();
        }; // Aliases for BigDecimal methods.
        //P.add = P.plus;         // P.add included above
        //P.subtract = P.minus;   // P.sub included above
        //P.multiply = P.times;   // P.mul included above
        //P.divide = P.div;
        //P.remainder = P.mod;
        //P.compareTo = P.cmp;
        //P.negate = P.neg;


        if (configObj != null) BigNumber.config(configObj);
        return BigNumber;
      } // PRIVATE HELPER FUNCTIONS


      function bitFloor(n) {
        var i = n | 0;
        return n > 0 || n === i ? i : i - 1;
      } // Return a coefficient array as a string of base 10 digits.


      function coeffToString(a) {
        var s,
            z,
            i = 1,
            j = a.length,
            r = a[0] + '';

        for (; i < j;) {
          s = a[i++] + '';
          z = LOG_BASE - s.length;

          for (; z--; s = '0' + s) {
            ;
          }

          r += s;
        } // Determine trailing zeros.


        for (j = r.length; r.charCodeAt(--j) === 48;) {
          ;
        }

        return r.slice(0, j + 1 || 1);
      } // Compare the value of BigNumbers x and y.


      function compare(x, y) {
        var a,
            b,
            xc = x.c,
            yc = y.c,
            i = x.s,
            j = y.s,
            k = x.e,
            l = y.e; // Either NaN?

        if (!i || !j) return null;
        a = xc && !xc[0];
        b = yc && !yc[0]; // Either zero?

        if (a || b) return a ? b ? 0 : -j : i; // Signs differ?

        if (i != j) return i;
        a = i < 0;
        b = k == l; // Either Infinity?

        if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1; // Compare exponents.

        if (!b) return k > l ^ a ? 1 : -1;
        j = (k = xc.length) < (l = yc.length) ? k : l; // Compare digit by digit.

        for (i = 0; i < j; i++) {
          if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
        } // Compare lengths.


        return k == l ? 0 : k > l ^ a ? 1 : -1;
      }
      /*
       * Return true if n is a valid number in range, otherwise false.
       * Use for argument validation when ERRORS is false.
       * Note: parseInt('1e+1') == 1 but parseFloat('1e+1') == 10.
       */


      function intValidatorNoErrors(n, min, max) {
        return (n = truncate(n)) >= min && n <= max;
      }

      function isArray(obj) {
        return Object.prototype.toString.call(obj) == '[object Array]';
      }
      /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. convertBase('255', 10, 16) returns [15, 15].
       * Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
       */


      function toBaseOut(str, baseIn, baseOut) {
        var j,
            arr = [0],
            arrL,
            i = 0,
            len = str.length;

        for (; i < len;) {
          for (arrL = arr.length; arrL--; arr[arrL] *= baseIn) {
            ;
          }

          arr[j = 0] += ALPHABET.indexOf(str.charAt(i++));

          for (; j < arr.length; j++) {
            if (arr[j] > baseOut - 1) {
              if (arr[j + 1] == null) arr[j + 1] = 0;
              arr[j + 1] += arr[j] / baseOut | 0;
              arr[j] %= baseOut;
            }
          }
        }

        return arr.reverse();
      }

      function toExponential(str, e) {
        return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) + (e < 0 ? 'e' : 'e+') + e;
      }

      function toFixedPoint(str, e) {
        var len, z; // Negative exponent?

        if (e < 0) {
          // Prepend zeros.
          for (z = '0.'; ++e; z += '0') {
            ;
          }

          str = z + str; // Positive exponent
        } else {
          len = str.length; // Append zeros.

          if (++e > len) {
            for (z = '0', e -= len; --e; z += '0') {
              ;
            }

            str += z;
          } else if (e < len) {
            str = str.slice(0, e) + '.' + str.slice(e);
          }
        }

        return str;
      }

      function truncate(n) {
        n = parseFloat(n);
        return n < 0 ? mathceil(n) : mathfloor(n);
      } // EXPORT


      BigNumber = another(); // AMD.

      if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return BigNumber;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // Node and other environments that support module.exports.
      } else {}
    })(this);
    /***/

  },

  /***/
  "./node_modules/web3-cypher/node_modules/utf8/utf8.js":
  /*!************************************************************!*\
    !*** ./node_modules/web3-cypher/node_modules/utf8/utf8.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWeb3CypherNode_modulesUtf8Utf8Js(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (module, global) {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      /*! https://mths.be/utf8js v2.1.2 by @mathias */


      ;

      (function (root) {
        // Detect free variables `exports`
        var freeExports = true && exports; // Detect free variable `module`

        var freeModule = true && module && module.exports == freeExports && module; // Detect free variable `global`, from Node.js or Browserified code,
        // and use it as `root`

        var freeGlobal = typeof global == 'object' && global;

        if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
          root = freeGlobal;
        }
        /*--------------------------------------------------------------------------*/


        var stringFromCharCode = String.fromCharCode; // Taken from https://mths.be/punycode

        function ucs2decode(string) {
          var output = [];
          var counter = 0;
          var length = string.length;
          var value;
          var extra;

          while (counter < length) {
            value = string.charCodeAt(counter++);

            if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
              // high surrogate, and there is a next character
              extra = string.charCodeAt(counter++);

              if ((extra & 0xFC00) == 0xDC00) {
                // low surrogate
                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
              } else {
                // unmatched surrogate; only append this code unit, in case the next
                // code unit is the high surrogate of a surrogate pair
                output.push(value);
                counter--;
              }
            } else {
              output.push(value);
            }
          }

          return output;
        } // Taken from https://mths.be/punycode


        function ucs2encode(array) {
          var length = array.length;
          var index = -1;
          var value;
          var output = '';

          while (++index < length) {
            value = array[index];

            if (value > 0xFFFF) {
              value -= 0x10000;
              output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
              value = 0xDC00 | value & 0x3FF;
            }

            output += stringFromCharCode(value);
          }

          return output;
        }

        function checkScalarValue(codePoint) {
          if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
            throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
          }
        }
        /*--------------------------------------------------------------------------*/


        function createByte(codePoint, shift) {
          return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
        }

        function encodeCodePoint(codePoint) {
          if ((codePoint & 0xFFFFFF80) == 0) {
            // 1-byte sequence
            return stringFromCharCode(codePoint);
          }

          var symbol = '';

          if ((codePoint & 0xFFFFF800) == 0) {
            // 2-byte sequence
            symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
          } else if ((codePoint & 0xFFFF0000) == 0) {
            // 3-byte sequence
            checkScalarValue(codePoint);
            symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
            symbol += createByte(codePoint, 6);
          } else if ((codePoint & 0xFFE00000) == 0) {
            // 4-byte sequence
            symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
            symbol += createByte(codePoint, 12);
            symbol += createByte(codePoint, 6);
          }

          symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
          return symbol;
        }

        function utf8encode(string) {
          var codePoints = ucs2decode(string);
          var length = codePoints.length;
          var index = -1;
          var codePoint;
          var byteString = '';

          while (++index < length) {
            codePoint = codePoints[index];
            byteString += encodeCodePoint(codePoint);
          }

          return byteString;
        }
        /*--------------------------------------------------------------------------*/


        function readContinuationByte() {
          if (byteIndex >= byteCount) {
            throw Error('Invalid byte index');
          }

          var continuationByte = byteArray[byteIndex] & 0xFF;
          byteIndex++;

          if ((continuationByte & 0xC0) == 0x80) {
            return continuationByte & 0x3F;
          } // If we end up here, it’s not a continuation byte


          throw Error('Invalid continuation byte');
        }

        function decodeSymbol() {
          var byte1;
          var byte2;
          var byte3;
          var byte4;
          var codePoint;

          if (byteIndex > byteCount) {
            throw Error('Invalid byte index');
          }

          if (byteIndex == byteCount) {
            return false;
          } // Read first byte


          byte1 = byteArray[byteIndex] & 0xFF;
          byteIndex++; // 1-byte sequence (no continuation bytes)

          if ((byte1 & 0x80) == 0) {
            return byte1;
          } // 2-byte sequence


          if ((byte1 & 0xE0) == 0xC0) {
            byte2 = readContinuationByte();
            codePoint = (byte1 & 0x1F) << 6 | byte2;

            if (codePoint >= 0x80) {
              return codePoint;
            } else {
              throw Error('Invalid continuation byte');
            }
          } // 3-byte sequence (may include unpaired surrogates)


          if ((byte1 & 0xF0) == 0xE0) {
            byte2 = readContinuationByte();
            byte3 = readContinuationByte();
            codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;

            if (codePoint >= 0x0800) {
              checkScalarValue(codePoint);
              return codePoint;
            } else {
              throw Error('Invalid continuation byte');
            }
          } // 4-byte sequence


          if ((byte1 & 0xF8) == 0xF0) {
            byte2 = readContinuationByte();
            byte3 = readContinuationByte();
            byte4 = readContinuationByte();
            codePoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;

            if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
              return codePoint;
            }
          }

          throw Error('Invalid UTF-8 detected');
        }

        var byteArray;
        var byteCount;
        var byteIndex;

        function utf8decode(byteString) {
          byteArray = ucs2decode(byteString);
          byteCount = byteArray.length;
          byteIndex = 0;
          var codePoints = [];
          var tmp;

          while ((tmp = decodeSymbol()) !== false) {
            codePoints.push(tmp);
          }

          return ucs2encode(codePoints);
        }
        /*--------------------------------------------------------------------------*/


        var utf8 = {
          'version': '2.1.2',
          'encode': utf8encode,
          'decode': utf8decode
        }; // Some AMD build optimizers, like r.js, check for specific condition patterns
        // like the following:

        if (true) {
          !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return utf8;
          }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
          var key, hasOwnProperty, object;
        }
      })(this);
      /* WEBPACK VAR INJECTION */

    }).call(this, __webpack_require__(
    /*! ./../../../webpack/buildin/module.js */
    "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(
    /*! ./../../../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"));
    /***/
  },

  /***/
  "./node_modules/xhr2/lib/browser.js":
  /*!******************************************!*\
    !*** ./node_modules/xhr2/lib/browser.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesXhr2LibBrowserJs(module, exports) {
    module.exports = XMLHttpRequest;
    /***/
  },

  /***/
  "./src/app/pipes/add-cph-ellipsis/add-cph-ellipsis.pipe.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pipes/add-cph-ellipsis/add-cph-ellipsis.pipe.ts ***!
    \*****************************************************************/

  /*! exports provided: AddCphEllipsisPipe */

  /***/
  function srcAppPipesAddCphEllipsisAddCphEllipsisPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCphEllipsisPipe", function () {
      return AddCphEllipsisPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddCphEllipsisPipe =
    /*#__PURE__*/
    function () {
      function AddCphEllipsisPipe() {
        _classCallCheck(this, AddCphEllipsisPipe);
      }

      _createClass(AddCphEllipsisPipe, [{
        key: "transform",
        value: function transform(value) {
          console.log(value);

          if (!value) {
            return '';
          }

          value = value.replace('0x', '');
          return 'CPH' + value.slice(0, 8) + '...' + value.slice(-8);
        }
      }]);

      return AddCphEllipsisPipe;
    }();

    AddCphEllipsisPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'addCphEllipsis'
    })], AddCphEllipsisPipe);
    /***/
  },

  /***/
  "./src/app/pipes/coin-display/coin-display.pipe.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pipes/coin-display/coin-display.pipe.ts ***!
    \*********************************************************/

  /*! exports provided: CoinDisplayPipe */

  /***/
  function srcAppPipesCoinDisplayCoinDisplayPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoinDisplayPipe", function () {
      return CoinDisplayPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CoinDisplayPipe =
    /*#__PURE__*/
    function () {
      function CoinDisplayPipe() {
        _classCallCheck(this, CoinDisplayPipe);
      }

      _createClass(CoinDisplayPipe, [{
        key: "transform",
        value: function transform(value) {
          value = +value;
          var interger = Math.floor(value);
          var fraction = Math.floor(value * 10000) % 10000;
          var f = ('0000' + fraction).slice(-4);
          console.log(value, interger, fraction, f);
          return interger + '.' + f;
        }
      }]);

      return CoinDisplayPipe;
    }();

    CoinDisplayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'coinDisplay'
    })], CoinDisplayPipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _add_cph_ellipsis_add_cph_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./add-cph-ellipsis/add-cph-ellipsis.pipe */
    "./src/app/pipes/add-cph-ellipsis/add-cph-ellipsis.pipe.ts");
    /* harmony import */


    var _coin_display_coin_display_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./coin-display/coin-display.pipe */
    "./src/app/pipes/coin-display/coin-display.pipe.ts");
    /* harmony import */


    var _time_display_time_display_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./time-display/time-display.pipe */
    "./src/app/pipes/time-display/time-display.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_cph_ellipsis_add_cph_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_2__["AddCphEllipsisPipe"], _coin_display_coin_display_pipe__WEBPACK_IMPORTED_MODULE_3__["CoinDisplayPipe"], _time_display_time_display_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeDisplayPipe"]],
      imports: [],
      exports: [_add_cph_ellipsis_add_cph_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_2__["AddCphEllipsisPipe"], _coin_display_coin_display_pipe__WEBPACK_IMPORTED_MODULE_3__["CoinDisplayPipe"], _time_display_time_display_pipe__WEBPACK_IMPORTED_MODULE_4__["TimeDisplayPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/pipes/time-display/time-display.pipe.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pipes/time-display/time-display.pipe.ts ***!
    \*********************************************************/

  /*! exports provided: TimeDisplayPipe */

  /***/
  function srcAppPipesTimeDisplayTimeDisplayPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeDisplayPipe", function () {
      return TimeDisplayPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TimeDisplayPipe =
    /*#__PURE__*/
    function () {
      function TimeDisplayPipe() {
        _classCallCheck(this, TimeDisplayPipe);
      }

      _createClass(TimeDisplayPipe, [{
        key: "transform",
        value: function transform(value) {
          if (!value) {
            value = Date.now();
          }

          var time = new Date(value);
          var year = time.getFullYear();
          var date = ('00' + time.getDate()).slice(-2);
          var month = ('00' + (time.getMonth() + 1)).slice(-2);
          var hour = ('00' + time.getHours()).slice(-2);
          var minute = ('00' + time.getMinutes()).slice(-2);
          var second = ('00' + time.getSeconds()).slice(-2);
          return [year, month, date].join('.') + ' ' + [hour, minute, second].join(':');
        }
      }]);

      return TimeDisplayPipe;
    }();

    TimeDisplayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'timeDisplay'
    })], TimeDisplayPipe);
    /***/
  },

  /***/
  "./src/app/providers/web3/web3.service.ts":
  /*!************************************************!*\
    !*** ./src/app/providers/web3/web3.service.ts ***!
    \************************************************/

  /*! exports provided: Web3Service */

  /***/
  function srcAppProvidersWeb3Web3ServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */


    (function (Buffer) {
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "Web3Service", function () {
        return Web3Service;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var web3_cypher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! web3-cypher */
      "./node_modules/web3-cypher/index.js");
      /* harmony import */


      var web3_cypher__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/
      __webpack_require__.n(web3_cypher__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var sha_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sha.js */
      "./node_modules/sha.js/index.js");
      /* harmony import */


      var sha_js__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/
      __webpack_require__.n(sha_js__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ethereumjs-tx */
      "./node_modules/ethereumjs-tx/dist/index.js");
      /* harmony import */


      var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_5___default =
      /*#__PURE__*/
      __webpack_require__.n(ethereumjs_tx__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _global_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../global/global.service */
      "./src/app/providers/global/global.service.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts"); // import { Buffer } from 'safe-buffer';
      // import * as Secp from 'secp256k1';


      var Web3Service =
      /*#__PURE__*/
      function () {
        function Web3Service(http, global) {
          var _this2 = this;

          _classCallCheck(this, Web3Service);

          this.http = http;
          this.global = global;
          this.web3 = new web3_cypher__WEBPACK_IMPORTED_MODULE_2__(new web3_cypher__WEBPACK_IMPORTED_MODULE_2__["providers"].HttpProvider(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].cypherium.provider));
          this.http.get('assets/json/pledge.abi.json').subscribe(function (abi) {
            console.log("abi文件加载成功" + JSON.stringify(abi)); // this.pledgeContract = this.web3.cph.contract(abi).at(environment.cypherium.pledgeContractAddr);

            _this2.pledgeContract = new _this2.web3.cph.contract(abi, _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].cypherium.pledgeContractAddr);
            return _this2.pledgeContract;
          });
        }

        _createClass(Web3Service, [{
          key: "isCphAddr",
          value: function isCphAddr(addr) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (addr) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", -1);

                    case 2:
                      addr = addr.toLowerCase();

                      if (addr.startsWith('cph')) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return", -2);

                    case 5:
                      _context.next = 7;
                      return this.web3.isAddress('0x' + addr.slice(3));

                    case 7:
                      result = _context.sent;
                      return _context.abrupt("return", result ? 0 : -2);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getBlockHeight",
          value: function getBlockHeight() {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2() {
              var height;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.web3.cph.txBlockNumber;

                    case 2:
                      height = _context2.sent;
                      return _context2.abrupt("return", height);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getKeyBlockHeight",
          value: function getKeyBlockHeight() {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3() {
              var height;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.web3.cph.keyBlockNumber;

                    case 2:
                      height = _context3.sent;
                      return _context3.abrupt("return", height);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "initContract",
          value: function initContract(name, abi, addr) {
            if (this[name]) {
              return this[name];
            } else {
              this[name] = new this.web3.cph.contract(abi, addr);
              console.log("合约初始化成功:", name, addr);
              return this[name];
            }
          }
        }, {
          key: "getCphBalance",
          value: function getCphBalance(userAddr) {
            var pending = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee4() {
              var value;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log('getCphBalance'); // let valuex = this.web3.cph.keyBlockNumber;
                      // console.log(valuex);
                      // userAddr = '0x55B08041EEA3E359C2C7BAE249E3054EEDB8C3B2';

                      _context4.next = 3;
                      return this.web3.cph.getBalance(userAddr, pending ? 'pending' : 'latest');

                    case 3:
                      value = _context4.sent;
                      console.log("调用参数:-----------------------------------", userAddr, value);
                      console.log("\u94B1\u5305".concat(userAddr, "\u7684\u4F59\u989D\u662F").concat(value));
                      value = this.web3.fromWei(value, 'cpher');
                      return _context4.abrupt("return", value);

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getMortage",
          value: function getMortage(from) {
            var _this3 = this;

            // let value = await this.pledgeContract.methods.mortgageOf(from).call({ from: from });
            // value = this.web3.fromWei(value + "", 'cpher');
            // return value;
            return new Promise(function (resolve, reject) {
              _this3.pledgeContract.methods.mortgageOf(from).call({
                from: from
              }, function (err, result) {
                if (err) {
                  resolve(0);
                } else {
                  console.log("抵押", result);

                  var value = _this3.web3.fromWei(result + "", 'cpher');

                  resolve(value);
                }
              });
            });
          }
        }, {
          key: "pledge",
          value: function pledge(type, from, amount, privateKey, callback) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee5() {
              var gasPrice, params, tx, serializedTx;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      amount = this.web3.toWei(amount + "", 'cpher');
                      _context5.next = 3;
                      return this.web3.cph.getGasPrice();

                    case 3:
                      gasPrice = _context5.sent;

                      if (!gasPrice || gasPrice == '0') {
                        gasPrice = this.web3.toWei(20, 'gwei');
                      }

                      params = type == 'mortgage' ? [from, amount] : [amount];
                      _context5.next = 8;
                      return this.generateCphTx(from, _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].cypherium.pledgeContractAddr, '0x0', gasPrice, privateKey, 'pledgeContract', type, params);

                    case 8:
                      tx = _context5.sent;
                      serializedTx = tx.serialize();
                      this.web3.cph.sendSignedTransaction('0x' + serializedTx.toString('hex'), callback); //调起合约
                      // this.web3.cph.sendSignedTransaction(tx.rawTransaction, callback); //调起合约

                    case 11:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "transferCph",
          value: function transferCph(from, to, value, gasPrice, privateKey, callback) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee6() {
              var tx, serializedTx;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log("\u53D1\u8D77\u8F6C\u8D26----from:".concat(from, ",to:").concat(to, ",value:").concat(value));
                      value = this.web3.toWei(value, 'cpher');
                      gasPrice = this.web3.toWei(gasPrice + "", 'gwei');
                      _context6.next = 5;
                      return this.generateCphTx(from, to, value, gasPrice, privateKey);

                    case 5:
                      tx = _context6.sent;
                      console.log("交易签名：", tx);
                      serializedTx = tx.serialize();
                      this.web3.cph.sendRawTransaction('0x' + serializedTx.toString('hex'), callback); // this.web3.cph.sendSignedTransaction('0x' + serializedTx.toString('hex'), callback); //调起合约
                      // this.web3.cph.sendSignedTransaction(tx.rawTransaction, callback); //调起合约

                    case 9:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "generateCphTx",
          value: function generateCphTx(from, to, value, gasPrice, privateKey) {
            var contractName = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            var funcname = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "";
            var params = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee7() {
              var data, thisobj, nonce, txParams, tx, p, k;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      data = "";

                      if (params) {
                        thisobj = this[contractName].methods[funcname]; //从目标合约对象中提取函数

                        data = thisobj.apply(thisobj, params).encodeABI(); //将参数封装成合约参数形式
                      } // var nonce = await this.web3.cph.getTransactionCount('0x' + from, 'pending'); //获取用户钱包地址的nonce


                      _context7.next = 4;
                      return this.web3.cph.getTransactionCount('0x' + from);

                    case 4:
                      nonce = _context7.sent;
                      //获取用户钱包地址的nonce
                      console.log("Nonce为" + nonce); // let gasLimit = await this.web3.cph.estimateGas({
                      //     "from": '0x'+from,
                      //     "nonce": nonce,
                      //     "to": to,
                      //     "data": data
                      // })
                      // let chainId = await this.web3.cph.net.getId();
                      // console.log("chainId:", chainId);

                      txParams = {
                        version: '0x122',
                        senderKey: '0x' + privateKey.substring(64, 128),
                        from: from,
                        nonce: nonce,
                        // gas: this.convert10to16(gasLimit),
                        gasLimit: '0x271000',
                        gasPrice: this.convert10to16(gasPrice),
                        to: to,
                        data: data,
                        value: this.convert10to16(value) // chainId: chainId

                      };
                      console.log("转账参数：" + JSON.stringify(txParams)); // return this.web3.cph.accounts.signTransaction(txParams, privateKey);

                      tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_5__["Transaction"](txParams, {// chain: "cphnet"
                      }); // let privateKeyBuffer = Buffer.from(privateKey, 'hex');
                      // tx.sign(privateKeyBuffer);

                      p = new Uint8Array(this._hexStringToBytes(privateKey));
                      k = new Uint8Array(this._hexStringToBytes(privateKey.substring(64, 128)));
                      tx.signWith25519(p, k);
                      return _context7.abrupt("return", tx);

                    case 13:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getTxDetail",
          value: function getTxDetail(tx) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee8() {
              var result;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.web3.cph.getTransaction(tx);

                    case 2:
                      result = _context8.sent;
                      result.value = this.web3.fromWei(result.value, 'cpher');
                      result.gasPrice = this.web3.fromWei(result.gasPrice, 'cpher');
                      return _context8.abrupt("return", result);

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "computeSha256Hash",
          value: function computeSha256Hash(str) {
            var sha256 = sha_js__WEBPACK_IMPORTED_MODULE_3__('sha256');
            var msgHash = sha256.update(str, 'utf8').digest('hex');
            return msgHash;
          }
        }, {
          key: "strToBase64",
          value: function strToBase64(str) {
            var strBase64 = new Buffer(str, "hex").toString('base64');
            return strBase64;
          }
        }, {
          key: "base64ToStr",
          value: function base64ToStr(base64) {
            var str = new Buffer(base64, "base64").toString("hex");
            return str;
          }
        }, {
          key: "strToBuffer",
          value: function strToBuffer(str, type) {
            console.log(str + '即将转成buffer对象');

            if (type === 'hex') {
              return Buffer.from(str, 'hex');
            } else {
              return Buffer.from(str);
            }
          }
        }, {
          key: "floatMultiple",
          value: function floatMultiple(f1, f2) {
            var m1 = new this.web3.BigNumber(f1),
                m2 = new this.web3.BigNumber(f2);
            return m1.mul(m2);
          }
        }, {
          key: "bufferToStr",
          value: function bufferToStr(buf, type) {
            if (type) {
              return buf.toString(type);
            } else {
              return buf.toString();
            }
          }
        }, {
          key: "convert10to16",
          value: function convert10to16(n) {
            if (typeof n !== 'string') {
              n = n.toString();
            }

            if (n.startsWith('0x')) {
              return n;
            }

            return this.web3.toHex(n);
          }
        }, {
          key: "_hexStringToBytes",
          value: function _hexStringToBytes(hexStr) {
            var result = [];

            while (hexStr.length >= 2) {
              result.push(parseInt(hexStr.substring(0, 2), 16));
              hexStr = hexStr.substring(2, hexStr.length);
            }

            return result;
          }
        }, {
          key: "_bytesToHexString",
          value: function _bytesToHexString(byteArray) {
            return Array.prototype.map.call(byteArray, function (byte) {
              return ('0' + (byte & 0xFF).toString(16)).slice(-2);
            }).join('');
          }
        }]);

        return Web3Service;
      }();

      Web3Service.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _global_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]
        }];
      };

      Web3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _global_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]])], Web3Service);
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../../../../node_modules/buffer/index.js */
    "./node_modules/buffer/index.js").Buffer);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-cph-send-cph-send-module~pages-tabs-pledge-pledge-module~pages-tabs-wallet-wallet-modu~b845ac84-es5.js.map