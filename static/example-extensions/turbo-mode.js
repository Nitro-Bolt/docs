(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Turbo Mode example must run unsandboxed');
  }
  const vm = Scratch.vm;

  class TurboMode {
    getInfo() {
      return {
        id: 'turbomodeunsandboxed',
        name: 'Turbo Mode',
        blocks: [
          {
            opcode: 'set',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set turbo mode to [ENABLED]',
            arguments: {
              ENABLED: {
                type: Scratch.ArgumentType.STRING,
                menu: 'ENABLED_MENU'
              }
            }
          }
        ],
        menus: {
          ENABLED_MENU: {
            acceptReporters: true,
            items: ['on', 'off']
          }
        }
      };
    }
    set(args) {
      vm.setTurboMode(args.ENABLED === 'on');
    }
  }
  Scratch.extensions.register(new TurboMode());
})(Scratch);