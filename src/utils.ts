import {
  BigInt,
  ByteArray
} from "@graphprotocol/graph-ts";


export function concat(a: ByteArray, b: ByteArray): ByteArray {
  let out = new Uint8Array(a.length + b.length);
  for (let i = 0; i < a.length; i++) {
    out[i] = a[i];
  }
  for (let j = 0; j < b.length; j++) {
    out[a.length + j] = b[j];
  }
  return out as ByteArray;
}

export const zero256 =
  "0x0000000000000000000000000000000000000000000000000000000000000000";

export function isZero(num: BigInt): boolean {
  for (let i = 0; i < num.length; i++) {
    if (num[i] != 0) {
      return false;
    }
  }
  return true;
}

export function equals(a: BigInt, b: BigInt): boolean {
  if (a.length != b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      return false;
    }
  }
  return true;
}

export function addition(a: BigInt, b: BigInt): BigInt {
  let first = a.toI32();
  let second = b.toI32();
  let total = first + second;
  return total as BigInt;
}
