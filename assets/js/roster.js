function slugify(value){
  return value.toLowerCase()
              .replace(/&/g, "and")
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");
}

const roster={
launch:[
{n:"Superman",r:"V",ps:"Brawl",
 primary:{name:"Heat Vision Beam",desc:"Sustained laser sweep, hold to drag across multiple enemies."},
 secondary:{name:"Freeze Breath",desc:"Short cone of freezing air that slows and briefly roots enemies."},
 abilities:[
  {name:"Super Leap",type:"Mobility",desc:"Vault to a target location, landing with a shockwave that staggers nearby enemies."},
  {name:"Steel Grip",type:"Melee",desc:"Grab a nearby enemy and hurl them into terrain or other foes."},
  {name:"Solar Charge",type:"Dash",desc:"Fly forward in a powerful clothesline, knocking enemies airborne on hit."},
  {name:"Invulnerability Stance",type:"Defense",desc:"Brief window of massively reduced damage intake. Cannot attack during this period."},
 ],
 passives:[
  {name:"Man of Steel",desc:"Damage below 20% of max health per hit is negated entirely."},
  {name:"Solar Empowered",desc:"Gain increasing ability damage the longer the match goes on, representing solar charge."},
 ],
 ultimate:{name:"World's Greatest Hero",desc:"Rockets into the stratosphere, then dive-bombs a target zone creating a massive crater shockwave that launches all enemies in range."},
 teamups:[
  {partners:"Wonder Woman",name:"Justice League Founders",desc:"Combined ground pound creates a dual shockwave, knocking enemies twice as far."},
  {partners:"Supergirl",name:"House of El",desc:"Both Kryptonians gain bonus movement speed and 15% amplified damage while within range of each other."},
 ]},

{n:"Wonder Woman",r:"V",ps:"Brawl",
 primary:{name:"Lasso of Truth",desc:"Whip strikes that tether the last enemy hit, dealing bonus damage on follow-up attacks."},
 secondary:{name:"Shield Bash",desc:"Short-range shield slam that staggers enemies and briefly opens them to bonus damage."},
 abilities:[
  {name:"Bracers Deflect",type:"Defense",desc:"Raise bracers to reflect all incoming projectiles for a brief window. Reflected shots deal bonus damage."},
  {name:"Lasso Pull",type:"Control",desc:"Yank a tethered enemy toward you, slamming them into the ground at your feet."},
  {name:"Divine Charge",type:"Dash",desc:"Sprint forward with shield raised, knocking back all enemies in your path."},
  {name:"Aegis Wall",type:"Defense",desc:"Plant your shield to create a temporary team barrier, blocking all incoming projectiles."},
 ],
 passives:[
  {name:"Blessed of the Gods",desc:"Healing received is amplified by 20%."},
  {name:"Amazon Warrior",desc:"Each successfully blocked attack charges a counter-strike that deals bonus damage on next hit."},
 ],
 ultimate:{name:"Godkiller",desc:"Empowered divine state — gains flight, lasso range doubles, and all attacks deal bonus divine damage for the duration."},
 teamups:[
  {partners:"Superman",name:"Justice League Founders",desc:"Combined ground pound creates a dual shockwave, knocking enemies twice as far."},
  {partners:"Hawkgirl",name:"Winged Warriors",desc:"Both gain a shared armor buff while airborne. Diving simultaneously triggers a combined shockwave."},
 ]},

{n:"Aquaman",r:"V",ps:"Brawl",
 primary:{name:"Trident Slash",desc:"Three-hit melee combo with the trident, each hit building a tide meter."},
 secondary:{name:"Trident Throw",desc:"Hurl the trident for ranged damage. It automatically returns, damaging enemies twice."},
 abilities:[
  {name:"Tidal Wave",type:"Control",desc:"Summon a surging wave that pushes all enemies back and leaves a slick water trail."},
  {name:"Trench Calling",type:"Summon",desc:"Summon a Trench creature to lunge at a target enemy, rooting them briefly."},
  {name:"Atlantean Leap",type:"Mobility",desc:"Powered high jump that crashes down with a massive slam on landing."},
  {name:"King's Command",type:"Control",desc:"Roar of the ocean king, briefly stunning all nearby enemies."},
 ],
 passives:[
  {name:"King of Seven Seas",desc:"Moves 20% faster on wet terrain created by abilities or map elements."},
  {name:"Atlantean Durability",desc:"Gains bonus armor when below 50% health."},
 ],
 ultimate:{name:"The Trench",desc:"Calls down a catastrophic ocean surge that floods the immediate area, sweeping all enemies into a cluster and dealing massive sustained damage."},
 teamups:[
  {partners:"Wonder Woman",name:"Ancient Powers",desc:"Shared magic resistance buff. Tidal Wave and Divine Charge trigger simultaneously in a combined push."},
  {partners:"Black Manta",name:"Atlantis Nemesis",desc:"Black Manta deals bonus damage to Aquaman but also grants him a fury stack, increasing Aquaman's damage when Manta is nearby."},
 ]},

{n:"Cyborg",r:"V",ps:"Anti-Dive",
 primary:{name:"Sonic Cannon",desc:"Rapid-fire energy blasts from his arm cannon, accurate at medium range."},
 secondary:{name:"EMP Burst",desc:"Short-range detonation that disrupts enemy abilities mid-use and cancels dashes."},
 abilities:[
  {name:"Targeting System",desc:"Lock onto an enemy — all shots against them auto-track briefly and deal bonus damage.",type:"Buff"},
  {name:"Boom Tube Dash",desc:"Short-range teleport dash in any direction, leaving a shockwave at the exit point.",type:"Mobility"},
  {name:"Tech Shield",desc:"Deploy an energy barrier in front of you, absorbing incoming damage for allies behind it.",type:"Defense"},
  {name:"System Override",desc:"Hack a nearby enemy robot or tech-based character, disabling one of their abilities for a few seconds.",type:"Control"},
 ],
 passives:[
  {name:"Self-Repair Protocols",desc:"Slowly regenerates health when not taking damage for 3 seconds."},
  {name:"Mother Box Link",desc:"Detects and marks nearby cloaked or invisible enemies on the team's HUD."},
 ],
 ultimate:{name:"Cyberlink Assault",desc:"Upgrades all weapon systems simultaneously — rapid-fires full arsenal of sonic cannon, missiles, and EMP in a sustained barrage for several seconds."},
 teamups:[
  {partners:"Batman",name:"World's Finest Tech",desc:"Shared targeting system — both players see enemy cooldown timers overlaid on screen."},
  {partners:"Starfire",name:"Original Titans",desc:"Both gain a small healing aura when within close range of each other."},
 ]},

{n:"Shazam",r:"V",ps:"Brawl",
 primary:{name:"Lightning Strike",desc:"Ranged lightning bolt that chains to a second nearby enemy."},
 secondary:{name:"Magic Fist",desc:"Close-range charged punch releasing a burst of magical energy on impact."},
 abilities:[
  {name:"Solomon's Wisdom",desc:"Brief ability haste — all cooldowns reduce faster for self and nearby allies.",type:"Buff"},
  {name:"Achilles' Invulnerability",desc:"Short window of complete damage immunity. Cannot be CCd during this period.",type:"Defense"},
  {name:"Atlas' Strength",desc:"An empowered punch that launches enemies across the map.",type:"Melee"},
  {name:"Mercury's Speed",desc:"Brief sprint burst allowing you to phase through enemies and ignore collision.",type:"Mobility"},
 ],
 passives:[
  {name:"Champion of Magic",desc:"All magic-type abilities deal 15% bonus damage."},
  {name:"Billy's Heart",desc:"Respawn with ability cooldowns already partially regenerated."},
 ],
 ultimate:{name:"SHAZAM!",desc:"Calls down a devastating thunderbolt at a target location that chains electricity to all enemies in range, dealing massive damage."},
 teamups:[
  {partners:"Black Adam",name:"Ancient Magic Rivals",desc:"Both get empowered lightning attacks. Hitting the same enemy simultaneously triggers a massive combined discharge."},
  {partners:"Superman",name:"Big Blue Brotherhood",desc:"Shazam gains bonus physical resistance while near Superman, and Superman gains bonus magic resistance."},
 ]},

{n:"Martian Manhunter",r:"V",ps:"Anti-Dive",
 primary:{name:"Martian Blast",desc:"Ranged telepathic energy projectiles that slightly slow enemies on hit."},
 secondary:{name:"Mind Probe",desc:"Targeted ability that briefly reveals an enemy's remaining ability cooldowns to your team."},
 abilities:[
  {name:"Phase Shift",desc:"Become temporarily intangible — enemy attacks pass through you entirely.",type:"Defense"},
  {name:"Shape-Shift",desc:"Compress form to become a smaller, harder-to-hit target with increased movement speed.",type:"Mobility"},
  {name:"Telepathic Grasp",desc:"Immobilize a nearby enemy briefly with a mental vice grip.",type:"Control"},
  {name:"Martian Vision",desc:"Sustained heat/x-ray beam dealing significant damage at range.",type:"Ranged"},
 ],
 passives:[
  {name:"Alien Physiology",desc:"Immune to poison, gas, and environmental damage effects."},
  {name:"Telepathic Link",desc:"Passively senses nearby cloaked or invisible enemies, marking them faintly."},
 ],
 ultimate:{name:"Psychic Assault",desc:"Unleashes a massive mental wave, briefly reversing the movement controls of all nearby enemies."},
 teamups:[
  {partners:"Superman",name:"Last of Their Kind",desc:"Both gain bonus resistances against crowd control effects."},
  {partners:"Doctor Fate",name:"Mind and Mystic",desc:"Combined psychic-magic barrier — shared shield appears when both characters are near each other."},
 ]},

{n:"Darkseid",r:"V",ps:"Zone Control",
 primary:{name:"Omega Beams",desc:"Tracking energy beams that automatically curve toward targeted enemies."},
 secondary:{name:"Anti-Life Fist",desc:"Devastating close-range punch with significant knockback."},
 abilities:[
  {name:"Omega Sanction",desc:"Mark a target — Omega Beams bounce back from walls and pursue them relentlessly for a duration.",type:"Debuff"},
  {name:"Apokolips Stomp",desc:"Ground slam sending a shockwave radially outward, staggering all nearby enemies.",type:"Melee"},
  {name:"Gravity Pull",desc:"Drag all enemies within range toward Darkseid, setting up combos.",type:"Control"},
  {name:"Dark God's Presence",desc:"Radiate an aura of dread — nearby enemies briefly flee in fear, their damage reduced.",type:"Control"},
 ],
 passives:[
  {name:"Dark God",desc:"Immune to crowd control effects that would affect characters below a health threshold."},
  {name:"Ruler of Apokolips",desc:"A Parademon minion spawns near Darkseid periodically, harassing enemies."},
 ],
 ultimate:{name:"Anti-Life Equation",desc:"Briefly broadcasts the Anti-Life Equation, suppressing ALL enemy abilities in a massive radius — enemies can only move and use basic attacks during the duration."},
 teamups:[
  {partners:"Lex Luthor",name:"Villains United",desc:"Both gain a shared power drain effect — hitting enemies reduces their damage output temporarily."},
  {partners:"Eclipso",name:"Anti-Life Corruption",desc:"Eclipso's corruption zones are amplified, and Darkseid's Omega Beams apply corruption stacks on hit."},
 ]},

{n:"Bane",r:"V",ps:"Brawl",
 primary:{name:"Crushing Blow",desc:"Three-hit fist combo, each hit dealing increasing damage."},
 secondary:{name:"Venom Injection",desc:"Self-buff — briefly increases size, damage, and health regeneration at the cost of reduced speed."},
 abilities:[
  {name:"Body Slam",desc:"Grab a nearby enemy and slam them into the ground, dealing AoE damage on impact.",type:"Melee"},
  {name:"Venom Surge",desc:"Rush forward with a shoulder charge, knocking enemies aside.",type:"Dash"},
  {name:"Chokehold",desc:"Lock an enemy in a crushing grip, dealing sustained damage until they escape or you release.",type:"Control"},
  {name:"Bone Breaker",desc:"Targeted strike that temporarily reduces the enemy's maximum health.",type:"Debuff"},
 ],
 passives:[
  {name:"Venom Physiology",desc:"Each hit generates a Venom stack — at 5 stacks, next attack deals massively amplified damage."},
  {name:"Prisoner's Resolve",desc:"Health regeneration activates while Venom Injection is active."},
 ],
 ultimate:{name:"Breaking the Bat",desc:"Grabs the nearest high-health enemy and performs the iconic backbreaker — stunning them, halving their current health, and dealing massive damage."},
 teamups:[
  {partners:"Darkseid",name:"Apokolips Brute",desc:"Bane's Venom Injection also generates Parademon reinforcements during Darkseid's passive window."},
  {partners:"Deathstroke",name:"Mercenary Alliance",desc:"Both gain armor penetration when targeting the same marked enemy."},
 ]},

{n:"Batman",r:"D",ps:"Dive",
 primary:{name:"Batarang",desc:"Thrown projectile that ricochets off walls. Charge to increase ricochet count and damage."},
 secondary:{name:"Grapple Strike",desc:"Fire grapple toward an enemy to pull yourself to them, punching on arrival."},
 abilities:[
  {name:"Smoke Bomb",desc:"Deploy a blinding smoke cloud, causing all enemies within it to lose track of allies.",type:"Utility"},
  {name:"Explosive Gel",desc:"Plant on any surface and detonate remotely, dealing AoE damage.",type:"Trap"},
  {name:"Cape Glide",desc:"Controlled glide between elevated positions, resetting your aerial options.",type:"Mobility"},
  {name:"Detective Mode",desc:"Brief scan revealing all enemy health and active cooldowns to your team.",type:"Intel"},
 ],
 passives:[
  {name:"World's Greatest Detective",desc:"Always sees enemy health bars, even through walls at short range."},
  {name:"Dark Knight",desc:"Taking damage below 30% health triggers a brief defensive bonus and resets grapple cooldown."},
 ],
 ultimate:{name:"Batswarm",desc:"Releases a massive swarm of bats across the battlefield, disorienting all enemies for several seconds and dealing rapid tick damage."},
 teamups:[
  {partners:"Nightwing",name:"Dynamic Duo",desc:"Combined ultimate unlocked — Batman's Batswarm and Nightwing's Flying Graysons trigger simultaneously for a joint assault."},
  {partners:"Catwoman",name:"Gotham Entanglement",desc:"Both gain extended stealth duration after eliminations when within close range."},
 ]},

{n:"The Flash",r:"D",ps:"Dive",
 primary:{name:"Speed Force Punch",desc:"Rapid multi-hit combo — the longer the combo chain, the faster each hit becomes."},
 secondary:{name:"Thunderclap",desc:"Clap hands together to create a shockwave that staggers enemies at range."},
 abilities:[
  {name:"Infinite Mass Punch",desc:"Charge a single devastating strike — the longer the charge, the more damage and knockback.",type:"Melee"},
  {name:"Speed Force Vortex",desc:"Spin in place creating a pulling tornado that draws enemies inward.",type:"Control"},
  {name:"Time Remnant",desc:"Leave an afterimage decoy for a few seconds — enemies targeting it are wasting damage.",type:"Utility"},
  {name:"Vibration Phase",desc:"Phase through obstacles and enemy attacks for a brief window.",type:"Defense"},
 ],
 passives:[
  {name:"Speed Force Connection",desc:"Movement speed increases as current health decreases."},
  {name:"Lightning Trail",desc:"Sprinting leaves a damaging electricity trail for enemies who chase you."},
 ],
 ultimate:{name:"Flashpoint",desc:"Reverses his personal timeline — restores own health to its state from 5 seconds ago and fully resets all ability cooldowns."},
 teamups:[
  {partners:"Reverse Flash",name:"Speed Force Paradox",desc:"Both speedsters enter a temporary hyper-speed state when within range — attacks and movement are amplified for a brief window."},
  {partners:"Cyborg",name:"JLA Tech Sync",desc:"Cyborg's targeting system passively applies to all of Flash's attacks while active."},
 ]},

{n:"Green Arrow",r:"D",ps:"Poke",
 primary:{name:"Standard Arrow",desc:"Quick accurate shot with a standard broadhead — reliable medium-range damage."},
 secondary:{name:"Charged Arrow",desc:"Hold to charge for a high-velocity headshot that penetrates armor."},
 abilities:[
  {name:"Explosive Arrow",desc:"Arrow that detonates on impact with an AoE burst.",type:"Explosive"},
  {name:"Net Arrow",desc:"Traps an enemy in a restraining net, rooting them briefly.",type:"Control"},
  {name:"Cryo Arrow",desc:"Freezes a target or creates an ice patch that slows enemies passing through.",type:"Control"},
  {name:"Boxing Glove Arrow",desc:"Knocks a target back significantly — absurd but devastatingly effective for repositioning enemies.",type:"Utility"},
 ],
 passives:[
  {name:"Trick Quiver",desc:"Arrow type automatically cycles between abilities, reducing cooldown on non-used types."},
  {name:"Emerald Archer",desc:"Gain bonus headshot damage when stationary for over 1 second."},
 ],
 ultimate:{name:"Rain of Arrows",desc:"Fires a massive volley of every arrow type simultaneously across a wide area — explosive, net, cryo, and standard all at once."},
 teamups:[
  {partners:"Black Canary",name:"Star City Sweethearts",desc:"When both attack the same target, Canary Cry range extends to include the arrow's impact zone."},
  {partners:"Deadshot",name:"Marksmen Alliance",desc:"Both gain a shared accuracy aura — headshots recharge each other's primary cooldowns."},
 ]},

{n:"Black Canary",r:"D",ps:"Brawl",
 primary:{name:"Sonic Strike",desc:"Rapid martial arts combo charged with sonic vibration on each hit."},
 secondary:{name:"Canary Cry Burst",desc:"Short-range directional sonic blast that interrupts enemy ability use."},
 abilities:[
  {name:"Flying Kick",desc:"Leap kick that launches enemies airborne.",type:"Melee"},
  {name:"Canary Cry Wave",desc:"Wider sustained sonic beam that pushes enemies back continuously.",type:"Control"},
  {name:"Judo Throw",desc:"Grab and throw a nearby enemy over your shoulder.",type:"Melee"},
  {name:"Disrupting Screech",desc:"Targeted sonic pulse that cancels the next ability an enemy uses.",type:"Counter"},
 ],
 passives:[
  {name:"Metahuman Vocalist",desc:"Canary Cry charges faster with each successful melee hit."},
  {name:"Street Fighter",desc:"Bonus damage against enemies at above 75% health — punishes tanks who don't expect a duelist to threaten them."},
 ],
 ultimate:{name:"Full Canary Cry",desc:"Sustained maximum-power scream that pushes all enemies back, shatters all shields and barriers, and deals massive damage to anyone caught in the cone."},
 teamups:[
  {partners:"Green Arrow",name:"Star City Sweethearts",desc:"When both attack the same target, Canary Cry range extends to include the arrow's impact zone."},
  {partners:"Zatanna",name:"Justice League Dark",desc:"Sound and magic combine — Canary Cry temporarily amplifies the radius of Zatanna's next cast ability."},
 ]},

{n:"Nightwing",r:"D",ps:"Dive",
 primary:{name:"Escrima Blitz",desc:"Rapid dual escrima stick combo that builds a charge meter for an electrified strike."},
 secondary:{name:"Wing Ding",desc:"Thrown disc projectile that bounces between up to two enemies."},
 abilities:[
  {name:"Grayson Flip",desc:"Acrobatic vault over an enemy, repositioning behind them and briefly disorienting them.",type:"Mobility"},
  {name:"Zip Takedown",desc:"Grapple to an enemy from range and slam them into the ground.",type:"Dive"},
  {name:"Shock Sticks",desc:"Charge escrima with electricity — next combo hit chain-stuns the target.",type:"Buff"},
  {name:"Aerial Assault",desc:"Drop from above on multiple enemies, hitting each one with an escrima blow.",type:"AoE"},
 ],
 passives:[
  {name:"Acrobat",desc:"Immune to fall damage. Airborne movement speed is increased."},
  {name:"Former Robin",desc:"Nearby Batman allies gain 10% damage, and vice versa."},
 ],
 ultimate:{name:"Flying Graysons",desc:"Full acrobatic aerial barrage — rapidly hits up to five different enemies in sequence with devastating escrima strikes."},
 teamups:[
  {partners:"Batman",name:"Dynamic Duo",desc:"Combined ultimate unlocked — Batman's Batswarm and Nightwing's Flying Graysons trigger simultaneously."},
  {partners:"Cyborg",name:"Titans Together",desc:"Both gain a brief invulnerability window when the other is eliminated."},
 ]},

{n:"Deathstroke",r:"D",ps:"Flank",
 primary:{name:"Dual Swords",desc:"Close-range slashing combo that alternates between slashes and thrusts."},
 secondary:{name:"Sniper Shot",desc:"Long-range precision rifle shot. Can be fired immediately after a sword combo for a mix-up."},
 abilities:[
  {name:"Enhanced Reflexes",desc:"Brief window to automatically deflect or dodge incoming fire.",type:"Defense"},
  {name:"Bladestorm",desc:"Spinning sword attack hitting all enemies around you.",type:"Melee"},
  {name:"Tactical Retreat",desc:"Fast backward dash to break engage range.",type:"Mobility"},
  {name:"Death Mark",desc:"Mark a target — all damage dealt to them is increased for a duration.",type:"Debuff"},
 ],
 passives:[
  {name:"Enhanced Physiology",desc:"Can see through smoke, darkness, and disorienting visual effects."},
  {name:"Master Tactician",desc:"Eliminating a marked target resets Tactical Retreat cooldown immediately."},
 ],
 ultimate:{name:"Terminator Protocol",desc:"Enters a brief enhanced combat state — alternates rapid sword strikes and precise gunshots at extreme speed, targeting the highest-threat enemy."},
 teamups:[
  {partners:"Bane",name:"Mercenary Alliance",desc:"Both gain armor penetration when targeting the same marked enemy."},
  {partners:"Ra's al Ghul",name:"Master Assassins",desc:"Both gain bonus damage from behind — flanking the same target amplifies each other's strikes."},
 ]},

{n:"Harley Quinn",r:"D",ps:"Flank",
 primary:{name:"Mallet Swing",desc:"Wide overhead slam with her giant mallet — slow but devastating."},
 secondary:{name:"Pop Guns",desc:"Dual pistol rapid fire, excellent for pressuring enemies while retreating."},
 abilities:[
  {name:"Hyena Release",desc:"Summon Bud or Lou to lunge at and distract a nearby enemy.",type:"Summon"},
  {name:"Confetti Bomb",desc:"Thrown party explosive with AoE — because why not.",type:"Explosive"},
  {name:"Acrobatic Cartwheel",desc:"Rapid evasive repositioning with a moment of intangibility mid-flip.",type:"Mobility"},
  {name:"Pie to the Face",desc:"Short-range stun that blinds the target briefly.",type:"Control"},
 ],
 passives:[
  {name:"Chaos Theory",desc:"Abilities have a small random chance of triggering a bonus effect each use."},
  {name:"Puddin's Protege",desc:"Bonus damage specifically against Batman."},
 ],
 ultimate:{name:"Hammer Time",desc:"Jumps high and crashes down with her giant mallet, creating a massive shockwave that launches all nearby enemies into the air."},
 teamups:[
  {partners:"Joker",name:"Clown Royalty",desc:"Combined chaos field — both characters' Chaos Theory passive triggers twice as often."},
  {partners:"Poison Ivy",name:"Gotham's Sirens",desc:"Both gain bonus movement speed and Ivy's briar patches briefly root enemies when Harley is nearby."},
 ]},

{n:"Deadshot",r:"D",ps:"Poke",
 primary:{name:"Wrist Cannons",desc:"Rapid accurate shots from both wrist-mounted cannons."},
 secondary:{name:"Sniper Mode",desc:"ADS for a precise long-range shot with high bonus damage on headshots."},
 abilities:[
  {name:"Target Acquisition",desc:"Mark an enemy — bullets auto-track the target and deal increased damage.",type:"Buff"},
  {name:"Jetpack Dash",desc:"Brief airborne repositioning using his jetpack.",type:"Mobility"},
  {name:"Armor-Piercing Round",desc:"Single shot that ignores all damage reduction effects.",type:"Ranged"},
  {name:"Suppressing Fire",desc:"Rapid burst that slows enemy movement and interrupts their ability use.",type:"Control"},
 ],
 passives:[
  {name:"World's Greatest Marksman",desc:"Headshots deal 40% bonus damage."},
  {name:"Suicide Squad Veteran",desc:"Ability cooldowns partially reset on elimination."},
 ],
 ultimate:{name:"Deadshot's Dozen",desc:"Simultaneously fires a volley of lethal rounds at every currently marked target. If no marks are active, auto-marks all visible enemies first."},
 teamups:[
  {partners:"Deathstroke",name:"Contract Killers",desc:"When both target the same enemy, that target is briefly silenced — unable to use abilities."},
  {partners:"Green Arrow",name:"Marksmen Alliance",desc:"Both gain a shared accuracy aura — headshots recharge each other's primary cooldowns."},
 ]},

{n:"Green Lantern",r:"D",ps:"Poke",
 primary:{name:"Power Ring Blast",desc:"Hard-light energy projectile fired from the ring."},
 secondary:{name:"Construct Shield",desc:"Place a temporary hard-light barrier at any location."},
 abilities:[
  {name:"Jet Construct",desc:"Summon a hard-light fighter jet for a rapid airborne repositioning pass.",type:"Mobility"},
  {name:"Giant Fist",desc:"Manifest a massive construct fist covering a wide horizontal area.",type:"Melee"},
  {name:"Snare Construct",desc:"Trap an enemy in a hard-light cage, rooting them in place.",type:"Control"},
  {name:"Battering Ram",desc:"Charge forward with a construct ram, knocking enemies aside.",type:"Dash"},
 ],
 passives:[
  {name:"Willpower",desc:"Ability power increases as current health decreases."},
  {name:"Test Pilot",desc:"Aerial movement speed is increased and aerial abilities have reduced cooldown."},
 ],
 ultimate:{name:"Emerald Knight",desc:"Creates a massive construct weapon platform — fires multiple construct projectiles simultaneously across a wide area for the duration."},
 teamups:[
  {partners:"Sinestro",name:"Rivals of Will",desc:"Competing constructs — both get amplified construct damage when targeting the same enemy. Enemies caught between both constructs take bonus damage."},
  {partners:"The Flash",name:"JLA Vanguard",desc:"Flash can ride GL's constructs as platforms, gaining additional aerial dive angles."},
 ]},

{n:"Zatanna",r:"D",ps:"Anti-Dive",
 primary:{name:"Spell Bolts",desc:"Rapid magic projectiles — each one curves slightly toward targets."},
 secondary:{name:"Reversal Hex",desc:"Redirect one incoming projectile back toward its source."},
 abilities:[
  {name:"Backward Spell",desc:"Signature cast ability — effect changes each use: bind, levitate, or transform depending on cast timing.",type:"Control"},
  {name:"Rabbit from Hat",desc:"Summon a decoy at location to distract enemies.",type:"Utility"},
  {name:"Levitation",desc:"Float upward, dodging all ground-level effects and abilities.",type:"Mobility"},
  {name:"Chains of Fate",desc:"Bind a target in magical chains, rooting them and reducing their damage output.",type:"Control"},
 ],
 passives:[
  {name:"Homo Magi",desc:"Immune to all magic-based debuff effects."},
  {name:"Stage Presence",desc:"Nearby allies gain a small ability power bonus."},
 ],
 ultimate:{name:"ERIF",desc:"Casts FIRE backwards — a massive magical fire explosion erupts at the target location, covering a huge radius and leaving a burning field."},
 teamups:[
  {partners:"Doctor Fate",name:"Sorcerers Supreme",desc:"Combined magical ward — a passive shield appears on the nearest ally whenever both cast abilities within 2 seconds of each other."},
  {partners:"John Constantine",name:"Justice League Dark",desc:"Constantine's curses and Zatanna's binds stack together, doubling their duration on affected enemies."},
 ]},

{n:"Black Adam",r:"D",ps:"Dive",
 primary:{name:"Lightning Bolt",desc:"Ranged lightning projectile that chains to a second enemy on hit."},
 secondary:{name:"Divine Punch",desc:"Charged close-range fist strike releasing magical energy on impact."},
 abilities:[
  {name:"Flight Dive",desc:"Aerial dash that crashes into a target from above.",type:"Dive"},
  {name:"Black Lightning Aura",desc:"Electrify his body — any enemy who attacks him in melee takes reflected lightning damage.",type:"Defense"},
  {name:"Kahndaq's Wrath",desc:"Ground slam sending a radial electric shockwave outward.",type:"AoE"},
  {name:"SHAZAM Counter",desc:"Shout the magic word — reduces all cooldowns instantly and briefly shifts into a counter stance.",type:"Buff"},
 ],
 passives:[
  {name:"Champion of the Gods",desc:"Bonus magic resistance from all sources."},
  {name:"Conqueror",desc:"Gains a stacking damage bonus for each enemy eliminated nearby."},
 ],
 ultimate:{name:"Wrath of Kahndaq",desc:"Sustained aerial assault — rains continuous lightning strikes across a wide area for several seconds, each bolt branching to secondary targets."},
 teamups:[
  {partners:"Shazam",name:"Ancient Magic Rivals",desc:"Hitting the same enemy simultaneously triggers a massive combined magical lightning discharge, dealing bonus damage to all nearby enemies."},
  {partners:"Darkseid",name:"Power of Gods",desc:"Both gain bonus strength — their grab and slam abilities deal amplified damage."},
 ]},

{n:"Hawkgirl",r:"D",ps:"Dive",
 primary:{name:"Mace Strike",desc:"Aerial swing combo — damage increases the higher you are when the attack lands."},
 secondary:{name:"Wing Gust",desc:"Close-range wind burst from wings that pushes enemies back."},
 abilities:[
  {name:"Dive Bomb",desc:"Aerial plunge from height, crashing mace-first into a target.",type:"Dive"},
  {name:"Nth Metal Impact",desc:"Charged mace swing that bypasses armor and shields entirely.",type:"Melee"},
  {name:"Talon Grab",desc:"Grab an enemy and carry them airborne briefly before slamming them down.",type:"Control"},
  {name:"Stun Flurry",desc:"Rapid mace hits that build a stagger bar on the target.",type:"Melee"},
 ],
 passives:[
  {name:"Nth Metal Mace",desc:"All attacks pierce through barriers and energy shields."},
  {name:"Eternal Warrior",desc:"Each death slightly reduces the next respawn timer, representing centuries of reincarnation."},
 ],
 ultimate:{name:"Hawkstorm",desc:"Spins at full speed creating a vortex of nth-metal energy that pulls all nearby enemies inward and deals continuous damage."},
 teamups:[
  {partners:"Wonder Woman",name:"Winged Warriors",desc:"Both gain a shared armor buff while airborne. Diving simultaneously triggers a combined shockwave."},
  {partners:"Martian Manhunter",name:"Justice League Originals",desc:"Shared team-wide awareness buff — all nearby allies see enemy position outlines briefly."},
 ]},

{n:"Catwoman",r:"D",ps:"Flank",
 primary:{name:"Whip Crack",desc:"Long-range whip strike that can hit multiple enemies in a line."},
 secondary:{name:"Claw Slash",desc:"Close-range multi-hit claw combo with rapid strikes."},
 abilities:[
  {name:"Whip Tether",desc:"Grapple to any surface or enemy using the whip, repositioning instantly.",type:"Mobility"},
  {name:"Cat Burglar",desc:"Brief stealth — become invisible while stationary or while moving slowly.",type:"Stealth"},
  {name:"Acrobatic Dodge",desc:"Very fast evasive roll that briefly makes you intangible.",type:"Defense"},
  {name:"Cat's Eye Goggles",desc:"Activate goggles to reveal hidden traps and stealth enemies nearby.",type:"Intel"},
 ],
 passives:[
  {name:"Nine Lives",desc:"Once per match, automatically survive a lethal hit with 1 HP. Long passive cooldown."},
  {name:"Jewel Thief",desc:"Eliminations reduce all cooldowns by a flat amount."},
 ],
 ultimate:{name:"The Claws Are Out",desc:"Enters an enhanced state — whip range is massively extended and all claw attacks hit multiple targets simultaneously."},
 teamups:[
  {partners:"Batman",name:"Gotham Entanglement",desc:"Both gain extended stealth duration after eliminations when within close range."},
  {partners:"Harley Quinn",name:"Gotham's Sirens",desc:"Catwoman's Nine Lives passive temporarily extends to Harley Quinn as well."},
 ]},

{n:"Doctor Fate",r:"S",ps:"Utility",
 primary:{name:"Ankh Blast",desc:"Homing magic orbs that drift toward the nearest enemy."},
 secondary:{name:"Mystic Shield",desc:"Place a brief magical barrier on a nearby ally, absorbing incoming damage."},
 abilities:[
  {name:"Fate's Judgment",desc:"Redirect a targeted incoming projectile or ability away from an ally.",type:"Counter"},
  {name:"Helmet of Fate",desc:"Grant a nearby ally brief invulnerability.",type:"Buff"},
  {name:"Ancient Curse",desc:"Hex an enemy, reducing their damage output for a duration.",type:"Debuff"},
  {name:"Tower of Fate Portal",desc:"Open a magical portal — allies can pass through it to teleport to a second portal location.",type:"Utility"},
 ],
 passives:[
  {name:"Lord of Order",desc:"All debuffs applied to nearby allies have their duration reduced by 30%."},
  {name:"Nabu's Wisdom",desc:"Passively sees the cooldown state of nearby enemies."},
 ],
 ultimate:{name:"Cosmic Order",desc:"Releases a massive magical pulse that resets ALL cooldowns for every nearby ally simultaneously."},
 teamups:[
  {partners:"Zatanna",name:"Sorcerers Supreme",desc:"Combined magical ward — a passive shield appears on the nearest ally whenever both cast abilities within 2 seconds of each other."},
  {partners:"Martian Manhunter",name:"Mind and Mystic",desc:"Combined psychic-magic barrier — shared shield appears when both characters are near each other."},
 ]},

{n:"Raven",r:"S",ps:"Sustain",
 primary:{name:"Soul-Self Tendrils",desc:"Dark energy ranged attacks extending from her soul-self."},
 secondary:{name:"Empathic Drain",desc:"Drain a small amount of health from a nearby enemy to heal a nearby ally."},
 abilities:[
  {name:"Soul-Self Projection",desc:"Project her dark spirit to damage and disorient enemies in an area.",type:"AoE"},
  {name:"Healing Trance",desc:"Channel to consistently heal all nearby allies over time.",type:"Heal"},
  {name:"Dark Bind",desc:"Shadow tendrils root a target enemy in place.",type:"Control"},
  {name:"Emotion Shield",desc:"Absorb incoming damage directed at an ally, converting it partially to healing.",type:"Defense"},
 ],
 passives:[
  {name:"Empath",desc:"Displays nearby low-health enemies even through walls at short range."},
  {name:"Azarath Metrion Zinthos",desc:"Healing output increases when Raven herself is at low health."},
 ],
 ultimate:{name:"Trigon's Gate",desc:"Summons a demonic energy pillar at a target location — deals massive AoE damage and heals all nearby allies simultaneously."},
 teamups:[
  {partners:"Starfire",name:"Titans' Bond",desc:"Both gain bonus healing output while near each other."},
  {partners:"Eclipso",name:"Masters of Darkness",desc:"Raven's Soul-Self Projection is amplified inside Eclipso's corruption zones."},
 ]},

{n:"Starfire",r:"S",ps:"Sustain",
 primary:{name:"Starbolts",desc:"Rapid-fire Tamaranian energy projectiles."},
 secondary:{name:"Starbolt Beam",desc:"Sustained energy beam dealing continuous damage at range."},
 abilities:[
  {name:"Solar Infusion",desc:"Bathe nearby allies in solar energy, creating a healing field around them briefly.",type:"Heal"},
  {name:"Aerial Blitz",desc:"Flying charge through enemy formations, dealing damage.",type:"Dash"},
  {name:"Star Shield",desc:"Deploy a protective energy bubble around yourself or a nearby ally.",type:"Defense"},
  {name:"Nova Blast",desc:"Ground slam with a radial solar energy burst.",type:"AoE"},
 ],
 passives:[
  {name:"Tamaranian Absorption",desc:"Absorbs a small portion of incoming energy damage, converting it to personal healing."},
  {name:"Princess of Tamaran",desc:"Nearby allies take slightly reduced damage while within her solar aura."},
 ],
 ultimate:{name:"Starfire Nova",desc:"Fires a full-power sustained energy beam sweep, dealing massive damage across a wide arc."},
 teamups:[
  {partners:"Raven",name:"Titans' Bond",desc:"Both gain bonus healing output while near each other."},
  {partners:"Cyborg",name:"Original Titans",desc:"Both gain a small mutual healing aura when within close range of each other."},
 ]},

{n:"Poison Ivy",r:"S",ps:"Zone Control",
 primary:{name:"Vine Whip",desc:"Close/mid-range striking vine that slows enemies on hit."},
 secondary:{name:"Spore Shot",desc:"Ranged toxic projectile that applies a damage-over-time on hit."},
 abilities:[
  {name:"Briar Patch",desc:"Place a zone of thorns that heals allies standing in it and slows enemies.",type:"Zone"},
  {name:"Pheromone Mist",desc:"Deploy a cloud that briefly confuses and disables enemies within it.",type:"Control"},
  {name:"Venus Flytrap",desc:"Summon a large carnivorous plant that grabs and holds a nearby enemy.",type:"Summon"},
  {name:"Photosynthesis",desc:"Channel briefly to regenerate personal health and boost next Briar Patch healing output.",type:"Heal"},
 ],
 passives:[
  {name:"Nature's Defender",desc:"Immune to all poison and nature-based debuffs."},
  {name:"Overgrowth",desc:"Briar Patches expand in size and strength the longer they remain active."},
 ],
 ultimate:{name:"Red in Tooth and Vine",desc:"Massive overgrowth erupts across the entire area — vines burst from the ground rooting all enemies and creating new Briar Patches everywhere."},
 teamups:[
  {partners:"Harley Quinn",name:"Gotham's Sirens",desc:"Harley's Hyena release causes enemies to sprint directly into Ivy's Briar Patches."},
  {partners:"Catwoman",name:"Gotham's Sirens III",desc:"Catwoman's stealth inside a Briar Patch makes her completely invisible until she attacks."},
 ]},

{n:"Booster Gold",r:"S",ps:"Utility",
 primary:{name:"Power Suit Blasts",desc:"Energy shots from his 25th-century gauntlets."},
 secondary:{name:"Force Field Bubble",desc:"Brief personal shield absorbing the next source of incoming damage."},
 abilities:[
  {name:"Time Skip",desc:"Briefly create a temporal decoy of yourself that absorbs one incoming hit.",type:"Defense"},
  {name:"Skeets Drone",desc:"Deploy Skeets to scan ahead, revealing enemy positions and cooldowns.",type:"Intel"},
  {name:"Energy Barrier",desc:"Deploy a team shield at a nearby location.",type:"Defense"},
  {name:"Temporal Assist",desc:"Replay the last two seconds of an ally's health, partially restoring them.",type:"Heal"},
 ],
 passives:[
  {name:"25th Century Tech",desc:"Weapons ignore a portion of enemy armor."},
  {name:"Skeets Link",desc:"Skeets automatically pings low-health allies so Booster can prioritize them."},
 ],
 ultimate:{name:"Time Crisis",desc:"Booster loops himself and nearby allies through a temporal reset — restores everyone's health to its state from 4 seconds ago and clears debuffs."},
 teamups:[
  {partners:"The Flash",name:"Time Heroes",desc:"Flash's Flashpoint ultimate and Booster's Time Crisis can chain — used within 3 seconds of each other, they extend the reset window."},
  {partners:"Mister Miracle",name:"New Age Tech",desc:"Mister Miracle's Boom Tube can be triggered instantly during Booster's Time Skip window."},
 ]},

{n:"John Constantine",r:"S",ps:"Utility",
 primary:{name:"Hellfire Blast",desc:"Occult energy bolts that curse enemies on hit."},
 secondary:{name:"Sigil Trap",desc:"Place a rune trap on the ground — triggers when an enemy walks over it."},
 abilities:[
  {name:"Dark Exorcism",desc:"Instantly remove ALL debuffs from a nearby ally.",type:"Cleanse"},
  {name:"Damnation Curse",desc:"Hex an enemy so their next heal is converted to damage instead.",type:"Debuff"},
  {name:"Demon Summon",desc:"Call a minor demon to harass a target enemy briefly.",type:"Summon"},
  {name:"Sanctuary",desc:"Create a small area where ally ability cooldowns regenerate faster.",type:"Buff"},
 ],
 passives:[
  {name:"Trenchcoat Trick",desc:"Once per match, automatically escape death with a 1-HP survival trick. Very long cooldown."},
  {name:"Occult Knowledge",desc:"Can see through illusions and detect enemy Utility supports through surfaces at short range."},
 ],
 ultimate:{name:"Hellblazer",desc:"Opens a hellmouth at the target location — deals massive sustained damage and grants lifesteal to all allies standing near it for the duration."},
 teamups:[
  {partners:"Zatanna",name:"Justice League Dark",desc:"Constantine's curses and Zatanna's binds stack together, doubling their duration on affected enemies."},
  {partners:"Raven",name:"Darkness Users",desc:"Constantine's Demon Summon and Raven's Soul-Self Projection merge into a larger, more powerful entity."},
 ]},

{n:"Mister Miracle",r:"S",ps:"Utility",
 primary:{name:"Mother Box Pulse",desc:"Energy burst from his Mother Box that disorients enemies briefly on hit."},
 secondary:{name:"Escape Artist Strike",desc:"Evasive strike that repositions you behind the target."},
 abilities:[
  {name:"Boom Tube",desc:"Instantly teleport a nearby ally to safety — places them at a location you designate.",type:"Utility"},
  {name:"Aero Discs",desc:"Fly briefly, repositioning to any visible location.",type:"Mobility"},
  {name:"X-Element Trap",desc:"Plant a restraining device — roots an enemy who steps on it.",type:"Trap"},
  {name:"Anti-Life Barrier",desc:"Deploy a shield on an ally that completely blocks the next ability used against them.",type:"Defense"},
 ],
 passives:[
  {name:"Miracle Escape",desc:"Once per match, automatically escape any stun or root with an instant flash teleport."},
  {name:"New God Tech",desc:"All ability cooldowns reduced by 15% passively."},
 ],
 ultimate:{name:"Motherbox Miracle",desc:"Opens a massive Boom Tube portal — the entire team can teleport to a pre-designated position simultaneously. Creates a powerful engagement or disengagement tool."},
 teamups:[
  {partners:"Booster Gold",name:"New Age Tech",desc:"Mister Miracle's Boom Tube can be triggered instantly during Booster's Time Skip window."},
  {partners:"Darkseid",name:"New Gods",desc:"Mister Miracle's Boom Tube can briefly disorient Darkseid's nearby Parademons if detonated near them — a narrative tension reflected in gameplay."},
 ]},
],

s1:[
{n:"Joker",r:"D",ps:"Flank",
 primary:{name:"Playing Cards",desc:"Thrown razor card projectiles that ricochet off surfaces."},
 secondary:{name:"Pistol Shot",desc:"High-damage revolver shot with a slow fire rate — a deliberate surprise tool."},
 abilities:[
  {name:"Joker Toxin",desc:"Gas grenade causing enemies to laugh uncontrollably, briefly disabling them.",type:"Control"},
  {name:"Trick Flower",desc:"Close-range acid spray disguised as a boutonniere.",type:"Melee"},
  {name:"Explosive Pie",desc:"Thrown explosive with a short fuse.",type:"Explosive"},
  {name:"Wild Card",desc:"Randomly selects one of three bonus effects each activation — damage amp, speed boost, or invisibility.",type:"Random"},
 ],
 passives:[
  {name:"Chaos Incarnate",desc:"Wild Card triggers an additional random bonus effect when used at low health."},
  {name:"Arkham Frequent Flyer",desc:"Respawn timer is 20% shorter than all other characters."},
 ],
 ultimate:{name:"The Last Laugh",desc:"Floods the area with Joker Toxin gas — all enemies laugh uncontrollably, losing movement control briefly while taking rapid tick damage."},
 teamups:[
  {partners:"Harley Quinn",name:"Clown Royalty",desc:"Both characters' Chaos Theory and Wild Card passives trigger twice as often simultaneously."},
  {partners:"Bane",name:"Arkham Alliance",desc:"Joker's Toxin grenade causes enemies to stumble toward Bane's grab range."},
 ]},

{n:"Lex Luthor",r:"V",ps:"Brawl",
 primary:{name:"Kryptonite Cannon",desc:"Energy-kryptonite blasts that deal bonus damage to Kryptonian characters."},
 secondary:{name:"Powered Grab",desc:"Armored fist grab that briefly immobilizes the target."},
 abilities:[
  {name:"Power Armor Strike",desc:"Charged suit punch that staggers enemies and briefly opens them to bonus damage.",type:"Melee"},
  {name:"Tech Drain",desc:"Drain an enemy's next ability, storing that power to boost your own output.",type:"Counter"},
  {name:"Corporate Shield",desc:"Deploy a wide frontal barrier — larger than standard shields.",type:"Defense"},
  {name:"Superman Counter",desc:"Passive stance — while near Superman or other Kryptonians, gain bonus damage and resistance.",type:"Buff"},
 ],
 passives:[
  {name:"Genius Intellect",desc:"Passively sees enemy ability cooldown states at short range."},
  {name:"Warsuit Integrity",desc:"Suit absorbs the first large hit each life, reducing it significantly."},
 ],
 ultimate:{name:"Warsuit Supremacy",desc:"Full warsuit activation — fires massive AoE energy blasts and deploys an impenetrable barrier simultaneously for the duration."},
 teamups:[
  {partners:"Darkseid",name:"Villains United",desc:"Both gain a shared power drain — hitting enemies reduces their damage output temporarily."},
  {partners:"Deathstroke",name:"Corporate Contract",desc:"Deadshot's and Deathstroke's marks combine with Lex's Tech Drain for increased debuff stacking."},
 ]},

{n:"Killer Frost",r:"S",ps:"Anti-Dive",
 primary:{name:"Ice Shards",desc:"Rapid frost projectiles that apply a slow on hit."},
 secondary:{name:"Freeze Breath",desc:"Cone AoE freeze that fully immobilizes enemies caught in it."},
 abilities:[
  {name:"Ice Slide",desc:"Dash forward on an ice trail, leaving a slick surface behind that slows enemies.",type:"Mobility"},
  {name:"Frozen Trap",desc:"Place an ice mine on the ground that detonates on contact.",type:"Trap"},
  {name:"Frost Nova",desc:"Burst of ice radiating from her body, freezing all nearby enemies.",type:"AoE"},
  {name:"Cryo Heal",desc:"Drain heat from nearby enemies to restore her own health.",type:"Heal"},
 ],
 passives:[
  {name:"Absolute Zero",desc:"Slowed enemies take 20% bonus damage from all sources."},
  {name:"Heat Drain",desc:"Gains health whenever she applies a chill or freeze to an enemy."},
 ],
 ultimate:{name:"Ice Age",desc:"A massive blizzard covers the entire immediate area — heavily slowing all enemies and dealing sustained damage to anyone caught in it."},
 teamups:[
  {partners:"Captain Cold",name:"Cold Front",desc:"Both ice abilities combine into a single massive sustained freeze field when used within 2 seconds of each other."},
  {partners:"Poison Ivy",name:"Natural Forces",desc:"Ivy's Briar Patches become frozen, slowing enemies inside them further."},
 ]},

{n:"Sinestro",r:"D",ps:"Poke",
 primary:{name:"Yellow Ring Blast",desc:"Fear-infused energy shots that briefly reduce enemy damage output on hit."},
 secondary:{name:"Fear Construct Shield",desc:"Deploy a brief hard-light barrier."},
 abilities:[
  {name:"Paralyzing Fear",desc:"Targeted ability that freezes an enemy in place as terror takes hold briefly.",type:"Control"},
  {name:"Construct Whip",desc:"Long-range construct whip that pulls enemies toward you.",type:"Control"},
  {name:"Fear Corps Drone",desc:"Summon a yellow construct drone that fires independently.",type:"Summon"},
  {name:"Intimidation",desc:"AoE debuff reducing the damage output of all nearby enemies.",type:"Debuff"},
 ],
 passives:[
  {name:"Power of Fear",desc:"Deals bonus damage to enemies at full health — punishes confident positioning."},
  {name:"Yellow Impurity",desc:"Construct abilities pass through Green Lantern-generated barriers."},
 ],
 ultimate:{name:"Fear Incarnate",desc:"Transforms into a massive construct fear entity — AoE fear CC that roots all nearby enemies and deals heavy damage."},
 teamups:[
  {partners:"Green Lantern",name:"Rivals of Will",desc:"Competing constructs amplify each other — enemies caught between both constructs take bonus damage."},
  {partners:"Lex Luthor",name:"Legion of Doom Founders",desc:"Both gain increased ability uptime — cooldowns reduce faster when standing near each other."},
 ]},
],

s2:[
{n:"Batgirl",r:"S",ps:"Utility",
 primary:{name:"Batarang Volley",desc:"Multiple batarangs thrown simultaneously in a spread pattern."},
 secondary:{name:"Oracle Hack",desc:"Targeted ability that temporarily disables one enemy ability."},
 abilities:[
  {name:"Network Uplink",desc:"Briefly reveal all enemy positions for your entire team.",type:"Intel"},
  {name:"Electric Baton",desc:"Close-range taser strike that stuns the target.",type:"Melee"},
  {name:"Firewall",desc:"Place a digital shield that blocks one incoming ability for an ally.",type:"Defense"},
  {name:"System Breach",desc:"Hack the environment or debuff tech-based enemies, reducing their ability effectiveness.",type:"Debuff"},
 ],
 passives:[
  {name:"Oracle Network",desc:"Allies gain awareness of flanking enemies approaching from off-screen."},
  {name:"Bat-Family Comms",desc:"Nearby Bat-family members gain bonus damage."},
 ],
 ultimate:{name:"Total Blackout",desc:"Shuts down all enemy HUD elements simultaneously — enemies cannot see health, cooldowns, or teammate positions while also revealing all enemy locations to your team."},
 teamups:[
  {partners:"Batman",name:"Bat-Family Network",desc:"Batman's Detective Mode and Batgirl's Network Uplink stack — enemy information is shared for twice the normal duration."},
  {partners:"Nightwing",name:"Gotham Knights",desc:"All three Bat-family members gain a shared passive armor bonus when near each other."},
 ]},

{n:"Huntress",r:"D",ps:"Dive",
 primary:{name:"Crossbow Shot",desc:"Precise bolt attack with high accuracy and moderate damage."},
 secondary:{name:"Explosive Bolt",desc:"Fires a timed explosive round that detonates after a short delay."},
 abilities:[
  {name:"Grapple Dive",desc:"Grapple to a surface then dive down onto an enemy below.",type:"Dive"},
  {name:"Pinning Bolt",desc:"Pin an enemy to a wall or surface, rooting them completely.",type:"Control"},
  {name:"Shadow Step",desc:"Short stealth dash — briefly invisible during the movement.",type:"Mobility"},
  {name:"Helena's Fury",desc:"Rapid crossbow burst at close range — dumps remaining ammunition for burst damage.",type:"Ranged"},
 ],
 passives:[
  {name:"Mafia Blood",desc:"Bonus damage against enemies that have recently attacked your allies."},
  {name:"Relentless",desc:"Health regeneration activates sooner after taking damage than other characters."},
 ],
 ultimate:{name:"Crosshair Protocol",desc:"Simultaneously marks three enemies and fires devastating bolts at each — hitting all three in under a second."},
 teamups:[
  {partners:"Batgirl",name:"Birds of Prey",desc:"Batgirl's Oracle Hack and Huntress's Pinning Bolt chain — hacked enemies can be pinned for double the normal root duration."},
  {partners:"Black Canary",name:"Birds of Prey Trio",desc:"All three Birds gain bonus mobility speed when near each other."},
 ]},

{n:"Black Manta",r:"V",ps:"Zone Control",
 primary:{name:"Plasma Eye-Beams",desc:"Sustained laser blasts from his helmet — highly accurate at range."},
 secondary:{name:"Underwater Torpedo",desc:"Ranged explosive projectile with a slight tracking arc."},
 abilities:[
  {name:"Depth Charge",desc:"Drop an explosive that detonates after a delay — excellent for denying choke points.",type:"Zone"},
  {name:"Manta Suit Charge",desc:"Dash forward with a shoulder tackle, knocking enemies aside.",type:"Dash"},
  {name:"Sonar Disruption",desc:"Disable one enemy ability for a brief window.",type:"Counter"},
  {name:"Thermal Lances",desc:"Deploy dual wrist-mounted energy cutters for a rapid close-range combo.",type:"Melee"},
 ],
 passives:[
  {name:"Sea Predator",desc:"Movement speed increases when targeting wounded enemies."},
  {name:"Atlantis Nemesis",desc:"All abilities deal bonus damage to Aquaman specifically."},
 ],
 ultimate:{name:"Black Manta's Fury",desc:"Takes to the air and rains sustained plasma eye-beam fire across a wide area below, carving paths through enemy formations."},
 teamups:[
  {partners:"Aquaman",name:"Atlantis Nemesis",desc:"Black Manta's presence causes Aquaman to enter a fury state — Aquaman gains bonus damage but Manta gains bonus defense, reflecting their rivalry."},
  {partners:"Deathstroke",name:"Elite Mercenaries",desc:"Both gain bonus damage against marked targets and share marking duration."},
 ]},

{n:"Gorilla Grodd",r:"V",ps:"Brawl",
 primary:{name:"Gorilla Strike",desc:"Powerful fist pounds that shake the ground on heavy hits."},
 secondary:{name:"Psychic Projectile",desc:"Ranged mental blast that briefly stuns on hit."},
 abilities:[
  {name:"Mind Control",desc:"Take over one enemy character briefly — very powerful but long cooldown.",type:"Control"},
  {name:"Gorilla Charge",desc:"Sprint forward and slam through enemy formations.",type:"Dash"},
  {name:"Psychic Fortress",desc:"Mental shield reducing incoming damage and making you immune to CC during it.",type:"Defense"},
  {name:"Evolved Intelligence",desc:"Scan an enemy to reveal their full ability loadout to your team.",type:"Intel"},
 ],
 passives:[
  {name:"Super Gorilla",desc:"Immune to all knockback effects."},
  {name:"Force of Evolution",desc:"Gains a stacking damage bonus for each ability activated."},
 ],
 ultimate:{name:"Gorilla City",desc:"Summons two gorilla minions to assist in combat for a duration, overwhelming enemies with coordinated attacks."},
 teamups:[
  {partners:"Martian Manhunter",name:"Psychic Alliance",desc:"Combined mental assault — Grodd's Mind Control and Manhunter's Psychic Assault can trigger simultaneously, affecting multiple enemies."},
  {partners:"Darkseid",name:"Brute Force",desc:"Both characters' charge attacks deal amplified damage when used within 2 seconds of each other."},
 ]},
],

s3:[
{n:"Reverse Flash",r:"D",ps:"Dive",
 primary:{name:"Negative Speed Strike",desc:"Rapid vibrating fist combo charged with negative speed force energy."},
 secondary:{name:"Speed Mirage",desc:"Briefly create a speed afterimage decoy at current position."},
 abilities:[
  {name:"Negative Speed Dash",desc:"Faster than Flash's dash — can phase through allies and leave a damaging trail.",type:"Mobility"},
  {name:"Time Remnant Strike",desc:"Disappear and reappear behind a target enemy, hitting from behind instantly.",type:"Dive"},
  {name:"Molecular Vibration",desc:"Vibrate hand into an enemy's chest — bypasses armor entirely and deals internal damage.",type:"Melee"},
  {name:"Speed Steal",desc:"Temporarily siphon an enemy's movement speed, slowing them while increasing your own.",type:"Debuff"},
 ],
 passives:[
  {name:"Negative Speed Force",desc:"Generates red lightning on movement — enemies who touch the trail take minor damage."},
  {name:"Thawne's Hatred",desc:"Bonus damage specifically against The Flash."},
 ],
 ultimate:{name:"Flashpoint Paradox",desc:"Sprints through the entire team area at impossible speed, hitting every enemy once and resetting the entire engagement positioning."},
 teamups:[
  {partners:"The Flash",name:"Speed Force Paradox",desc:"Both speedsters enter a hyper-speed state simultaneously — attacks and movement are massively amplified for a brief window."},
  {partners:"Darkseid",name:"Anti-Life Speed",desc:"Reverse Flash can carry Darkseid's Omega Beam lock-on while dashing, extending its range."},
 ]},

{n:"Captain Cold",r:"D",ps:"Anti-Dive",
 primary:{name:"Cold Gun",desc:"Sustained freeze beam — hold to build up a full freeze on the target."},
 secondary:{name:"Ice Floor",desc:"Spray the ground to create a wide slick surface that slows enemies."},
 abilities:[
  {name:"Absolute Zero",desc:"Single-target precision freeze — completely immobilizes one enemy.",type:"Control"},
  {name:"Cryo Wall",desc:"Create an ice barrier that blocks all movement through a corridor.",type:"Zone"},
  {name:"Cold Grenade",desc:"Thrown ice bomb with AoE that applies a significant slow.",type:"Explosive"},
  {name:"Freeze-Lock Shot",desc:"Precision shot that freeze-locks one enemy ability, preventing its use for a duration.",type:"Counter"},
 ],
 passives:[
  {name:"Rogue's Code",desc:"Immune to mind control and confusion effects."},
  {name:"Cold Mastery",desc:"Frozen enemies take bonus damage from all sources, not just Cold's own attacks."},
 ],
 ultimate:{name:"Cold Snap",desc:"Releases a massive wave of freezing cold across the area — freezes all enemies solid briefly and coats the battlefield in ice."},
 teamups:[
  {partners:"Killer Frost",name:"Cold Front",desc:"Both ice abilities combine into a sustained freeze field when used within 2 seconds of each other."},
  {partners:"The Flash",name:"Rogues vs Speedsters",desc:"Captain Cold's freeze slows apply doubly to Flash — but Flash's speed force trail damages Cold slightly more."},
 ]},

{n:"Ra's al Ghul",r:"D",ps:"Brawl",
 primary:{name:"Saber Strikes",desc:"Rapid sword combo — each hit has a small chance to apply a bleed DoT."},
 secondary:{name:"Sword Deflect",desc:"Deflect one incoming projectile with a precisely timed sword parry."},
 abilities:[
  {name:"Lazarus Pit",desc:"Plant a Lazarus Pit charge at location — if eliminated, automatically resurrect there instead of respawning normally.",type:"Utility"},
  {name:"League of Shadows",desc:"Summon two ninja assassins briefly to harass a target enemy.",type:"Summon"},
  {name:"Demon's Head",desc:"An intimidating presence AoE that slows and debuffs nearby enemies.",type:"Control"},
  {name:"Poison Blade",desc:"Next attack applies a powerful poison DoT that bypasses healing briefly.",type:"Debuff"},
 ],
 passives:[
  {name:"Centuries of Combat",desc:"Parries and deflects have a chance to automatically generate a counterattack."},
  {name:"Immortal",desc:"Respawn timer is significantly reduced at all times."},
 ],
 ultimate:{name:"The Demon's Head Awakens",desc:"Enters full assassin mode — movement speed and damage massively increase and all sword strikes apply bleed for the duration."},
 teamups:[
  {partners:"Batman",name:"Eternal Rivals",desc:"Both gain defensive bonuses from each other's presence — narrative tension turned into gameplay armor."},
  {partners:"Deathstroke",name:"Master Assassins",desc:"Both gain bonus damage from behind — flanking the same target amplifies each other's strikes."},
 ]},

{n:"Enchantress",r:"S",ps:"Utility",
 primary:{name:"Dark Hex",desc:"Slow-moving cursed projectiles that apply a magic debuff on hit."},
 secondary:{name:"Possession Dart",desc:"Ranged dart that causes an enemy to briefly stand still."},
 abilities:[
  {name:"Curse Reversal",desc:"Flip an enemy's next activated buff into a debuff instead.",type:"Counter"},
  {name:"Shadow Step",desc:"Teleport a short distance instantly.",type:"Mobility"},
  {name:"Corrupting Whisper",desc:"Reduce one enemy ability's damage or effectiveness for a duration.",type:"Debuff"},
  {name:"Coven Shield",desc:"Place a protective hex on an ally that reduces incoming damage.",type:"Defense"},
 ],
 passives:[
  {name:"June Moon's Struggle",desc:"Randomly alternates between an empowered state and a normal state, creating unpredictable power spikes."},
  {name:"Dark Enchantment",desc:"Debuffs applied to enemies passively spread to one nearby enemy on expiration."},
 ],
 ultimate:{name:"Enchantress Ascendant",desc:"Full power dark transformation — massive AoE dark magic explosion followed by a persistent cursing field that weakens all enemies inside it."},
 teamups:[
  {partners:"Raven",name:"Dark Mystical Sisters",desc:"Raven's Soul-Self Projection is empowered inside Enchantress's cursing field, dealing bonus damage."},
  {partners:"Doctor Fate",name:"Order vs Chaos",desc:"The tension between Order and Chaos buffs both — both characters gain bonus ability output while near each other."},
 ]},
],

s4:[
{n:"Supergirl",r:"D",ps:"Dive",
 primary:{name:"Heat Vision",desc:"Rapid precise laser shots — shorter range than Superman's but faster firing."},
 secondary:{name:"Freeze Breath",desc:"Targeted cone freeze — slightly narrower but faster cooldown than Superman's version."},
 abilities:[
  {name:"Kryptonian Dash",desc:"Faster dash than Superman's Solar Charge — lower cooldown and harder to track.",type:"Mobility"},
  {name:"Solar Flare",desc:"All-direction energy burst from her body, damaging all nearby enemies.",type:"AoE"},
  {name:"Supergirl Spin",desc:"Spinning attack creating a wind vortex that pushes enemies back.",type:"Control"},
  {name:"Rage of Krypton",desc:"Brief personal damage amp — channels the rage of loss into raw offensive power.",type:"Buff"},
 ],
 passives:[
  {name:"Solar Powered",desc:"Ability damage increases in brighter and more open map environments."},
  {name:"Kryptonian Training",desc:"Aerial movement speed is permanently increased above Superman's."},
 ],
 ultimate:{name:"Kryptonian Rage",desc:"Goes fully berserk — massive speed and damage increase for the duration, with every strike creating a shockwave."},
 teamups:[
  {partners:"Superman",name:"House of El",desc:"Both Kryptonians gain bonus movement speed and amplified damage while within range of each other."},
  {partners:"Martian Manhunter",name:"Last Survivors",desc:"Both gain bonus resistance to CC when the other is eliminated, representing grief-fuelled resolve."},
 ]},

{n:"Lobo",r:"V",ps:"Brawl",
 primary:{name:"Hook Chain",desc:"Throw his chain hook to grab and pull enemies toward you."},
 secondary:{name:"Shotgun Blast",desc:"Close-range massive damage shotgun — devastating at point blank."},
 abilities:[
  {name:"Frag Grenades",desc:"Throw multiple explosive grenades in a spread.",type:"Explosive"},
  {name:"Space Hog",desc:"Call in his motorcycle for a brief damaging drive-by pass through enemy lines.",type:"Summon"},
  {name:"Czarnian Healing",desc:"Rapidly regenerate health from any damage — the more damage taken, the faster the regen.",type:"Heal"},
  {name:"Main Man Headbutt",desc:"Grab and headbutt a nearby enemy, dealing massive stagger damage.",type:"Melee"},
 ],
 passives:[
  {name:"Immortal Czarnian",desc:"Respawn timer is reduced by 25%."},
  {name:"Bounty Target",desc:"Gains a bonus damage buff if he eliminates the highest-health enemy on the opposing team."},
 ],
 ultimate:{name:"The Main Man Arrives",desc:"Rides the Space Hog at full speed through the field — anyone in the path is dragged along and slammed into the nearest wall."},
 teamups:[
  {partners:"Deathstroke",name:"Hired Killers",desc:"Both gain bonus damage against the same marked target."},
  {partners:"Bane",name:"Brute Squad",desc:"Both characters become immune to stagger effects while near each other."},
 ]},

{n:"Batwoman",r:"D",ps:"Dive",
 primary:{name:"Batarang Chain",desc:"Multiple linked batarangs thrown in sequence, each hitting a different target."},
 secondary:{name:"Grapple Strike",desc:"Close-range grapple punch that repositions behind the target on hit."},
 abilities:[
  {name:"Crimson Detective",desc:"Scan nearby enemies with status effects — gain bonus damage on next hit against each one.",type:"Intel"},
  {name:"EMP Batarang",desc:"Disables tech-based enemies and interrupts electronic abilities.",type:"Counter"},
  {name:"Red Knight Stance",desc:"Enter a parry stance — automatically counter the next incoming melee attack.",type:"Defense"},
  {name:"Kane Training",desc:"Brief combo that applies status stacks faster than any basic attack chain.",type:"Melee"},
 ],
 passives:[
  {name:"Detective's Eye",desc:"Status-affected enemies take bonus damage from all of her attacks."},
  {name:"Bat-Symbol",desc:"Nearby Bat-family members take 10% reduced damage."},
 ],
 ultimate:{name:"Red Knight Protocol",desc:"Enters an enhanced detection state — all batarangs home in on enemies regardless of aim, and every hit applies a status effect."},
 teamups:[
  {partners:"Batman",name:"Bat-Family",desc:"Batwoman's EMP Batarang and Batman's Detective Mode chain — scanned enemies are auto-marked for EMP vulnerability."},
  {partners:"Batgirl",name:"Gotham Knights",desc:"All Bat-family members gain a shared passive armor bonus when near each other."},
 ]},

{n:"Eclipso",r:"S",ps:"Zone Control",
 primary:{name:"Dark Light Beams",desc:"Corrupting energy blasts that reduce healing received on hit."},
 secondary:{name:"Possession Touch",desc:"Close-range melee that briefly disorients the target."},
 abilities:[
  {name:"Corruption Zone",desc:"Create an area where all enemy healing is converted to damage instead.",type:"Zone"},
  {name:"Black Diamond Shard",desc:"Launch a crystal that splinters into multiple fragments on impact.",type:"Explosive"},
  {name:"Shadow Possession",desc:"Temporarily take control of one enemy support ability, turning it against them.",type:"Control"},
  {name:"Eclipse Darkness",desc:"Blind all enemies in an area briefly.",type:"Control"},
 ],
 passives:[
  {name:"Heart of Darkness",desc:"Grows stronger in darker map areas and indoors — ability damage increases."},
  {name:"Corrupted God",desc:"Immune to healing reduction effects from enemies."},
 ],
 ultimate:{name:"Total Eclipse",desc:"Drops a massive shadow field across the area — all healing is corrupted to damage for the duration, and enemies caught inside cannot use abilities."},
 teamups:[
  {partners:"Raven",name:"Masters of Darkness",desc:"Raven's Soul-Self Projection is massively amplified inside Eclipso's Total Eclipse field."},
  {partners:"Darkseid",name:"Anti-Life Corruption",desc:"Eclipso's corruption zones amplify Darkseid's Omega Beams, which now apply corruption stacks on hit."},
 ]}
],
};

