import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCitiesStore = defineStore('cities', () => {
    const currentElement = ref({});

    const list = ref([
        {
            name: "Москва",
            id: 101,
            type: "city",
            children: [
                {
                    name: "Марьина Роща",
                    id: 111,
                    type: "district",
                    children: [
                        {
                            name: "Анненская",
                            id: 121,
                            type: "street",
                            children: [
                                {
                                    name: "Дом 1",
                                    id: 131,
                                    type: "house",
                                    children: [
                                        {
                                            name: "Подъезд 1",
                                            id: 141,
                                            type: "entrance",
                                            children: [
                                                {
                                                    name: "HP Aruba 2530-24G",
                                                    id: 151,
                                                    type: "equipment",
                                                    attributes: { mac: "8A:9B:1F:8C:80:81", ip: "51.114.211.61", serial: "356303480007044" }
                                                },
                                                {
                                                    name: "Cisco Catalyst 9300",
                                                    id: 152,
                                                    type: "equipment",
                                                    attributes: { mac: "8A:CF:B3:C9:55:F5", ip: "147.190.217.32", serial: "356303481964912" }
                                                }
                                            ]
                                        },
                                        {
                                            name: "Подъезд 2",
                                            id: 142,
                                            type: "entrance",
                                            children: [
                                                {
                                                    name: "MikroTik CCR2004",
                                                    id: 153,
                                                    type: "equipment",
                                                    attributes: { mac: "8A:C9:97:23:CE:A7", ip: "16.162.66.106", serial: "356303481859450" }
                                                },
                                                {
                                                    name: "Ubiquiti UniFi Switch",
                                                    id: 154,
                                                    type: "equipment",
                                                    attributes: { mac: "8A:D2:66:35:09:82", ip: "146.235.248.85", serial: "356303487541987" }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Пермь",
            id: 102,
            type: "city",
            children: [
                {
                    name: "Мотовилихинский",
                    id: 112,
                    type: "district",
                    children: [
                        {
                            name: "1905-года",
                            id: 122,
                            type: "street",
                            children: [
                                {
                                    name: "Дом 1",
                                    id: 132,
                                    type: "house",
                                    children: [
                                        {
                                            name: "Подъезд 1",
                                            id: 143,
                                            type: "entrance",
                                            children: [
                                                {
                                                    name: "Juniper EX2300",
                                                    id: 155,
                                                    type: "equipment",
                                                    attributes: { mac: "8A:B3:18:7D:01:25", ip: "193.195.27.94", serial: "356303485342990" }
                                                },
                                                {
                                                    name: "Cisco Meraki MX100",
                                                    id: 156,
                                                    type: "equipment",
                                                    attributes: { mac: "8A:A9:46:16:67:29", ip: "96.124.164.41", serial: "356303484230162" }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Восстания",
                            id: 123,
                            type: "street",
                            children: [
                                {
                                    name: "Дом 1",
                                    id: 133,
                                    type: "house",
                                    children: [
                                        {
                                            name: "Подъезд 1",
                                            id: 144,
                                            type: "entrance",
                                            children: [
                                                {
                                                    name: "HP ProCurve 2620",
                                                    id: 157,
                                                    type: "equipment",
                                                    attributes: { mac: "8A:EC:85:10:A1:52", ip: "151.163.72.100", serial: "356303484891062" }
                                                },
                                                {
                                                    name: "Cisco Catalyst 3850",
                                                    id: 158,
                                                    type: "equipment", 
                                                    attributes: { mac: "8A:9D:DF:9D:E9:EA", ip: "109.82.52.104", serial: "356303481366738" }
                                                }
                                            ]
                                        },
                                        {
                                            name: "Подъезд 2",
                                            id: 145,
                                            type: "entrance",
                                            children: [
                                                {
                                                    name: "Dell PowerEdge R740",
                                                    id: 159,
                                                    type: "equipment", 
                                                    attributes: { mac: "AC:5F:2C:37:EF:AA", ip: "192.168.1.12", serial: "JN6782SKL9R3" }
                                                },
                                                {
                                                    name: "HP ProLiant DL380",
                                                    id: 160,
                                                    type: "equipment", 
                                                    attributes: { mac: "7F:9A:5C:24:3B:DE", ip: "10.0.0.25", serial: "PE6D932BZ01H" }
                                                },
                                                {
                                                    name: "Juniper SRX345",
                                                    id: 161,
                                                    type: "equipment", 
                                                    attributes: { mac: "9D:F2:47:8A:4C:1F", ip: "172.16.254.1", serial: "ZS9E9B0001KX" }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]);

    const typeList = {
        "city": "district",
        "district": "street",
        "street": "house",
        "house": "entrance",
    }
    
    const equipments = computed(() => {
        const equipmentsList = [];
    
        function collectEquipment(node) {
            if (node.type === "equipment") {
                equipmentsList.push({
                    id: node.id,
                    name: node.name,
                    mac: node.attributes.mac,
                    ip: node.attributes.ip,
                    serial: node.attributes.serial
                });
            }
            if (node.children) node.children.forEach(collectEquipment);
        }
    
        findNodeById(list.value, currentElement.value.id, collectEquipment);
    
        return equipmentsList;
    });

    // Search
    function findNodeById (tree, id, callback) {
        for (let i = 0; i < tree.length; i++) {
            const node = tree[i];
            if (node.id === id) {
                callback(node, tree, i);
                return true;
            }
            if (node.children && node.children.length > 0) {
                const result = findNodeById(node.children, id, callback);
                if (result) return true;
            }
        }
        return false;
    }
    
    // Functions for edit Cities List
    function findAndCreateNodeById (id, data) {
        return findNodeById(list.value, id, (node) => {
            node.children.push({ name: data.name, id: data.id, type: typeList[data.type], children: [] });
        });
    }
    
    function findAndUpdateNodeById (id, data) {
        return findNodeById(list.value, id, (node) => {
            node.name = data.name;
        });
    }
    
    function findAndRemoveNodeById (id) {
        return findNodeById(list.value, id, (_, tree, index) => {
            tree.splice(index, 1);
        });
    }
    
    // Function for edit Equipment List
    function findAndCreateEquipmentById (id, data) {
        return findNodeById(list.value, id, (node) => {
            node.children.push({
                name: data.name,
                id: data.id,
                type: 'equipment',
                attributes: { ip: data.ip, mac: data.mac, serial: data.serial }
            });
        });
    }
    
    function findAndUpdateEquipmentById (id, data) {
        return findNodeById(list.value, id, (node) => {
            node.name = data.name;
            node.attributes.mac = data.mac;
            node.attributes.ip = data.ip;
            node.attributes.serial = data.serial;
        });
    }
    
    function findAndRemoveEquipmentById (id) {
        return findNodeById(list.value, id, (_, tree, index) => {
            tree.splice(index, 1);
        });
    }

    return {
        list,
        equipments,
        currentElement,
        findAndCreateNodeById,
        findAndUpdateNodeById,
        findAndRemoveNodeById,
        findAndUpdateEquipmentById,
        findAndRemoveEquipmentById,
        findAndCreateEquipmentById
    }
})