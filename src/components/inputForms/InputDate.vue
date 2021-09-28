<template>
  <v-dialog v-model="modal" persistent max-width="290">
    <template v-slot:activator="{ attrs }">
      <v-text-field
        v-bind="{ ...$attrs, ...attrs }"
        :value="value"
        @input="onInput"
        @keyup="onKeyup"
				:maxlength="max"
      >
				<template v-slot:append>
					<v-btn icon small tabindex="-1" @click="open">
						<v-icon>mdi-magnify</v-icon>
					</v-btn>
				</template>
      </v-text-field>
    </template>
		<v-card>
			<v-toolbar>
				<v-toolbar-title>{{$attrs.label}}</v-toolbar-title>
				<v-spacer/>
				<v-btn icon plain @click="modal = !modal">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-toolbar>
			<v-date-picker
				v-model="date"
				no-title
				@input="picker"
				:day-format="dayFormat"
			/>
		</v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "InputDate",
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    value: String,
  },
  data() {
    return {
      modal: false,
			max: 10,
			date : "",
    };
  },
	methods : {
		onInput(val) {
			this.$emit('input', val);
		},
    onKeyup(val) {
			let rtVal = this.value.replace(/[^\d]/g, "");
			let pattern = /([\d]{0,4})([\d]{0,2})([\d]{0,2})/;		
			const matchs = pattern.exec(rtVal);
			rtVal = matchs[1];
			if(matchs[2] != 0 && (matchs[2] < 1 || matchs[2] > 12))  matchs[2] = 12;
			let lDay = this.lastDay(matchs[1], matchs[2]);
			if(matchs[3] > Number(lDay)) {
				matchs[3] = lDay
			}
			this.max = 10;
			rtVal += matchs[2] ? '-'+ matchs[2] : "";
			rtVal += matchs[3] ? '-'+ matchs[3] : "";
			this.$emit('input', rtVal);
		},
		lastDay(year, month){
			let rtVal = 0;
			switch (String(month)) {
				case '01': rtVal = 31; break;
				case '02': 
				  if(year%4 === 0) rtVal = 29;
					else rtVal = 28;
					break;
				case '03': rtVal = 31; break;
				case '04': rtVal = 30; break;
				case '05': rtVal = 31; break;
				case '06': rtVal = 30; break;
				case '07': rtVal = 31; break;
				case '08': rtVal = 31; break;
				case '09': rtVal = 30; break;
				case '10': rtVal = 31; break;
				case '11': rtVal = 30; break;
				case '12': rtVal = 31; break;
			}
			return rtVal;
		},
		open() {
			const pattern = /^\d{4}-\d{2}-\d{2}$/;
			this.date = pattern.test(this.value) ? this.value : "";
			this.modal = true;
		},
		picker() {
			this.$emit('input', this.date);
			this.modal = false;
		},
		dayFormat(day) {
			if(!this.modal) return;
			// console.log(day);
			const arr = day.split('-');
			return Number(arr[arr.length-1]);
		}
	}
};
</script>