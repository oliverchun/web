function maopao(arr) {
	for(var i = 0; i < arr.length; i++) { //比较轮次
		//每一轮比较的次数
		for(var j = 0; j < arr.length - i - 1; j++) {
			//判断两个数大小交换
			if(arr[j] > arr[j + 1]) {
				var tmp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = tmp;

			}

		}
	}
}


function xunze(arr) {
	for(var i = 0; i < arr.length - 1; i++) {
		for(var j = i + 1; j < arr.length; j++) {
			if(arr[i] > arr[j]) {
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}
}