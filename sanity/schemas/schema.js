import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import appfunction from "./function";
import category from "./category";
import restuarant from "./restaurant";
import dish from "./dish";
import feature from "./feature";

import extraDish from "./extraDish";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    restuarant,
    dish,
    category,
    feature,
    appfunction,
    extraDish,
  ]),
});
