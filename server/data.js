module.exports = {
  VAV1: {
    data: {
      SpaceTemp: {
        output: {
          $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
          data: { valueDisplay: "76.75 °F", value: 76.7455 },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.NumericPropertyValue@3abac86e"
        },
        $class: "com.smartbt.spserver.networks.distechApi.model.NumericEndpointControlPoint",
        rangeAlarm: {
          $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
          data: {
            delayToAlarm: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@37b6ad5f"
            },
            $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
            inAlarm: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "false", value: false },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@7c0c0eae"
            },
            $settings: { coor: "44.0x35.0" },
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$name", value: "$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@4626c312"
            },
            highEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@712fea2d"
            },
            $tags:
              '{type:"OutOfRangeAlarmExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/rangeAlarm" name:"rangeAlarm"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@2bd3aff5"
            },
            high: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "73.00", value: 73 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@5b9dc9c7"
            },
            low: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "71.00", value: 71 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@31b3657a"
            },
            lowEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@ac0fdc7"
            },
            deadband: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@39c65706"
            },
            currentState: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "?", value: "?" },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@ca07208"
            }
          },
          $str: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension"
        },
        updateInterval: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@57fdbdad"
        },
        $settings: {
          coor: "25.0x25.0",
          precision: "2",
          units: {
            $class: "com.smartbt.spserver.sys.unit.Unit",
            $val: "temperature:fahrenheit:°F"
          }
        },
        bacnetInstanceNumber: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@739ee987"
        },
        bacnetObjectType: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "analog-value", value: "analog-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@4a740bbf"
        },
        covHistory: {
          $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
          data: {
            $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$parent.name/$name", value: "$parent.name/$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@38e44633"
            },
            $tags:
              '{type:"NumericCovHistoryExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/covHistory" name:"covHistory"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@3391484e"
            }
          },
          $str: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension"
        },
        bacnetPoint: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "?", value: "?" },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@503b1a55"
        },
        $tags:
          '{type:"NumericEndpointControlPoint" path:"/Networks/Distech/Florida/VAV/SpaceTemp" name:"SpaceTemp"}',
        bacnetPropertyName: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "present-value", value: "present-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@3c2e5c06"
        }
      },
      AirFlow: {}
    }
  },
  VAV2: {
    data: {
      SpaceTemp: {
        output: {
          $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
          data: { valueDisplay: "76.88 °F", value: 76.8842 },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.NumericPropertyValue@3abac86e"
        },
        $class: "com.smartbt.spserver.networks.distechApi.model.NumericEndpointControlPoint",
        rangeAlarm: {
          $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
          data: {
            delayToAlarm: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@37b6ad5f"
            },
            $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
            inAlarm: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "false", value: false },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@7c0c0eae"
            },
            $settings: { coor: "44.0x35.0" },
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$name", value: "$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@4626c312"
            },
            highEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@712fea2d"
            },
            $tags:
              '{type:"OutOfRangeAlarmExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/rangeAlarm" name:"rangeAlarm"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@2bd3aff5"
            },
            high: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "73.00", value: 73 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@5b9dc9c7"
            },
            low: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "71.00", value: 71 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@31b3657a"
            },
            lowEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@ac0fdc7"
            },
            deadband: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@39c65706"
            },
            currentState: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "?", value: "?" },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@ca07208"
            }
          },
          $str: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension"
        },
        updateInterval: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@57fdbdad"
        },
        $settings: {
          coor: "25.0x25.0",
          precision: "2",
          units: {
            $class: "com.smartbt.spserver.sys.unit.Unit",
            $val: "temperature:fahrenheit:°F"
          }
        },
        bacnetInstanceNumber: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@739ee987"
        },
        bacnetObjectType: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "analog-value", value: "analog-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@4a740bbf"
        },
        covHistory: {
          $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
          data: {
            $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$parent.name/$name", value: "$parent.name/$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@38e44633"
            },
            $tags:
              '{type:"NumericCovHistoryExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/covHistory" name:"covHistory"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@3391484e"
            }
          },
          $str: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension"
        },
        bacnetPoint: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "?", value: "?" },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@503b1a55"
        },
        $tags:
          '{type:"NumericEndpointControlPoint" path:"/Networks/Distech/Florida/VAV/SpaceTemp" name:"SpaceTemp"}',
        bacnetPropertyName: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "present-value", value: "present-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@3c2e5c06"
        }
      },
      AirFlow: {}
    }
  },
  VAV3: {
    data: {
      SpaceTemp: {
        output: {
          $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
          data: { valueDisplay: "77.75 °F", value: 77.7455 },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.NumericPropertyValue@3abac86e"
        },
        $class: "com.smartbt.spserver.networks.distechApi.model.NumericEndpointControlPoint",
        rangeAlarm: {
          $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
          data: {
            delayToAlarm: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@37b6ad5f"
            },
            $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
            inAlarm: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "false", value: false },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@7c0c0eae"
            },
            $settings: { coor: "44.0x35.0" },
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$name", value: "$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@4626c312"
            },
            highEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@712fea2d"
            },
            $tags:
              '{type:"OutOfRangeAlarmExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/rangeAlarm" name:"rangeAlarm"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@2bd3aff5"
            },
            high: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "73.00", value: 73 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@5b9dc9c7"
            },
            low: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "71.00", value: 71 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@31b3657a"
            },
            lowEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@ac0fdc7"
            },
            deadband: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@39c65706"
            },
            currentState: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "?", value: "?" },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@ca07208"
            }
          },
          $str: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension"
        },
        updateInterval: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@57fdbdad"
        },
        $settings: {
          coor: "25.0x25.0",
          precision: "2",
          units: {
            $class: "com.smartbt.spserver.sys.unit.Unit",
            $val: "temperature:fahrenheit:°F"
          }
        },
        bacnetInstanceNumber: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@739ee987"
        },
        bacnetObjectType: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "analog-value", value: "analog-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@4a740bbf"
        },
        covHistory: {
          $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
          data: {
            $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$parent.name/$name", value: "$parent.name/$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@38e44633"
            },
            $tags:
              '{type:"NumericCovHistoryExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/covHistory" name:"covHistory"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@3391484e"
            }
          },
          $str: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension"
        },
        bacnetPoint: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "?", value: "?" },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@503b1a55"
        },
        $tags:
          '{type:"NumericEndpointControlPoint" path:"/Networks/Distech/Florida/VAV/SpaceTemp" name:"SpaceTemp"}',
        bacnetPropertyName: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "present-value", value: "present-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@3c2e5c06"
        }
      },
      AirFlow: {}
    }
  },
  VAV4: {
    data: {
      SpaceTemp: {
        output: {
          $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
          data: { valueDisplay: "76.95 °F", value: 76.9455 },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.NumericPropertyValue@3abac86e"
        },
        $class: "com.smartbt.spserver.networks.distechApi.model.NumericEndpointControlPoint",
        rangeAlarm: {
          $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
          data: {
            delayToAlarm: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@37b6ad5f"
            },
            $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
            inAlarm: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "false", value: false },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@7c0c0eae"
            },
            $settings: { coor: "44.0x35.0" },
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$name", value: "$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@4626c312"
            },
            highEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@712fea2d"
            },
            $tags:
              '{type:"OutOfRangeAlarmExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/rangeAlarm" name:"rangeAlarm"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@2bd3aff5"
            },
            high: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "73.00", value: 73 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@5b9dc9c7"
            },
            low: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "71.00", value: 71 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@31b3657a"
            },
            lowEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@ac0fdc7"
            },
            deadband: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@39c65706"
            },
            currentState: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "?", value: "?" },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@ca07208"
            }
          },
          $str: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension"
        },
        updateInterval: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@57fdbdad"
        },
        $settings: {
          coor: "25.0x25.0",
          precision: "2",
          units: {
            $class: "com.smartbt.spserver.sys.unit.Unit",
            $val: "temperature:fahrenheit:°F"
          }
        },
        bacnetInstanceNumber: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@739ee987"
        },
        bacnetObjectType: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "analog-value", value: "analog-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@4a740bbf"
        },
        covHistory: {
          $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
          data: {
            $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$parent.name/$name", value: "$parent.name/$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@38e44633"
            },
            $tags:
              '{type:"NumericCovHistoryExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/covHistory" name:"covHistory"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@3391484e"
            }
          },
          $str: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension"
        },
        bacnetPoint: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "?", value: "?" },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@503b1a55"
        },
        $tags:
          '{type:"NumericEndpointControlPoint" path:"/Networks/Distech/Florida/VAV/SpaceTemp" name:"SpaceTemp"}',
        bacnetPropertyName: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "present-value", value: "present-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@3c2e5c06"
        }
      },
      AirFlow: {}
    }
  },
  VAV5: {
    data: {
      SpaceTemp: {
        output: {
          $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
          data: { valueDisplay: "76.75 °F", value: 76.7455 },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.NumericPropertyValue@3abac86e"
        },
        $class: "com.smartbt.spserver.networks.distechApi.model.NumericEndpointControlPoint",
        rangeAlarm: {
          $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
          data: {
            delayToAlarm: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@37b6ad5f"
            },
            $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
            inAlarm: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "false", value: false },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@7c0c0eae"
            },
            $settings: { coor: "44.0x35.0" },
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$name", value: "$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@4626c312"
            },
            highEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@712fea2d"
            },
            $tags:
              '{type:"OutOfRangeAlarmExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/rangeAlarm" name:"rangeAlarm"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@2bd3aff5"
            },
            high: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "73.00", value: 73 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@5b9dc9c7"
            },
            low: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "71.00", value: 71 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@31b3657a"
            },
            lowEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@ac0fdc7"
            },
            deadband: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@39c65706"
            },
            currentState: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "?", value: "?" },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@ca07208"
            }
          },
          $str: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension"
        },
        updateInterval: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@57fdbdad"
        },
        $settings: {
          coor: "25.0x25.0",
          precision: "2",
          units: {
            $class: "com.smartbt.spserver.sys.unit.Unit",
            $val: "temperature:fahrenheit:°F"
          }
        },
        bacnetInstanceNumber: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@739ee987"
        },
        bacnetObjectType: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "analog-value", value: "analog-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@4a740bbf"
        },
        covHistory: {
          $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
          data: {
            $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$parent.name/$name", value: "$parent.name/$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@38e44633"
            },
            $tags:
              '{type:"NumericCovHistoryExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/covHistory" name:"covHistory"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@3391484e"
            }
          },
          $str: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension"
        },
        bacnetPoint: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "?", value: "?" },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@503b1a55"
        },
        $tags:
          '{type:"NumericEndpointControlPoint" path:"/Networks/Distech/Florida/VAV/SpaceTemp" name:"SpaceTemp"}',
        bacnetPropertyName: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "present-value", value: "present-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@3c2e5c06"
        }
      },
      AirFlow: {}
    }
  },
  VAV6: {
    data: {
      SpaceTemp: {
        output: {
          $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
          data: { valueDisplay: "76.55 °F", value: 76.5455 },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.NumericPropertyValue@3abac86e"
        },
        $class: "com.smartbt.spserver.networks.distechApi.model.NumericEndpointControlPoint",
        rangeAlarm: {
          $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
          data: {
            delayToAlarm: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@37b6ad5f"
            },
            $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
            inAlarm: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "false", value: false },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@7c0c0eae"
            },
            $settings: { coor: "44.0x35.0" },
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$name", value: "$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@4626c312"
            },
            highEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@712fea2d"
            },
            $tags:
              '{type:"OutOfRangeAlarmExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/rangeAlarm" name:"rangeAlarm"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@2bd3aff5"
            },
            high: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "73.00", value: 73 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@5b9dc9c7"
            },
            low: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "71.00", value: 71 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@31b3657a"
            },
            lowEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@ac0fdc7"
            },
            deadband: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@39c65706"
            },
            currentState: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "?", value: "?" },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@ca07208"
            }
          },
          $str: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension"
        },
        updateInterval: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@57fdbdad"
        },
        $settings: {
          coor: "25.0x25.0",
          precision: "2",
          units: {
            $class: "com.smartbt.spserver.sys.unit.Unit",
            $val: "temperature:fahrenheit:°F"
          }
        },
        bacnetInstanceNumber: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@739ee987"
        },
        bacnetObjectType: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "analog-value", value: "analog-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@4a740bbf"
        },
        covHistory: {
          $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
          data: {
            $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$parent.name/$name", value: "$parent.name/$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@38e44633"
            },
            $tags:
              '{type:"NumericCovHistoryExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/covHistory" name:"covHistory"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@3391484e"
            }
          },
          $str: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension"
        },
        bacnetPoint: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "?", value: "?" },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@503b1a55"
        },
        $tags:
          '{type:"NumericEndpointControlPoint" path:"/Networks/Distech/Florida/VAV/SpaceTemp" name:"SpaceTemp"}',
        bacnetPropertyName: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "present-value", value: "present-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@3c2e5c06"
        }
      },
      AirFlow: {}
    }
  },
  VAV7: {
    data: {
      SpaceTemp: {
        output: {
          $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
          data: { valueDisplay: "75.75 °F", value: 75.7455 },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.NumericPropertyValue@3abac86e"
        },
        $class: "com.smartbt.spserver.networks.distechApi.model.NumericEndpointControlPoint",
        rangeAlarm: {
          $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
          data: {
            delayToAlarm: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@37b6ad5f"
            },
            $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
            inAlarm: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "false", value: false },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@7c0c0eae"
            },
            $settings: { coor: "44.0x35.0" },
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$name", value: "$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@4626c312"
            },
            highEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@712fea2d"
            },
            $tags:
              '{type:"OutOfRangeAlarmExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/rangeAlarm" name:"rangeAlarm"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@2bd3aff5"
            },
            high: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "73.00", value: 73 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@5b9dc9c7"
            },
            low: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "71.00", value: 71 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@31b3657a"
            },
            lowEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@ac0fdc7"
            },
            deadband: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@39c65706"
            },
            currentState: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "?", value: "?" },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@ca07208"
            }
          },
          $str: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension"
        },
        updateInterval: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@57fdbdad"
        },
        $settings: {
          coor: "25.0x25.0",
          precision: "2",
          units: {
            $class: "com.smartbt.spserver.sys.unit.Unit",
            $val: "temperature:fahrenheit:°F"
          }
        },
        bacnetInstanceNumber: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@739ee987"
        },
        bacnetObjectType: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "analog-value", value: "analog-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@4a740bbf"
        },
        covHistory: {
          $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
          data: {
            $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$parent.name/$name", value: "$parent.name/$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@38e44633"
            },
            $tags:
              '{type:"NumericCovHistoryExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/covHistory" name:"covHistory"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@3391484e"
            }
          },
          $str: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension"
        },
        bacnetPoint: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "?", value: "?" },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@503b1a55"
        },
        $tags:
          '{type:"NumericEndpointControlPoint" path:"/Networks/Distech/Florida/VAV/SpaceTemp" name:"SpaceTemp"}',
        bacnetPropertyName: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "present-value", value: "present-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@3c2e5c06"
        }
      },
      AirFlow: {}
    }
  },
  VAV8: {
    data: {
      SpaceTemp: {
        output: {
          $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
          data: { valueDisplay: "76.75 °F", value: 76.7455 },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.NumericPropertyValue@3abac86e"
        },
        $class: "com.smartbt.spserver.networks.distechApi.model.NumericEndpointControlPoint",
        rangeAlarm: {
          $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
          data: {
            delayToAlarm: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@37b6ad5f"
            },
            $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
            inAlarm: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "false", value: false },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@7c0c0eae"
            },
            $settings: { coor: "44.0x35.0" },
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$name", value: "$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@4626c312"
            },
            highEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@712fea2d"
            },
            $tags:
              '{type:"OutOfRangeAlarmExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/rangeAlarm" name:"rangeAlarm"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@2bd3aff5"
            },
            high: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "73.00", value: 73 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@5b9dc9c7"
            },
            low: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "71.00", value: 71 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@31b3657a"
            },
            lowEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@ac0fdc7"
            },
            deadband: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@39c65706"
            },
            currentState: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "?", value: "?" },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@ca07208"
            }
          },
          $str: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension"
        },
        updateInterval: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@57fdbdad"
        },
        $settings: {
          coor: "25.0x25.0",
          precision: "2",
          units: {
            $class: "com.smartbt.spserver.sys.unit.Unit",
            $val: "temperature:fahrenheit:°F"
          }
        },
        bacnetInstanceNumber: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@739ee987"
        },
        bacnetObjectType: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "analog-value", value: "analog-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@4a740bbf"
        },
        covHistory: {
          $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
          data: {
            $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$parent.name/$name", value: "$parent.name/$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@38e44633"
            },
            $tags:
              '{type:"NumericCovHistoryExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/covHistory" name:"covHistory"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@3391484e"
            }
          },
          $str: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension"
        },
        bacnetPoint: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "?", value: "?" },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@503b1a55"
        },
        $tags:
          '{type:"NumericEndpointControlPoint" path:"/Networks/Distech/Florida/VAV/SpaceTemp" name:"SpaceTemp"}',
        bacnetPropertyName: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "present-value", value: "present-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@3c2e5c06"
        }
      },
      AirFlow: {}
    }
  },
  VAV9: {
    data: {
      SpaceTemp: {
        output: {
          $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
          data: { valueDisplay: "76.0 °F", value: 76.0 },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.NumericPropertyValue@3abac86e"
        },
        $class: "com.smartbt.spserver.networks.distechApi.model.NumericEndpointControlPoint",
        rangeAlarm: {
          $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
          data: {
            delayToAlarm: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@37b6ad5f"
            },
            $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
            inAlarm: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "false", value: false },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@7c0c0eae"
            },
            $settings: { coor: "44.0x35.0" },
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$name", value: "$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@4626c312"
            },
            highEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@712fea2d"
            },
            $tags:
              '{type:"OutOfRangeAlarmExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/rangeAlarm" name:"rangeAlarm"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@2bd3aff5"
            },
            high: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "73.00", value: 73 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@5b9dc9c7"
            },
            low: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "71.00", value: 71 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@31b3657a"
            },
            lowEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@ac0fdc7"
            },
            deadband: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@39c65706"
            },
            currentState: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "?", value: "?" },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@ca07208"
            }
          },
          $str: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension"
        },
        updateInterval: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@57fdbdad"
        },
        $settings: {
          coor: "25.0x25.0",
          precision: "2",
          units: {
            $class: "com.smartbt.spserver.sys.unit.Unit",
            $val: "temperature:fahrenheit:°F"
          }
        },
        bacnetInstanceNumber: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@739ee987"
        },
        bacnetObjectType: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "analog-value", value: "analog-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@4a740bbf"
        },
        covHistory: {
          $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
          data: {
            $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$parent.name/$name", value: "$parent.name/$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@38e44633"
            },
            $tags:
              '{type:"NumericCovHistoryExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/covHistory" name:"covHistory"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@3391484e"
            }
          },
          $str: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension"
        },
        bacnetPoint: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "?", value: "?" },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@503b1a55"
        },
        $tags:
          '{type:"NumericEndpointControlPoint" path:"/Networks/Distech/Florida/VAV/SpaceTemp" name:"SpaceTemp"}',
        bacnetPropertyName: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "present-value", value: "present-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@3c2e5c06"
        }
      },
      AirFlow: {}
    }
  },
  VAV10: {
    data: {
      SpaceTemp: {
        output: {
          $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
          data: { valueDisplay: "76.35 °F", value: 76.3455 },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.NumericPropertyValue@3abac86e"
        },
        $class: "com.smartbt.spserver.networks.distechApi.model.NumericEndpointControlPoint",
        rangeAlarm: {
          $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
          data: {
            delayToAlarm: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@37b6ad5f"
            },
            $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
            inAlarm: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "false", value: false },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@7c0c0eae"
            },
            $settings: { coor: "44.0x35.0" },
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$name", value: "$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@4626c312"
            },
            highEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@712fea2d"
            },
            $tags:
              '{type:"OutOfRangeAlarmExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/rangeAlarm" name:"rangeAlarm"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@2bd3aff5"
            },
            high: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "73.00", value: 73 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@5b9dc9c7"
            },
            low: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "71.00", value: 71 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@31b3657a"
            },
            lowEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@ac0fdc7"
            },
            deadband: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@39c65706"
            },
            currentState: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "?", value: "?" },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@ca07208"
            }
          },
          $str: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension"
        },
        updateInterval: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@57fdbdad"
        },
        $settings: {
          coor: "25.0x25.0",
          precision: "2",
          units: {
            $class: "com.smartbt.spserver.sys.unit.Unit",
            $val: "temperature:fahrenheit:°F"
          }
        },
        bacnetInstanceNumber: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@739ee987"
        },
        bacnetObjectType: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "analog-value", value: "analog-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@4a740bbf"
        },
        covHistory: {
          $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
          data: {
            $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$parent.name/$name", value: "$parent.name/$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@38e44633"
            },
            $tags:
              '{type:"NumericCovHistoryExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/covHistory" name:"covHistory"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@3391484e"
            }
          },
          $str: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension"
        },
        bacnetPoint: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "?", value: "?" },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@503b1a55"
        },
        $tags:
          '{type:"NumericEndpointControlPoint" path:"/Networks/Distech/Florida/VAV/SpaceTemp" name:"SpaceTemp"}',
        bacnetPropertyName: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "present-value", value: "present-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@3c2e5c06"
        }
      },
      AirFlow: {}
    }
  },
  VAV11: {
    data: {
      SpaceTemp: {
        output: {
          $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
          data: { valueDisplay: "76.9 °F", value: 76.9 },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.NumericPropertyValue@3abac86e"
        },
        $class: "com.smartbt.spserver.networks.distechApi.model.NumericEndpointControlPoint",
        rangeAlarm: {
          $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
          data: {
            delayToAlarm: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@37b6ad5f"
            },
            $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
            inAlarm: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "false", value: false },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@7c0c0eae"
            },
            $settings: { coor: "44.0x35.0" },
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$name", value: "$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@4626c312"
            },
            highEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@712fea2d"
            },
            $tags:
              '{type:"OutOfRangeAlarmExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/rangeAlarm" name:"rangeAlarm"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@2bd3aff5"
            },
            high: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "73.00", value: 73 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@5b9dc9c7"
            },
            low: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "71.00", value: 71 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@31b3657a"
            },
            lowEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@ac0fdc7"
            },
            deadband: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@39c65706"
            },
            currentState: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "?", value: "?" },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@ca07208"
            }
          },
          $str: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension"
        },
        updateInterval: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@57fdbdad"
        },
        $settings: {
          coor: "25.0x25.0",
          precision: "2",
          units: {
            $class: "com.smartbt.spserver.sys.unit.Unit",
            $val: "temperature:fahrenheit:°F"
          }
        },
        bacnetInstanceNumber: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@739ee987"
        },
        bacnetObjectType: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "analog-value", value: "analog-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@4a740bbf"
        },
        covHistory: {
          $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
          data: {
            $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$parent.name/$name", value: "$parent.name/$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@38e44633"
            },
            $tags:
              '{type:"NumericCovHistoryExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/covHistory" name:"covHistory"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@3391484e"
            }
          },
          $str: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension"
        },
        bacnetPoint: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "?", value: "?" },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@503b1a55"
        },
        $tags:
          '{type:"NumericEndpointControlPoint" path:"/Networks/Distech/Florida/VAV/SpaceTemp" name:"SpaceTemp"}',
        bacnetPropertyName: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "present-value", value: "present-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@3c2e5c06"
        }
      },
      AirFlow: {}
    }
  },
  VAV12: {
    data: {
      SpaceTemp: {
        output: {
          $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
          data: { valueDisplay: "76.75 °F", value: 76.7455 },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.NumericPropertyValue@3abac86e"
        },
        $class: "com.smartbt.spserver.networks.distechApi.model.NumericEndpointControlPoint",
        rangeAlarm: {
          $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
          data: {
            delayToAlarm: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@37b6ad5f"
            },
            $class: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension",
            inAlarm: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "false", value: false },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@7c0c0eae"
            },
            $settings: { coor: "44.0x35.0" },
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$name", value: "$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@4626c312"
            },
            highEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@712fea2d"
            },
            $tags:
              '{type:"OutOfRangeAlarmExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/rangeAlarm" name:"rangeAlarm"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@2bd3aff5"
            },
            high: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "73.00", value: 73 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@5b9dc9c7"
            },
            low: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "71.00", value: 71 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@31b3657a"
            },
            lowEnabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@ac0fdc7"
            },
            deadband: {
              $class: "com.smartbt.spserver.model.types.NumericPropertyValue",
              data: { valueDisplay: "1.00", value: 1 },
              $str: "com.smartbt.spserver.model.types.NumericPropertyValue@39c65706"
            },
            currentState: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "?", value: "?" },
              $flags: 5,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@ca07208"
            }
          },
          $str: "com.smartbt.spserver.sys.alarm.extensions.OutOfRangeAlarmExtension"
        },
        updateInterval: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@57fdbdad"
        },
        $settings: {
          coor: "25.0x25.0",
          precision: "2",
          units: {
            $class: "com.smartbt.spserver.sys.unit.Unit",
            $val: "temperature:fahrenheit:°F"
          }
        },
        bacnetInstanceNumber: {
          $class: "com.smartbt.spserver.model.types.IntegerPropertyValue",
          data: { valueDisplay: "5", value: 5 },
          $str: "com.smartbt.spserver.model.types.IntegerPropertyValue@739ee987"
        },
        bacnetObjectType: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "analog-value", value: "analog-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@4a740bbf"
        },
        covHistory: {
          $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
          data: {
            $class: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension",
            label: {
              $class: "com.smartbt.spserver.model.types.StringPropertyValue",
              data: { valueDisplay: "$parent.name/$name", value: "$parent.name/$name" },
              $flags: 8,
              $str: "com.smartbt.spserver.model.types.StringPropertyValue@38e44633"
            },
            $tags:
              '{type:"NumericCovHistoryExtension" path:"/Networks/Distech/Florida/VAV/SpaceTemp/covHistory" name:"covHistory"}',
            enabled: {
              $class: "com.smartbt.spserver.model.types.BooleanPropertyValue",
              data: { valueDisplay: "true", value: true },
              $str: "com.smartbt.spserver.model.types.BooleanPropertyValue@3391484e"
            }
          },
          $str: "com.smartbt.spserver.sys.history.NumericCovHistoryExtension"
        },
        bacnetPoint: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "?", value: "?" },
          $flags: 7,
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@503b1a55"
        },
        $tags:
          '{type:"NumericEndpointControlPoint" path:"/Networks/Distech/Florida/VAV/SpaceTemp" name:"SpaceTemp"}',
        bacnetPropertyName: {
          $class: "com.smartbt.spserver.model.types.StringPropertyValue",
          data: { valueDisplay: "present-value", value: "present-value" },
          $str: "com.smartbt.spserver.model.types.StringPropertyValue@3c2e5c06"
        }
      },
      AirFlow: {}
    }
  }
};
