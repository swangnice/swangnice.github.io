# SCCB (Serial Camera Control Bus)

## Overview
SCCB is primarily used for interfacing digital cameras with MCUs. It allows for simple and efficient control over camera settings, including brightness, constrast, and resolution among others. It very similar with I2C in term of physical layer and protocol.

## Compare with I2C
SCCbb is specificially designed for camera control, so it reduced some control commands of I2C focusing on the needs of video transmission devices. Compared with I2C, it does not support feaures like clock stretching, arbitation and multi-Master capability.





## Resources
1. [OmniVision Official Document](https://www.waveshare.com/w/upload/1/14/OmniVision_Technologies_Seril_Camera_Control_Bus%28SCCB%29_Specification.pdf)