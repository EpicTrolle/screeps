//------------------------------------------------------------------------------
const SPAWN1_ID = 1;

var s1                 = null;
var s1_sources         = [];
var s1_energy_capacity = 0;
var s1_energy          = 0;
//------------------------------------------------------------------------------

Game.spawns.s1.memory.objForBuildIsRecalc = true;

Game.spawns.s1.memory.construction_containers = [];
Game.spawns.s1.memory.construction_controllers = [];
Game.spawns.s1.memory.construction_labs = [];
Game.spawns.s1.memory.construction_links = [];
Game.spawns.s1.memory.construction_nukers = [];
Game.spawns.s1.memory.construction_observers = [];
Game.spawns.s1.memory.construction_power_spawns = [];
Game.spawns.s1.memory.construction_ramparts = [];
Game.spawns.s1.memory.construction_roads = [];
Game.spawns.s1.memory.construction_spawns = [];
Game.spawns.s1.memory.construction_storages = [];
Game.spawns.s1.memory.construction_terminals = [];
Game.spawns.s1.memory.construction_towers = [];
Game.spawns.s1.memory.construction_walls = [];
Game.spawns.s1.memory.construction_extensions = [];
Game.spawns.s1.memory.construction_extractors = [];

Game.spawns.s1.memory.structure_containers = [];
Game.spawns.s1.memory.structure_controllers = [];
Game.spawns.s1.memory.structure_labs = [];
Game.spawns.s1.memory.structure_links = [];
Game.spawns.s1.memory.structure_nukers = [];
Game.spawns.s1.memory.structure_observers = [];
Game.spawns.s1.memory.structure_power_spawns = [];
Game.spawns.s1.memory.structure_ramparts = [];
Game.spawns.s1.memory.structure_roads = [];
Game.spawns.s1.memory.structure_spawns = [];
Game.spawns.s1.memory.structure_storages = [];
Game.spawns.s1.memory.structure_terminals = [];
Game.spawns.s1.memory.structure_towers = [];
Game.spawns.s1.memory.structure_walls = [];
Game.spawns.s1.memory.structure_extensions = [];
Game.spawns.s1.memory.structure_extractors = [];

