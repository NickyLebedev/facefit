import mosse from 'mosse';
import jsfeat from 'jsfeat';

export default class FaceDetection {
    private _msxmin;
    private _msymin;
    private _msymax;
    private _msmodelheight;

    private _element: any;
    private _model: any;

    private _mosseFilter = mosse.mosseFilter;
    private _leftEyeFilter = mosse.filters.left_eye_filter;
    private _rightEyeFilter = mosse.filters.right_eye_filter;
    private _noseFilter = mosse.filters.nose_filter;

    private _mossefLeftEye;
    private _mossefRightEye;
    private _mossefNose;

    private _rightEyePosition = [0.0, 0.0];
    private _leftEyePosition = [0.0, 0.0];
    private _nosePosition = [0.0, 0.0];

    constructor(pdmModel: any, params: any) {
        if (params === undefined) params = {};
        if (params.workSize === undefined) params.workSize = 200;
        if (params.minScale === undefined) params.minScale = 2;
        if (params.scaleFactor === undefined) params.scaleFactor = 1.15;
        if (params.useCanny === undefined) params.useCanny = false;
        if (params.edgesDensity === undefined) params.edgesDensity = 0.13;
        if (params.equalizeHistogram === undefined) params.equalizeHistogram = false;
        if (params.min_neighbors === undefined) params.min_neighbors = 2;
        if (params.confidenceThreshold === undefined) params.confidenceThreshold = 106.1;
        if (params.useWebWorkers === undefined) params.useWebWorkers = true;

        if ((<any>window).Worker) params.useWebWorkers = false;
    }

    init(video: any) {
        this._element = video;
    }
}
