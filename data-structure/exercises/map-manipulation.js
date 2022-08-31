const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
    ]);
console.log(gameEvents);


gTime = [...gameEvents.keys()]
gEvent = [...gameEvents.values()];
eventsSet = new Set(gEvent);
events = [...eventsSet]

gameEvents.delete(64);

for (const [min, event] of gameEvents) {
    const time = min <=45 ? 'FIRST' : 'SECOND'
    console.log(`[${time} HALF] ${min} : ${event}`);
}

