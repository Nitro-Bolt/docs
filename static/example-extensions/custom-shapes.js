(function (Scratch) {
  "use strict";

  Scratch.BlockShapes.register("nbArrow", {
    edgeWidth: (totalHeight) => Math.min(totalHeight / 2, 32),
    leftEdge: (steps, w, halfStraight) => {
      steps.push(`l ${-w} ${-w}`);
      if (halfStraight > 0) steps.push("v", -halfStraight * 2);
      steps.push(`l ${w} ${-w}`);
    },
    rightEdge: (steps, w, halfStraight) => {
      steps.push(`h ${w}`);
      steps.push(`l ${-w} ${w}`);
      if (halfStraight > 0) steps.push("v", halfStraight * 2);
      steps.push(`l ${w} ${w}`);
    },
    padding: () => {
      return 25;
    }
  });

  Scratch.BlockShapes.register("nbArrowNoleft", {
    edgeWidth: (totalHeight) => Math.min(totalHeight / 2, 32),
    leftEdge: (steps, w, halfStraight) => {
      steps.push(`h ${-w}`);
      steps.push(`l ${w} ${-w}`);
      if (halfStraight > 0) steps.push("v", -halfStraight * 2);
      steps.push(`l ${-w} ${-w}`);
    },
    padding: () => {
      return 25;
    }
  });

  Scratch.BlockShapes.register("nbArrowPadding", {
    edgeWidth: (totalHeight) => Math.min(totalHeight / 2, 32),
    leftEdge: (steps, w, halfStraight) => {
      steps.push(`l ${-w} ${-w}`);
      if (halfStraight > 0) steps.push("v", -halfStraight * 2);
      steps.push(`l ${w} ${-w}`);
    },
    rightEdge: (steps, w, halfStraight) => {
      steps.push(`h ${w}`);
      steps.push(`l ${-w} ${w}`);
      if (halfStraight > 0) steps.push("v", halfStraight * 2);
      steps.push(`l ${w} ${w}`);
    },
    padding: () => {
      return { left: 15, right: 50 };
    }
  });

  class CustomShapesDemo {
    getInfo() {
      return {
        id: "customShapesDemo",
        name: "Custom Shapes Demo",
        useUnsandboxedRuntime: true,
        color1: "#9966FF",
        color2: "#5c8dd6",
        color3: "#4dc3cb",
        blocks: [
          {
            opcode: "reporter",
            blockType: Scratch.BlockType.REPORTER,
            text: "im a reporter",
            blockShape: "nbArrow"
          },
          {
            opcode: "dual",
            blockType: Scratch.BlockType.COMMAND,
            dualType: Scratch.BlockType.REPORTER,
            text: "im a dual",
            blockShape: "nbArrow"
          },
          {
            opcode: "reporterNoleft",
            blockType: Scratch.BlockType.REPORTER,
            text: "im a reporter (no left)",
            blockShape: "nbArrowNoleft"
          },
          {
            opcode: "dualNoLeft",
            blockType: Scratch.BlockType.COMMAND,
            dualType: Scratch.BlockType.REPORTER,
            text: "im a dual (no left)",
            blockShape: "nbArrowNoleft"
          },
          {
            opcode: "reporterLR",
            blockType: Scratch.BlockType.REPORTER,
            text: "im a reporter (l&r padding)",
            blockShape: "nbArrowPadding"
          },
          {
            opcode: "dualLR",
            blockType: Scratch.BlockType.COMMAND,
            dualType: Scratch.BlockType.REPORTER,
            text: "im a dual (l&r padding)",
            blockShape: "nbArrowPadding"
          },
        ],
      };
    }
  }

  Scratch.extensions.register(new CustomShapesDemo());
})(Scratch);
