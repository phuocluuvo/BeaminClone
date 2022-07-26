import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import category from "./category";
import restuarant from "./restaurant";
import dish from "./dish";
import feature from "./feature";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([restuarant, dish, category, feature]),
});
