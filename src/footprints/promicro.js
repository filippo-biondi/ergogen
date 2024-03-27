// Arduino ProMicro atmega32u4au
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    class: 'MCU',
    orientation: 'down',
    batteryPins: false,
    RAW: {type: 'net', value: 'RAW'},
    GND: {type: 'net', value: 'GND'},
    RST: {type: 'net', value: 'RST'},
    VCC: {type: 'net', value: 'VCC'},
    P21: {type: 'net', value: 'P21'},
    P20: {type: 'net', value: 'P20'},
    P19: {type: 'net', value: 'P19'},
    P18: {type: 'net', value: 'P18'},
    P15: {type: 'net', value: 'P15'},
    P14: {type: 'net', value: 'P14'},
    P16: {type: 'net', value: 'P16'},
    P10: {type: 'net', value: 'P10'},
    P1: {type: 'net', value: 'P1'},
    P0: {type: 'net', value: 'P0'},
    P2: {type: 'net', value: 'P2'},
    P3: {type: 'net', value: 'P3'},
    P4: {type: 'net', value: 'P4'},
    P5: {type: 'net', value: 'P5'},
    P6: {type: 'net', value: 'P6'},
    P7: {type: 'net', value: 'P7'},
    P8: {type: 'net', value: 'P8'},
    P9: {type: 'net', value: 'P9'},
    Bplus: {type: 'net', value: 'Bplus'},
    Bminus: {type: 'net', value: 'Bminus'}
  },
  body: p => {
    function standard(silk_layer) {
      return `
        (module ProMicro (layer F.Cu) (tedit 5B307E4C)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer ${silk_layer}) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer ${silk_layer}) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      
        ${''/* illustration of the (possible) USB port overhang */}
        (fp_line (start -19.304 -3.81) (end -14.224 -3.81) (layer Dwgs.User) (width 0.15))
        (fp_line (start -19.304 3.81) (end -19.304 -3.81) (layer Dwgs.User) (width 0.15))
        (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.15))
        (fp_line (start -14.224 -3.81) (end -14.224 3.81) (layer Dwgs.User) (width 0.15))
      
        ${''/* component outline */}
        (fp_line (start -17.78 8.89) (end 15.24 8.89) (layer ${silk_layer}) (width 0.15))
        (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer ${silk_layer}) (width 0.15))
        (fp_line (start 15.24 -8.89) (end -17.78 -8.89) (layer ${silk_layer}) (width 0.15))
        (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer ${silk_layer}) (width 0.15))
      `
    }

    function pins(def_neg, def_pos, silk_layer, font_effect) {
      return `
        ${''/* extra border around "RAW", in case the rectangular shape is not distinctive enough */}
        (fp_line (start -15.24 ${def_pos}6.35) (end -12.7 ${def_pos}6.35) (layer ${silk_layer}) (width 0.15))
        (fp_line (start -15.24 ${def_pos}6.35) (end -15.24 ${def_pos}8.89) (layer ${silk_layer}) (width 0.15))
        (fp_line (start -12.7 ${def_pos}6.35) (end -12.7 ${def_pos}8.89) (layer ${silk_layer}) (width 0.15))
      
        ${''/* pin names */}
        (fp_text user RAW (at -13.97 ${def_pos}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GND (at -11.43 ${def_pos}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user RST (at -8.89 ${def_pos}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user VCC (at -6.35 ${def_pos}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P21 (at -3.81 ${def_pos}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P20 (at -1.27 ${def_pos}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P19 (at 1.27 ${def_pos}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P18 (at 3.81 ${def_pos}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P15 (at 6.35 ${def_pos}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P14 (at 8.89 ${def_pos}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P16 (at 11.43 ${def_pos}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P10 (at 13.97 ${def_pos}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
      
        (fp_text user P01 (at -13.97 ${def_neg}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P00 (at -11.43 ${def_neg}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GND (at -8.89 ${def_neg}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user GND (at -6.35 ${def_neg}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P02 (at -3.81 ${def_neg}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P03 (at -1.27 ${def_neg}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P04 (at 1.27 ${def_neg}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P05 (at 3.81 ${def_neg}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P06 (at 6.35 ${def_neg}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P07 (at 8.89 ${def_neg}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P08 (at 11.43 ${def_neg}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
        (fp_text user P09 (at 13.97 ${def_neg}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
      
        ${''/* and now the actual pins */}
        (pad 1 thru_hole rect (at -13.97 ${def_pos}7.62 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.RAW})
        (pad 2 thru_hole circle (at -11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 3 thru_hole circle (at -8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.RST})
        (pad 4 thru_hole circle (at -6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.VCC})
        (pad 5 thru_hole circle (at -3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P21})
        (pad 6 thru_hole circle (at -1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P20})
        (pad 7 thru_hole circle (at 1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P19})
        (pad 8 thru_hole circle (at 3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P18})
        (pad 9 thru_hole circle (at 6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P15})
        (pad 10 thru_hole circle (at 8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P14})
        (pad 11 thru_hole circle (at 11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P16})
        (pad 12 thru_hole circle (at 13.97 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P10})
        
        (pad 13 thru_hole circle (at -13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P1})
        (pad 14 thru_hole circle (at -11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P0})
        (pad 15 thru_hole circle (at -8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 16 thru_hole circle (at -6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 17 thru_hole circle (at -3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P2})
        (pad 18 thru_hole circle (at -1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P3})
        (pad 19 thru_hole circle (at 1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P4})
        (pad 20 thru_hole circle (at 3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P5})
        (pad 21 thru_hole circle (at 6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P6})
        (pad 22 thru_hole circle (at 8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P7})
        (pad 23 thru_hole circle (at 11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P8})
        (pad 24 thru_hole circle (at 13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P9})
      `
    }

    function batteryPins(p, def_neg, def_pos, silk_layer, font_effect) {
      if(p.batteryPins) {
        return `
          (fp_text user "B+" (at -16.51 ${def_pos}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
          (fp_text user "B-" (at -16.51 ${def_neg}4.8 ${p.r + 90}) (layer ${silk_layer}) (effects (font (size 0.8 0.8) (thickness 0.15)) ${font_effect}))
          (pad 25 thru_hole roundrect (at -16.51 ${def_pos}7.62 0) (size 1.5 1.5) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) (roundrect_rratio 0.25) ${p.Bplus})
          (pad 25 thru_hole roundrect (at -16.51 ${def_neg}7.62 0) (size 1.5 1.5) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) (roundrect_rratio 0.25) ${p.Bminus})
        `
      } else {
        return ''
      }
    }

    if(p.orientation == 'down') {
      return `
        ${standard('F.SilkS')}
        ${pins('-', '', 'F.SilkS', '')}
        ${batteryPins(p, '-', '', 'F.SilkS', '')})
        `
    } else {
      return `
        ${standard('B.SilkS')}
        ${pins('', '-', 'B.SilkS', '(justify mirror)')}
        ${batteryPins(p, '', '-', 'B.SilkS', '(justify mirror)')})
        `
    }
  }
}
