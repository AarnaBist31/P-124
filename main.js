right_hand_X = 0;
right_hand_Y = 0;
left_hand_X = 0;
left_hand_Y = 0;

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);
      right_hand_X = results[0].pose.right_hand.x;
      right_hand_Y = results[0].pose.right_hand.y;
      left_hand_X = results[0].pose.left_hand.x;
      left_hand_Y = results[0].pose.left_hand.y;
      console.log("right hand x = " + right_hand_X);
      console.log("right hand y = " + right_hand_Y);
      console.log("left hand x = " + left_hand_X);
      console.log("left hand y = " + left_hand_Y);
  }
}

function draw()
{
  Image(video, 0, 0, 300, 300);
}

