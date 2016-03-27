(function(){
	var resumeModule = angular.module("resume", ["ngMaterial"]);

	resumeModule.controller("ResumeController", function($scope){
		this.CVproducts = CVProjects;
	});

	var CVProjects = [
		{
			name: "Computer Vision Project 1: Image Filtering and Hybrid Images",
			page_path: "projects\\cv_proj1\\index.html",
			img_path: "projects\\cv_proj1\\Results\\cat-dog\\hybrid_image.jpg",
			github_link: "https://github.com/all4win/Computer_Vision_Proj1_Image_Filtering_and_Hybrid_Images",
			description: "This project focuses on the application of fundamental filters on the given images. The image filters implemented within this project are identify_filter, blur_filter, large_blur_filter, sobel_filter, laplacian_filter and high_pass_filter. With these filters, we can then build the hybrid images by combining high frequency image and low frequency image.",
		},
		{
			name: "Computer Vision Project 2: Local Feature Matching",
			page_path: "projects\\cv_proj2\\index.html",
			img_path: "projects\\cv_proj2\\Results\\Mount Rushmore\\intersting_points.jpg",
			github_link: "https://github.com/all4win/Computer_Vision_Proj2_Local_Feature_Matching",
			description: "The objective of this project is to find the matches between local features of two images. In general, the matching process can be divided into three steps: The first step is to find the corner points using a Harris corner detector, apply the threshold, and then pick the local maxima of each connected component. The second step is to calculate the SIFT descriptors for the interesting points. The final step is to calculate the feature differences and select point pairs according to the threshold ratio.",
		},
		{
			name: "Computer Vision Project 3: Camera Calibration and Fundamental Matrix Estimation with RANSAC",
			page_path: "projects\\cv_proj3\\index.html",
			img_path: "projects\\cv_proj3\\results\\Extra\\part3\\vis_arrows_1_with_normalization.jpg",
			github_link: "https://github.com/all4win/Computer_Vision_Proj2_Local_Feature_Matching",
			description: "The objective of this project is to apply the knowledge of camera and scene geometry. In general, the project consists of three parts: The first part is to estimate the camera projection matrix which maps the 3D coordinates (real world) to 2D coordinates (image), and thus find the camera center of the view. The second part is to estimate the fundamental matrix based on the input 2D point pairs. The final part is to estimate the fundamental matrix using the RANSAC based on the unreliable point pairs given by SIFT matches.",
		},
		{
			name: "Computer Vision Project 4: Scene Recognition with Bag of Words",
			page_path: "projects\\cv_proj4\\index.html",
			img_path: "projects\\cv_proj4\\confusion_matrix.png",
			github_link: "https://github.com/all4win/Computer_Vision_Proj2_Local_Feature_Matching",
			description: "This project is aimed to accomplish image recognition. The approaches I tried are the combinations according to the suggestions of the project requirement, which consist of 2 different image representations -- tiny images and bags of SIFT features -- and 2 different classification techniques -- nearest neighbor and linear SVM.",
		},
		{
			name: "Computer Vision Project 5: Face Detection with a Sliding Window",
			page_path: "projects\\cv_proj5\\index.html",
			img_path: "projects\\cv_proj5\\class scene.jpg",
			github_link: "https://github.com/all4win/Computer_Vision_Proj2_Local_Feature_Matching",
			description: "This project is aimed to implement the face detection algorithm using the sliding window. To complete the project, I followed the following pipeline as suggested by the course web:\n1.Extract the Positive and Negative Features\n2.Train the SVM Classifier\n3.Apply the Learned Model on Test Set\n4.Detection Display",
		},
		{
			name: "Computer Vision Project 6: Deep Learning",
			page_path: "projects\\cv_proj6\\index.html",
			img_path: "projects\\cv_proj6\\results\\deep.jpg",
			github_link: "https://github.com/all4win/Computer_Vision_Proj2_Local_Feature_Matching",
			description: "This project aims to learn the classifications of the images by buidling a network. There there several modification I made on the starter code to achieve the goal accuracy:\n1.Jitting Data\n2.Normalizaiton (Zero Center)\n3.Regularization\n4.Deeper Network",
		}
	]


})();