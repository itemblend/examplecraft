import { world } from "@minecraft/server";
import { __itemFireResistenceId_0x0000 as _iFRId_0 } from "lib/ibs/database_items.js";



world.afterEvents.entitySpawn.subscribe((ibs_fire_resistence_e) => {

	const itemEntity = ibs_fire_resistence_e.entity;
	if (itemEntity.typeId == "minecraft:item") {
		const ItemComponent = itemEntity.getComponent("item");
		let itemId = ItemComponent.itemStack.typeId;
		if (_iFRId_0.includes(itemId)) {
			itemEntity.triggerEvent("ibs:luisR.no_fire_damage");
		};
	};
});
