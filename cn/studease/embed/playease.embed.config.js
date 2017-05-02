﻿(function(playease) {
	var utils = playease.utils,
		events = playease.events,
		embed = playease.embed,
		core = playease.core,
		alphas = core.components.bulletscreen.alphas,
		positions = core.components.bulletscreen.positions,
		sourcetypes = core.renders.sourcetypes,
		rendermodes = core.renders.modes,
		skinmodes = core.skins.modes;
	
	embed.config = function(config) {
		var _defaults = {
			url: 'http://' + window.location.host + '/vod/sample.mp4',
			width: 640,
			height: 360,
			sources: [],
			type: sourcetypes.VOD,
			cors: 'no-cors',
			bufferTime: .1,
			controls: true,
			autoplay: true,
			playsinline: true,
			poster: '',
			report: true,
			debug: false,
			bulletscreen: {
				enable: true,
				fontsize: 14,
				alpha: alphas.LOW,
				position: positions.FULLSCREEN,
				visible: true
			},
			render: {
				name: rendermodes.DEFAULT,
				swf: 'swf/playease.swf'
			},
			skin: {
				name: skinmodes.DEFAULT
			},
			events: {}
		},
		
		_config = utils.extend({}, _defaults, config);
		
		return _config;
	};
	
	embed.config.addConfig = function(oldConfig, newConfig) {
		return utils.extend(oldConfig, newConfig);
	};
})(playease);
