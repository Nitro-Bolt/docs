class DependentDropdowns {
  getInfo() {
    return {
      id: "dependentdropdownsexample",
      name: "Dependent Dropdowns",
      blocks: [
        {
          opcode: "describeAnimal",
          blockType: Scratch.BlockType.REPORTER,
          text: "[ANIMAL] breed [BREED]",
          arguments: {
            ANIMAL: {
              type: Scratch.ArgumentType.STRING,
              menu: "ANIMAL_MENU",
              defaultValue: "cat"
            },
            BREED: {
              type: Scratch.ArgumentType.STRING,
              menu: "BREED_MENU",
              defaultValue: "Tabby"
            }
          }
        },
        {
          opcode: "describeAnimalCoat",
          blockType: Scratch.BlockType.REPORTER,
          text: "[ANIMAL] breed [BREED] with [COAT] coat",
          arguments: {
            ANIMAL: {
              type: Scratch.ArgumentType.STRING,
              menu: "ANIMAL_MENU",
              defaultValue: "cat"
            },
            BREED: {
              type: Scratch.ArgumentType.STRING,
              menu: "BREED_MENU",
              defaultValue: "Tabby"
            },
            COAT: {
              type: Scratch.ArgumentType.STRING,
              menu: "COAT_MENU",
              defaultValue: "short"
            }
          }
        }
      ],
      menus: {
        ANIMAL_MENU: {
          items: ["cat", "dog"]
        },
        BREED_MENU: {
          parentName: "ANIMAL",
          optionMapping: {
            cat: ["Siamese", "Tabby"],
            dog: ["Beagle", "Poodle"]
          },
          defaultOptions: ["unknown"]
        },
        COAT_MENU: {
          parentName: "BREED",
          optionMapping: {
            Siamese: ["short"],
            Tabby: ["short", "long"],
            Beagle: ["smooth", "rough"],
            Poodle: ["curly", "corded"]
          },
          defaultOptions: ["unknown"]
        }
      }
    };
  }

  describeAnimal(args) {
    return `${args.ANIMAL}: ${args.BREED}`;
  }

  describeAnimalCoat(args) {
    return `${args.ANIMAL}: ${args.BREED} with a ${args.COAT} coat`;
  }
}

Scratch.extensions.register(new DependentDropdowns());
