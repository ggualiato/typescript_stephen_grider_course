import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const company = new Company();
const user = new User();
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
