// 每次构建 CLI 自动生成，切勿修改（修改后，构建时也将重写此文件）。
import { 
	Indicator
} from 'mint-ui';
import Vue 		from 'vue';
import vugPage 	 from './[page_name].vue';

Indicator.open('加载中...');

new Vue({
	el: '#app',
	components: {
		vugPage,
	},
	mounted:function(){
		Indicator.close();
	}
})