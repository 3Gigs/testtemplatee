import {hello} from "./other";
import BdAPi from "@bandagedbd/bdapi"

class TemplatePlugin {
   start() {
      hello();
   }
   stop() {}

   load() {}
   observer() {}
}

module.exports = TemplatePlugin