const BALANCE_PRESETS = {
  primary:{cd:0,cast:0.7,dur:0},
  secondary:{cd:10,cast:0.5,dur:0},
  ultimate:{cd:0,cast:1.4,dur:0},
  Mobility:{cd:14,cast:0.4,dur:0},
  Melee:{cd:14,cast:0.4,dur:0},
  Dash:{cd:12,cast:0,dur:0},
  Defense:{cd:18,cast:0.4,dur:4},
  Control:{cd:16,cast:0.5,dur:0},
  Debuff:{cd:18,cast:0.5,dur:4},
  Buff:{cd:20,cast:0.6,dur:6},
  Utility:{cd:16,cast:0.4,dur:0},
  Trap:{cd:22,cast:0.6,dur:0},
  Summon:{cd:24,cast:1.0,dur:6},
  Ranged:{cd:14,cast:0.5,dur:0},
  AoE:{cd:18,cast:0.6,dur:0},
  Heal:{cd:18,cast:0.8,dur:5},
  Counter:{cd:20,cast:0.7,dur:0},
  Random:{cd:22,cast:0.7,dur:0},
  Zone:{cd:20,cast:0.6,dur:6},
  Intel:{cd:20,cast:0.8,dur:4}
};

function normalizeAbility(ability, typeKey) {
  if (!ability) return;
  const preset = BALANCE_PRESETS[typeKey] || BALANCE_PRESETS[ability.type] || BALANCE_PRESETS["Melee"];
  if (ability.cd === undefined) ability.cd = preset.cd;
  if (ability.cast === undefined) ability.cast = preset.cast;
  if (ability.dur === undefined) ability.dur = preset.dur;

  if (/once per match|once per life|long passive cooldown/i.test(ability.desc) && ability.limit === undefined) {
    ability.limit = "Once per match";
  }
  const stackMatch = ability.desc.match(/(\d+)\s*stack/i);
  if (stackMatch && ability.max === undefined) {
    ability.max = Number(stackMatch[1]);
  }
}

function normalizeCharacter(character) {
  normalizeAbility(character.primary, "primary");
  normalizeAbility(character.secondary, "secondary");
  character.abilities?.forEach((ability) => normalizeAbility(ability, ability.type));
  normalizeAbility(character.ultimate, "ultimate");
}

Object.values(roster).flat().forEach(normalizeCharacter);

function findCharacter(slug){
  for (const seasonKey in roster) {
    const found = roster[seasonKey].find((character) => slugify(character.n) === slug);
    if (found) return { ...found, seasonKey };
  }
  return null;
}

function flattenRoster(){
  return Object.values(roster).flat();
}

export { roster, findCharacter, slugify, flattenRoster };
