import { system, world } from "@minecraft/server";
console.warn("build 5 carregado")
let debugOn = false;
const lastStep = new Map();

world.afterEvents.itemUse.subscribe((ev) => {
  if (ev.itemStack.typeId !== "minecraft:stick") return;
  debugOn = !debugOn;
  ev.source.sendMessage(`debug alpha: ${debugOn ? "ON" : "OFF"}`);

  if (!debugOn) {
    for (const player of world.getPlayers()) {
      player.onScreenDisplay.setActionBar("a0");
    }
    lastStep.clear();
  }
});

system.runInterval(() => {
  if (!debugOn) return;

  const value = (Math.sin(system.currentTick * 0.05) + 1) / 2;
  const step = Math.round(value * 20);

  for (const player of world.getPlayers()) {
    if (lastStep.get(player.id) === step) continue;
    lastStep.set(player.id, step);
    player.onScreenDisplay.setActionBar(`a${step}`);
  }
}, 1);