//------------------------------------------------------------------------------
module.exports =
{
    recalculate_objects_for_build : function()
    {
      Game.spawns.s1.memory.construction_containers = [];
      Game.spawns.s1.memory.construction_controllers = [];
      Game.spawns.s1.memory.construction_labs = [];
      Game.spawns.s1.memory.construction_links = [];
      Game.spawns.s1.memory.construction_nukers = [];
      Game.spawns.s1.memory.construction_observers = [];
      Game.spawns.s1.memory.construction_power_spawns = [];
      Game.spawns.s1.memory.construction_ramparts = [];
      Game.spawns.s1.memory.construction_roads = [];
      Game.spawns.s1.memory.construction_spawns = [];
      Game.spawns.s1.memory.construction_storages = [];
      Game.spawns.s1.memory.construction_terminals = [];
      Game.spawns.s1.memory.construction_towers = [];
      Game.spawns.s1.memory.construction_walls = [];
      Game.spawns.s1.memory.construction_extensions = [];
      Game.spawns.s1.memory.construction_extractors = [];

      var res = Game.spawns.s1.room.find(FIND_CONSTRUCTION_SITES);
      for (var i in res)
      {
        if(res[i].structureType == 'constructedWall')
        {
          Game.spawns.s1.memory.construction_walls.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'spawn')
        {
          Game.spawns.s1.memory.construction_spawns.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'extension')
        {
          Game.spawns.s1.memory.construction_extensions.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'rampart')
        {
          Game.spawns.s1.memory.construction_ramparts.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'link')
        {
          Game.spawns.s1.memory.construction_links.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'storage')
        {
          Game.spawns.s1.memory.construction_storages.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'tower')
        {
          Game.spawns.s1.memory.construction_towers.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'observer')
        {
          Game.spawns.s1.memory.construction_observers.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'powerSpawn')
        {
          Game.spawns.s1.memory.construction_power_spawns.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'extractor')
        {
          Game.spawns.s1.memory.construction_extractors.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'lab')
        {
          Game.spawns.s1.memory.construction_labs.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'terminal')
        {
          Game.spawns.s1.memory.construction_terminals.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'container')
        {
          Game.spawns.s1.memory.construction_containers.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'nuker')
        {
          Game.spawns.s1.memory.construction_nukers.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'road')
        {
          Game.spawns.s1.memory.construction_roads.push(res[i].id);
          continue;
        }
        console.log("recalculate_objects_for_build : UNKNOWN " +  res[i].structureType);
      }
      console.log("objects for build recalculate is Done!");
      console.log(Game.spawns.s1.memory.construction_roads.length + " : roads");
      console.log(Game.spawns.s1.memory.construction_walls.length + " : walls");

      Game.spawns.s1.memory.objForBuildIsRecalc = false;
    },
    //--------------------------------------------------------------------------
    recalculate_objects_for_repair : function()
    {
      Game.spawns.s1.memory.structure_containers = [];
      Game.spawns.s1.memory.structure_controllers = [];
      Game.spawns.s1.memory.structure_labs = [];
      Game.spawns.s1.memory.structure_links = [];
      Game.spawns.s1.memory.structure_nukers = [];
      Game.spawns.s1.memory.structure_observers = [];
      Game.spawns.s1.memory.structure_power_spawns = [];
      Game.spawns.s1.memory.structure_ramparts = [];
      Game.spawns.s1.memory.structure_roads = [];
      Game.spawns.s1.memory.structure_spawns = [];
      Game.spawns.s1.memory.structure_storages = [];
      Game.spawns.s1.memory.structure_terminals = [];
      Game.spawns.s1.memory.structure_towers = [];
      Game.spawns.s1.memory.structure_walls = [];
      Game.spawns.s1.memory.structure_extensions = [];
      Game.spawns.s1.memory.structure_extractors = [];

      var res = Game.spawns.s1.room.find(FIND_STRUCTURES);
      for (var i in res)
      {
        if(res[i].structureType == 'constructedWall')
        {
          Game.spawns.s1.memory.structure_walls.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'spawn')
        {
          Game.spawns.s1.memory.structure_spawns.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'extension')
        {
          Game.spawns.s1.memory.structure_extensions.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'rampart')
        {
          Game.spawns.s1.memory.structure_ramparts.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'link')
        {
          Game.spawns.s1.memory.structure_links.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'storage')
        {
          Game.spawns.s1.memory.structure_storages.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'tower')
        {
          Game.spawns.s1.memory.structure_towers.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'observer')
        {
          Game.spawns.s1.memory.structure_observers.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'powerSpawn')
        {
          Game.spawns.s1.memory.structure_power_spawns.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'extractor')
        {
          Game.spawns.s1.memory.structure_extractors.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'lab')
        {
          Game.spawns.s1.memory.structure_labs.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'terminal')
        {
          Game.spawns.s1.memory.structure_terminals.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'container')
        {
          Game.spawns.s1.memory.structure_containers.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'nuker')
        {
          Game.spawns.s1.memory.structure_nukers.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'road')
        {
          Game.spawns.s1.memory.structure_roads.push(res[i].id);
          continue;
        }
        if(res[i].structureType == 'controller')
        {
          Game.spawns.s1.memory.structure_controllers.push(res[i].id);
          continue;
        }
        console.log("recalculate_objects_for_repair : UNKNOWN " +  res[i].structureType);
      }
      console.log("objects for repair recalculate is Done!");
      console.log(Game.spawns.s1.memory.structure_roads.length + " : roads");
      console.log(Game.spawns.s1.memory.structure_walls.length + " : walls");
      console.log(Game.spawns.s1.memory.structure_controllers.length + " : controllers");

      Game.spawns.s1.memory.objForBuildIsRecalc = false;
    },
    //--------------------------------------------------------------------------
    get_sources: function()
    {
      return s1_sources;
    },
    //--------------------------------------------------------------------------
    get_energy_capacity: function()
    {
      return s1_energy_capacity;
    },
    //--------------------------------------------------------------------------
    get_energy: function()
    {
      return s1_energy;
    },
    //--------------------------------------------------------------------------
    get_repair_objects: function()
    {
        var res;

        res = Game.spawns.s1.room.find(FIND_STRUCTURES, { filter :
                            function(obj)
                            {
                                if(obj.structureType == STRUCTURE_TOWER)
                                    return obj.hits < obj.hitsMax;
                                return false;
                            }});

        if(res.length != 0)
          return res;

        res = Game.spawns.s1.room.find(FIND_STRUCTURES, { filter :
                            function(obj)
                            {
                                if(obj.structureType == STRUCTURE_CONTAINER)
                                    return obj.hits < (obj.hitsMax / 2);
                                return false;
                            }});

        if(res.length != 0)
          return res;

        res = Game.spawns.s1.room.find(FIND_STRUCTURES, { filter :
                            function(obj)
                            {
                                if(obj.structureType == STRUCTURE_WALL)
                                    return obj.hits < (obj.hitsMax / 2);
                                return false;
                            }});
        return res;
    },
    //--------------------------------------------------------------------------
    get_build_objects : function()
    {
      if(Game.spawns.s1.memory.construction_roads.length > 0)
      {
        console.log("obj for build find - road : " + Game.spawns.s1.memory.construction_roads);
        return Game.spawns.s1.memory.construction_roads;
      }

      if(Game.spawns.s1.memory.construction_walls.length > 0)
      {
        console.log("obj for build find - wall : " + Game.spawns.s1.memory.construction_walls);
        return Game.spawns.s1.memory.construction_walls;
      }

      return [];
    },
    //--------------------------------------------------------------------------
    get_repair_objects_for_upgrader : function()
    {

    },
    //--------------------------------------------------------------------------
    get_repair_objects_for_builder : function()
    {
      if(Game.spawns.s1.memory.structure_walls.length > 0)
      {
        console.log("obj repair for builder find - wall : " + Game.spawns.s1.memory.structure_walls);
        return Game.spawns.s1.memory.structure_walls;
      }

      return [];
    },
    //--------------------------------------------------------------------------
    get_stores_with_count_energy : function(energyCount)
    {
        var res;
        res = Game.spawns.s1.room.find(FIND_STRUCTURES, { filter:
                             function(obj)
                             {
                                 if(obj.structureType == STRUCTURE_CONTAINER || obj.structureType == STRUCTURE_STORAGE)
                                     return obj.store[RESOURCE_ENERGY] > energyCount;

                                 if(obj.structureType == STRUCTURE_STORAGE || obj.structureType == STRUCTURE_STORAGE)
                                     return obj.store[RESOURCE_ENERGY] > energyCount;

                                 if(obj.structureType == STRUCTURE_EXTENSION)
                                    return obj.energy > 0;
                                 return false;
                             }});
        return res;
    },
    //--------------------------------------------------------------------------
    get_stores_for_trancfer : function()
    {
        var res;

        res = Game.spawns.s1.room.find(FIND_STRUCTURES, { filter:
                            function(obj)
                            {
                                if(obj.structureType == STRUCTURE_TOWER)
                                    return obj.energy < obj.energyCapacity;
                                return false;
                            }});

        if(res == false)
        {
          res = Game.spawns.s1.room.find(FIND_STRUCTURES, { filter:
                            function(obj)
                            {
                                if(obj.structureType == STRUCTURE_EXTENSION)
                                    return obj.energy < obj.energyCapacity;
                                return false;
                            }});
        }

        if(res == false)
        {
            res = Game.spawns.s1.room.find(FIND_STRUCTURES, { filter:
                                 function(obj)
                                 {
                                     if(obj.structureType == STRUCTURE_CONTAINER ||
                                        obj.structureType == STRUCTURE_STORAGE)
                                         return obj.store[RESOURCE_ENERGY] < obj.storeCapacity;
                                     return false;
                                 }});
        }
        return res;
    },
    //--------------------------------------------------------------------------
    get_not_empty_stores : function()
    {
        var res;
        res = Game.spawns.s1.room.find(FIND_STRUCTURES, { filter :
                            function(obj)
                            {
                                if(obj.structureType == STRUCTURE_STORAGE ||
                                   obj.structureType == STRUCTURE_CONTAINER)
                                    return obj.store[RESOURCE_ENERGY] > 0;
                                return false;
                            }});
        return res;
    },
    //--------------------------------------------------------------------------
    get_towers : function()
    {
        var res;
        res = Game.spawns.s1.room.find(FIND_STRUCTURES, { filter:
                            function(obj)
                            {
                                if(obj.structureType == STRUCTURE_TOWER)
                                    return obj.energy < obj.energyCapacity;
                                return false;
                            }});
        return res;
    },
    //--------------------------------------------------------------------------
    is_owner_of_creep : function(cr_name)
    {
        return (Game.creeps[cr_name].memory.spawnID == SPAWN1_ID);
    },
    //--------------------------------------------------------------------------
    get_first_construction_id : function()
    {
        var res = Game.spawns.s1.room.find(FIND_CONSTRUCTION_SITES);

        if(res.length > 0)
            return res[0].id;
        return null;
    },
    //--------------------------------------------------------------------------
    calc_energy : function()
    {
        s1_energy            = 0;
        s1_energy_capacity   = 0;
        s1_energy            += Game.spawns.s1.energy;
        s1_energy_capacity   += Game.spawns.s1.energyCapacity;

        var extensions = Game.spawns.s1.room.find(FIND_MY_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }});

        if(extensions.length > 0)
        {
            for(var i in extensions)
            {
                s1_energy            += extensions[i].energy;
                s1_energy_capacity   += extensions[i].energyCapacity;
            }
        }
    },
    //--------------------------------------------------------------------------
    get_source_id : function()
    {
        if(Game.spawns.s1.memory.sourceID >= Game.spawns.s1.memory.sourceCount)
            Game.spawns.s1.memory.sourceID = 0;
        return s1_sources[Game.spawns.s1.memory.sourceID++];
    },
    //--------------------------------------------------------------------------
    find_energy_sources : function()
    {
        var fsrc   = Game.spawns.s1.room.find(FIND_SOURCES);
        s1_sources = [];

        for(var i in fsrc)
            s1_sources.push(fsrc[i].id);

        Game.spawns.s1.memory.sourceID    = 0;
        Game.spawns.s1.memory.sourceCount = fsrc.length;
    },
    //--------------------------------------------------------------------------
    processing : function()
    {
        if(s1_sources.length == 0)
            this.find_energy_sources();
    },
    //--------------------------------------------------------------------------
    get_enemies : function()
    {
      if(Game.spawns.s1.memory.attach_check == 6)
      {
        var enemy_targets = Game.spawns.s1.room.find(FIND_HOSTILE_CREEPS);
        if(enemy_targets.length > 0)
            return enemy_targets;
        else
            return null;
        Game.spawns.s1.memory.attach_check = 0;
      }
      else
        Game.spawns.s1.memory.attach_check++;

      return null;
    }
};
