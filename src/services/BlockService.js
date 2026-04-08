const json = require("../assets/objects/blocks.json");

export class blockService {
  blocks = [];

  constructor() {
    this.blocks = json.blocks;
  }

  getAllBlocks() {
    return this.blocks;
  }

  getAllFacetOfGroup(group) {
    return this.blocks.filter((facet) => facet.facet === group);
  }

  getByUid(uid) {
    return this.blocks.find((facet) => facet.uid === uid);
  }


  getSpecificFacetsOfGroups(facets, groups) {
    let facetGroups = [];

    facets.forEach((facetUid) => {
      let facet = this.getByUid(facetUid);

      groups.forEach((group) => {
        if (facet.facet === group) {
          facetGroups.push(facet);
        }
      });
    });
    return facetGroups;
  }

  convertListForNavigation(list) {
    const navigationList = [];
    list.forEach((facet) => {
      navigationList.push({
        uid: facet.uid,
        name: facet.name,
        description: facet.description,
         imageName: facet?.imageName,
         facet: facet.facet,
         possibleNumberPatterns: 0,
         chosen: false,
      });
    });
    return navigationList;
  }


}
