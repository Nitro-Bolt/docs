class Branches {
  getInfo() {
    return {
      id: "branchesexample",
      name: "Branches",
      blocks: [
        {
          opcode: "branch",
          blockType: Scratch.BlockType.CONDITIONAL,
          text: ["hello", "neighbor"],
          branchCount: 1
        }
      ]
    };
  }

  branch(args, util) {
    // this runs the code inside of a branch
    util.startBranch(
      1, /* the number of the branch */
      false /* is it going to loop? */
    );
  }
}
Scratch.extensions.register(new Branches());