class ExtraBlockTypes {
  getInfo() {
    return {
      id: "extrablocktypesexample",
      name: "Extra Block Types",
      blocks: [
        {
          blockType: Scratch.BlockType.LABEL,
          text: "My custom label!"
        },
        {
          blockType: Scratch.BlockType.LABEL,
          text: "I like labels 😀"
        },
        {
          blockType: Scratch.BlockType.BUTTON,
          func: "myButton",
          text: "Click me!"
        },
        {
          blockType: Scratch.BlockType.XML,
          xml: `
          <block type="motion_turnright">
            <value name="DEGREES">
              <shadow type="math_angle">
                <field name="NUM">15</field>
              </shadow>
            </value>
          </block>`
        }
      ]
    };
  }

  myButton() {
    alert("Button clicked!");
  }
}
Scratch.extensions.register(new ExtraBlockTypes());
